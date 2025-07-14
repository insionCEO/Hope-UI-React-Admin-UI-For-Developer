from typing import Dict, Any
import logging
from ..exceptions import AccountInfoError, ConnectionError

logger = logging.getLogger("MT5Account")

def get_account_info(connection) -> Dict[str, Any]:
    """
    Get comprehensive account information.
    Returns a dictionary with all account properties including:
    - login: Account number
    - trade_mode: Account trade mode (0-real, 1-demo, 2-contest)
    - leverage: Account leverage
    - balance: Account balance in deposit currency
    - credit: Credit in deposit currency
    - profit: Current profit in deposit currency
    - equity: Equity in deposit currency
    - margin: Margin used in deposit currency
    - margin_free: Free margin in deposit currency
    - margin_level: Margin level as percentage
    - margin_so_call: Margin call level
    - margin_so_so: Margin stop out level
    - currency: Account currency
    - name: Client name
    - server: Trade server name
    - company: Name of company serving the account
    Returns:
        Dict[str, Any]: Account information including balance, equity, margin, etc.
    Raises:
        AccountInfoError: If account information cannot be retrieved.
        ConnectionError: If not connected to terminal.
    """
    if not connection.is_connected():
        raise ConnectionError("Not connected to MetaTrader 5 terminal.")
    logger.debug("Retrieving account information...")
    import MetaTrader5 as mt5
    account_info = mt5.account_info()
    if account_info is None:
        error = mt5.last_error()
        msg = f"Failed to retrieve account information: {error[1]}"
        logger.error(msg)
        raise AccountInfoError(msg, error[0])
    return account_info._asdict()
