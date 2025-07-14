from ..exceptions import AccountInfoError, ConnectionError
from .get_account_info import get_account_info

def get_margin(connection) -> float:
    """
    Get current used margin.
    Returns:
        float: Current used margin.
    Raises:
        AccountInfoError: If margin cannot be retrieved.
        ConnectionError: If not connected to terminal.
    """
    account_info = get_account_info(connection)
    return account_info["margin"]
