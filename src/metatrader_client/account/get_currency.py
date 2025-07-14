from ..exceptions import AccountInfoError, ConnectionError
from .get_account_info import get_account_info

def get_currency(connection) -> str:
    """
    Get account currency.
    Returns:
        str: Account currency (e.g., "USD", "EUR").
    Raises:
        AccountInfoError: If currency cannot be retrieved.
        ConnectionError: If not connected to terminal.
    """
    account_info = get_account_info(connection)
    return account_info["currency"]
