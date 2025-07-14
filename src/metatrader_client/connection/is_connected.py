def is_connected(connection):
    """
    Check if connected to the MetaTrader 5 terminal.
    Returns:
        bool: True if connected, False otherwise.
    """
    import logging
    logger = logging.getLogger("MT5Connection")
    import MetaTrader5 as mt5
    try:
        terminal_info = mt5.terminal_info()
        return terminal_info is not None and terminal_info._asdict().get('connected', False) and connection._connected
    except Exception as e:
        logger.warning(f"Error checking connection status: {str(e)}")
        return False
