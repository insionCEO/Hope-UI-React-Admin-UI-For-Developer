from ..exceptions import AccountInfoError, ConnectionError
from .get_account_info import get_account_info

def get_margin_level(connection) -> float:
    """
    Get current margin level.
    Returns:
        float: Current margin level in percentage.
    Raises:
        AccountInfoError: If margin level cannot be retrieved.
        ConnectionError: If not connected to terminal.
    """
    account_info = get_account_info(connection)
    return account_info["margin_level"]
