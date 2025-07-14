from typing import Optional, Union
from ..types import TradeRequestActions
from .get_pending_orders import get_pending_orders
from .send_order import send_order

def modify_pending_order(
    connection,
    *,
    id: Union[int, str],
    price: Optional[Union[int, float]] = None,
    stop_loss: Optional[Union[int, float]] = None,
    take_profit: Optional[Union[int, float]] = None,
):

    order_id = None
    order = None

    try:
        order_id = int(id)
    except ValueError:
        return {
            "error": True,
            "message": f"Invalid order ID {id}",
            "data": None,
        }
    
    orders = get_pending_orders(connection, ticket=order_id)

    if orders.shape[0] == 0:
        return {
            "error": True,
            "message": f"Invalid order ID {id}",
            "data": None,
        }

    order = orders.iloc[0]
    price = price if price else float(order["open"])
    request = {
        "action": TradeRequestActions.MODIFY,
        "order": order_id,
        "price": price,
        "stop_loss": stop_loss,
        "take_profit": take_profit,
    }

    if stop_loss is None:
        del request["stop_loss"]
    if take_profit is None:
        del request["take_profit"]

    response = send_order(connection, **request)

    if response["success"] is False:
        return { "error": True, "message": response["message"], "data": None }

    data = response["data"]
    return {
        "error": False,
        "message": f"Modify pending order {order_id} success",
        "data": data,
    }