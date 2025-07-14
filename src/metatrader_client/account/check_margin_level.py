import logging
from ..exceptions import MarginLevelError, AccountInfoError, ConnectionError
from .get_margin_level import get_margin_level
logger = logging.getLogger("MT5Account")

def check_margin_level(connection, min_level: float = 100.0) -> bool:
    """
    Check if margin level is above the specified minimum level.
    Args:
        min_level: Minimum margin level in percentage (default: 100.0).
    Returns:
        bool: True if margin level is above the minimum, False otherwise.
    Raises:
        MarginLevelError: If margin level is below the minimum.
        AccountInfoError: If margin level cannot be retrieved.
        ConnectionError: If not connected to terminal.
    """
    margin_level = get_margin_level(connection)
    if margin_level < min_level:
        msg = f"Margin level too low: {margin_level}% (minimum: {min_level}%)"
        logger.warning(msg)
        raise MarginLevelError(msg)
    return True
