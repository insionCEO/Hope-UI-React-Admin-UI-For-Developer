from pandas import DataFrame
from .get_pending_orders import get_pending_orders

def get_pending_orders_by_symbol(connection, symbol_name: str) -> DataFrame:
    """
    Get pending orders with the given symbol name.

    Args:
        connection: The connection object to the MetaTrader platform.
        symbol_name: The symbol name of the orders to be retrieved.

    Returns:
        A DataFrame containing the retrieved orders, ordered by time (descending).
    """
    return get_pending_orders(connection, symbol_name=symbol_name)
