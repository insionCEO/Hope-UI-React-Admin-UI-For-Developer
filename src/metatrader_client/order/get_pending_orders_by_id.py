from pandas import DataFrame
from .get_pending_orders import get_pending_orders
from typing import Union

def get_pending_orders_by_id(connection, id: Union[int, str]) -> DataFrame:
    """
    Get a pending order by its ID.

    Args:
        connection: The connection object to the MetaTrader platform.
        id: The unique identifier of the pending order to retrieve.

    Returns:
        A DataFrame containing the order data if successful, otherwise an empty DataFrame.
    """
    return get_pending_orders(connection, ticket=id)
