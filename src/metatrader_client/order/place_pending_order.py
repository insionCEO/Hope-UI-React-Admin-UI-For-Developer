from typing import Optional, Union
from ..types import TradeRequestActions
from .send_order import send_order
from ..client_market import MT5Market

def place_pending_order(
	connection,
	*,
	type: str,
	symbol: str,
	volume: Union[float, int],
	price: Union[float, int],
	stop_loss: Optional[Union[float, int]] = 0.0,
	take_profit: Optional[Union[float, int]] = 0.0,
):
	"""
	Places a pending order on the MetaTrader 5 platform.

	This function validates the order type and retrieves the current market
	price for the specified symbol. It then determines whether to place a 
	BUY_LIMIT, BUY_STOP, SELL_LIMIT, or SELL_STOP order based on the current 
	price and the desired order price. The order is sent to the MetaTrader 5 
	server for execution.

	Args:
		connection: MetaTrader 5 connection object.
		type: The type of order, either 'BUY' or 'SELL'.
		symbol: The trading instrument name (e.g., "EURUSD").
		volume: The trade volume in lots.
		price: The price at which to place the pending order.
		stop_loss: Optional stop loss level.
		take_profit: Optional take profit level.

	Returns:
		A dictionary with the result of the order placement. If successful,
		it contains an order ID. Otherwise, it contains an error message.
	"""
	
	accepted_types  = ["BUY", "SELL"]
	if type not in accepted_types:
		return { "error": True, "message": f"Invalid type, should be BUY or SELL.", "data": None }
	
	market = MT5Market(connection)
	current_price = market.get_symbol_price(symbol_name=symbol)
	if current_price is None:
		return { "error": True, "message": f"Cannot get latest market price for {symbol}", "data": None }
	
	order_type = None
	price = float(price)
	if type == "BUY":
		order_type = "BUY_LIMIT" if current_price["ask"] > price else "BUY_STOP"
	else:
		order_type = "SELL_LIMIT" if current_price["bid"] < price else "SELL_STOP"

	response = send_order(
		connection,
		action = TradeRequestActions.PENDING,
		order_type = order_type,
		symbol = symbol,
		volume = float(volume),
		price = float(price),
		stop_loss = float(stop_loss),
		take_profit = float(take_profit),
	)

	if response["success"] is False:
		return { "error": True, "message": response["message"], "data": None }

	return {
		"error": False,
		"message": f"Place pending order {order_type} {symbol} {volume} LOT at {price} success (Order ID: {response['data'].order})",
		"data": response["data"],
	}