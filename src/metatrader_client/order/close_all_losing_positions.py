from .get_all_positions import get_all_positions
from .close_position import close_position

def close_all_losing_positions(connection):
    """
    Close all losing positions.

    Close all positions that have a negative profit.

    Args:
        connection: The connection object to the MetaTrader platform.

    Returns:
        A dictionary containing an error flag, a message, and the number of positions closed.
    """
    positions = get_all_positions(connection)
    positions = positions[positions["profit"] < 0]
    count = 0
    for id in positions["id"]:
        close_position(connection, id)
        count += 1
    return { "error": False, "message": f"Close {count} losing positions success", "data": None }
