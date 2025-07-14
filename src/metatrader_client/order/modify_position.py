from typing import Optional, Union
from ..types import TradeRequestActions
from .send_order import send_order
from .get_positions_by_id import get_positions_by_id

def modify_position(
	connection,
	id: Union[str, int],
	*,
	stop_loss: Optional[Union[int, float]] = None,
	take_profit: Optional[Union[int, float]] = None,
):
	"""
	Modify an existing position's stop loss and take profit levels.

	This function attempts to modify the stop loss and take profit of an 
	open position identified by the given ID. If the position ID is invalid 
	or not found, it returns an error. If the modification request is 
	successful, it returns the updated position data.

	Args:
		connection: The connection object to the MetaTrader platform.
		id: The unique identifier of the position to modify.
		stop_loss: The new stop loss level. If None, the current stop loss 
			level is retained.
		take_profit: The new take profit level. If None, the current take 
			profit level is retained.

	Returns:
		A dictionary containing an error flag, a message, and the position 
		data if successful.
	"""
	
	position_id = None
	position_error = False
	position = None
	
	try:
		position_id = int(id)
	except ValueError:
		position_error = True

	if not position_error:
		positions = get_positions_by_id(connection, position_id)
	if positions.index.size == 0:
		position_error = True
	else:
		position = positions.iloc[0]

	if position_error or position is None:
		return {
			"error": True,
			"message": f"Invalid position ID {id}",
			"data": None,
		}
	
	response = send_order(
		connection,
		action = TradeRequestActions.SLTP,
		position = position_id,
		stop_loss = stop_loss if stop_loss is not None else position["stop_loss"],
		take_profit = take_profit if take_profit is not None else position["take_profit"],
	)

	if response["success"] is False:
		return { "error": True, "message": response["message"], "data": None }

	return {
		"error": False,
		"message": f"Modify position {position_id} success, SL at {stop_loss}, TP at {take_profit}, current price {response['data'].price}",
		"data": response["data"],
	}