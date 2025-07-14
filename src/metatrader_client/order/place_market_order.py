from typing import Union, Optional
from ..types import TradeRequestActions
from .send_order import send_order

def place_market_order(connection, *, type: str, symbol: str, volume: Union[float, int], stop_loss: Optional[float] = 0.0, take_profit: Optional[float] = 0.0):
    """
    Places a market order for a specified financial instrument.

    This function sends a market order request to the MetaTrader 5 platform. It supports
    BUY and SELL order types and returns the result of the operation.

    Args:
        connection: The MetaTrader 5 connection object.
        type: The type of market order, either "BUY" or "SELL".
        symbol: The trading instrument symbol (e.g., "EURUSD").
        volume: The volume of the trade operation in lots.

    Returns:
        dict: A dictionary containing the result of the order operation. Includes an error flag,
              a message detailing the success or failure, and the data from the response.
    """
	
    type = type.upper()

    if type not in ["BUY", "SELL"]:
        return { "error": True, "message": f"Invalid type, should be BUY or SELL.", "data": None }

    response = send_order(
        connection,
        action=TradeRequestActions.DEAL,
        order_type=type,
        symbol=symbol,
        volume=volume,
        stop_loss=stop_loss,
        take_profit=take_profit,
    )

    if response["success"] is False:
        return { "error": True, "message": response["message"], "data": None }

    data = response["data"]

    if data is None:
        return {
            "error": False,
            "message": "Market order success.",
            "data": response
        }

    return {
        "error": False,
        "message": f"{type} {data.request.symbol} {data.volume} LOT at {data.price} success (Position ID: {data.order})",
        "data": data
    }