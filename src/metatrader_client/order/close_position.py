from typing import Union
from ..types import TradeRequestActions
from .send_order import send_order
from .get_positions_by_id import get_positions_by_id

def close_position(connection, id: Union[str, int]):
    """
    Close a position by its ID.

    Args:
        connection: MetaTrader 5 connection object.
        id: The unique identifier of the position to close.

    Returns:
        A dictionary containing an error flag, a message, and the closed
        position data if successful.
    """
    
    try:
        position_id = int(id)
    except ValueError:
        return {
            "error": True,
            "message": f"Invalid position ID '{id}', it should be a valid integer",
            "data": None,
        }

    positions = get_positions_by_id(connection, position_id)
    if positions.index.size == 0:
        return {
            "error": True,
            "message": f"Invalid position ID '{id}'",
            "data": None,
        }
    position = positions.iloc[0]
    response = send_order(
        connection,
        action=TradeRequestActions.DEAL,
        position=position_id,
        order_type="SELL" if position["type"] == "BUY" else "BUY",
        symbol=position["symbol"],
        volume=position["volume"],
    )
    if response["success"] is False:
        return { "error": True, "message": response["message"], "data": None }
    data = response["data"]
    return {
        "error": False,
        "message": f"Close position {position_id} success at price {getattr(data, 'price', None)}",
        "data": data
    }
