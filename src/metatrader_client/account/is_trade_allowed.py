import logging
from ..exceptions import AccountInfoError, ConnectionError
logger = logging.getLogger("MT5Account")

def is_trade_allowed(connection) -> bool:
    """
    Check if trading is allowed for this account.
    Returns:
        bool: True if trading is allowed, False otherwise.
    Raises:
        AccountInfoError: If trading permission cannot be determined.
        ConnectionError: If not connected to terminal.
    """
    if not connection.is_connected():
        raise ConnectionError("Not connected to MetaTrader 5 terminal.")
    logger.debug("Checking if trading is allowed...")
    import MetaTrader5 as mt5
    trade_allowed = mt5.terminal_info().trade_allowed
    logger.debug(f"Trading allowed: {trade_allowed}")
    return bool(trade_allowed)
