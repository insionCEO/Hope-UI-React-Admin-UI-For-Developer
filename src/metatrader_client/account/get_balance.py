from ..exceptions import AccountInfoError, ConnectionError
from .get_account_info import get_account_info

def get_balance(connection) -> float:
    """
    Get current account balance.
    Balance is the amount of money in the account without considering open positions.
    Returns:
        float: Current account balance.
    Raises:
        AccountInfoError: If balance cannot be retrieved.
        ConnectionError: If not connected to terminal.
    """
    account_info = get_account_info(connection)
    return account_info["balance"]
