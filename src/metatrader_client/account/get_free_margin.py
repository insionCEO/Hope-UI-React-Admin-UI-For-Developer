from ..exceptions import AccountInfoError, ConnectionError
from .get_account_info import get_account_info

def get_free_margin(connection) -> float:
    """
    Get current free margin.
    Returns:
        float: Current free margin.
    Raises:
        AccountInfoError: If free margin cannot be retrieved.
        ConnectionError: If not connected to terminal.
    """
    account_info = get_account_info(connection)
    return account_info["margin_free"]
