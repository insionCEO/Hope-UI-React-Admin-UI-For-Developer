from pandas import DataFrame
from .get_positions import get_positions

def get_positions_by_symbol(connection, symbol: str) -> DataFrame:
    """
    Get open positions with the given symbol name.

    Args:
        connection: The connection object to the MetaTrader platform.
        symbol: The symbol name of the positions to be retrieved.

    Returns:
        A DataFrame containing the retrieved positions, ordered by time (descending).
    """
    return get_positions(connection, symbol_name=symbol)