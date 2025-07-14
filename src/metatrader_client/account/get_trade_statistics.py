from typing import Dict, Any
from ..exceptions import AccountInfoError, ConnectionError
from .get_account_info import get_account_info
from .get_account_type import get_account_type

def get_trade_statistics(connection) -> Dict[str, Any]:
    """
    Get basic trade statistics for the account.
    Returns:
        Dict[str, Any]: Dictionary with trade statistics:
            - balance: Current balance
            - equity: Current equity
            - profit: Current floating profit/loss
            - margin_level: Current margin level
            - free_margin: Available margin for trading
            - account_type: Account type (real, demo, contest)
            - leverage: Account leverage
            - currency: Account currency
    Raises:
        AccountInfoError: If statistics cannot be retrieved.
        ConnectionError: If not connected to terminal.
    """
    account_info = get_account_info(connection)
    stats = {
        "balance": account_info["balance"],
        "equity": account_info["equity"],
        "profit": account_info["profit"],
        "margin_level": account_info["margin_level"],
        "free_margin": account_info["margin_free"],
        "account_type": get_account_type(connection),
        "leverage": account_info["leverage"],
        "currency": account_info["currency"],
    }
    return stats
