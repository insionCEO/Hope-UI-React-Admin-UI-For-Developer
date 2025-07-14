from pandas import DataFrame
from .get_positions import get_positions

def get_all_positions(connection) -> DataFrame:
    """
    Get all open positions.

    Returns:
        All open positions in Panda's DataFrame, ordered by time (descending).
    """
    return get_positions(connection)