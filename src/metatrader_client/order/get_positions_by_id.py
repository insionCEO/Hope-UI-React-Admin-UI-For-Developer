from typing import Union
from pandas import DataFrame
from .get_positions import get_positions

def get_positions_by_id(connection, id: Union[int, str]) -> DataFrame:
    """
    Get a position by its ID.

    Args:
        connection: The connection object to the MetaTrader platform.
        id: The unique identifier of the position to retrieve.

    Returns:
        A DataFrame containing the position data if successful, otherwise an empty DataFrame.
    """
    return get_positions(connection, ticket=id)