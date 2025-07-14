from .get_all_positions import get_all_positions
from .close_position import close_position

def close_all_positions_by_symbol(connection, symbol: str):
    """
    Close all open positions for a given symbol.

    Args:
        connection: The connection object to the MetaTrader platform.
        symbol: The symbol of the positions to close.

    Returns:
        A dictionary containing an error flag, a message, and the number of positions closed.
    """
    positions = get_all_positions(connection)
    positions = positions[positions["symbol"] == symbol]
    count = 0
    for id in positions["id"]:
        close_position(connection, id)
        count += 1
    return { "error": False, "message": f"Close {count} {symbol} positions success", "data": None }
