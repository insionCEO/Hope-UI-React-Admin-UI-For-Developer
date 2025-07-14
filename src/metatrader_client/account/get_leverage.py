from ..exceptions import AccountInfoError, ConnectionError
from .get_account_info import get_account_info

def get_leverage(connection) -> int:
    """
    Get account leverage.
    Returns:
        int: Account leverage (e.g., 100 for 1:100 leverage).
    Raises:
        AccountInfoError: If leverage cannot be retrieved.
        ConnectionError: If not connected to terminal.
    """
    account_info = get_account_info(connection)
    return account_info["leverage"]
