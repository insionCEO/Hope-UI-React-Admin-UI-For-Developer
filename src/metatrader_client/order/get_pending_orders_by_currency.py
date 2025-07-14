from pandas import DataFrame
from .get_pending_orders import get_pending_orders

def get_pending_orders_by_currency(connection, currency: str) -> DataFrame:
    """
    Get all pending orders for currency.

    Args:
        connection: The connection object to the MetaTrader platform.
        currency: The currency to be filtered.

    Returns:
        A DataFrame containing all pending orders for the given currency, ordered by time (descending).
    """
    currency_filter = f"*{currency}*"
    return get_pending_orders(connection, group=currency_filter)
