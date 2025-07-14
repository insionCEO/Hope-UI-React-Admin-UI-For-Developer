from .get_pending_orders_by_symbol import get_pending_orders_by_symbol
from .cancel_pending_order import cancel_pending_order

def cancel_pending_orders_by_symbol(connection, symbol: str):
    """
    Cancel all pending orders with the given symbol name.

    Args:
        connection: The connection object to the MetaTrader platform.
        symbol: The symbol name of the orders to be canceled.

    Returns:
        A dictionary with an error flag, a message, and the order data if
        successful.
    """
    pending_orders = get_pending_orders_by_symbol(connection, symbol)
    cancel_count = 0
    for id in pending_orders["id"]:
        cancel_pending_order(connection, id)
        cancel_count += 1
    return { "error": False, "message": f"Cancel {cancel_count} pending orders success", "data": None }
