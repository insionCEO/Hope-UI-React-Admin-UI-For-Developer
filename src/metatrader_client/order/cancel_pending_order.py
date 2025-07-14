from typing import Union
from ..types import TradeRequestActions
from .send_order import send_order

def cancel_pending_order(connection, id: Union[int, str]):
    """
    Cancel a pending order by its ID.

    Args:
        connection: The connection object to the MetaTrader platform.
        id: The unique identifier of the pending order to cancel.

    Returns:
        A dictionary containing an error flag, a message, and the order data
        if successful.
    """
    try:
        order_id = int(id)
    except ValueError:
        return {
            "error": True,
            "message": f"Invalid order ID {id}",
            "data": None,
        }
    response = send_order(
        connection,
        action=TradeRequestActions.REMOVE,
        order=order_id,
    )
    if response["success"] is False:
        return { "error": True, "message": response["message"], "data": None }
    data = response["data"]
    return {
        "error": False,
        "message": f"Cancel pending order {order_id} success",
        "data": data,
    }
