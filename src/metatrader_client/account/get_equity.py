from ..exceptions import AccountInfoError, ConnectionError
from .get_account_info import get_account_info

def get_equity(connection) -> float:
    """
    Get current account equity.
    Equity is the balance plus floating profit/loss from open positions.
    Returns:
        float: Current account equity.
    Raises:
        AccountInfoError: If equity cannot be retrieved.
        ConnectionError: If not connected to terminal.
    """
    account_info = get_account_info(connection)
    return account_info["equity"]
