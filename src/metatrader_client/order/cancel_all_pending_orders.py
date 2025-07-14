from .get_all_pending_orders import get_all_pending_orders
from .cancel_pending_order import cancel_pending_order

def cancel_all_pending_orders(connection):
    """
    Cancels all pending orders.

    :param connection: MetaTrader 5 connection object.
    :return: A dictionary with the result of the operation.
    """
    pending_orders = get_all_pending_orders(connection)
    cancel_count = 0
    for id in pending_orders["id"]:
        cancel_pending_order(connection, id)
        cancel_count += 1
    return { "error": False, "message": f"Cancel {cancel_count} pending orders success", "data": None }
