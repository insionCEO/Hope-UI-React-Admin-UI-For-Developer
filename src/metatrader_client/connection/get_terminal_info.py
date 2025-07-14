def get_terminal_info(connection):
    """
    Get information about the MetaTrader 5 terminal.
    Returns:
        Dict: Terminal information.
    Raises:
        ConnectionError: If not connected to the terminal.
    """
    import logging
    logger = logging.getLogger("MT5Connection")
    from metatrader_client.exceptions import ConnectionError
    import MetaTrader5 as mt5
    from .is_connected import is_connected
    if not is_connected(connection):
        raise ConnectionError("Not connected to MetaTrader 5 terminal")
    try:
        terminal_info = mt5.terminal_info()
        if terminal_info is not None:
            return terminal_info._asdict()
        else:
            from ._get_last_error import _get_last_error
            error_code, error_message = _get_last_error(connection)
            raise ConnectionError(f"Could not get terminal info: {error_message} (Error code: {error_code})")
    except Exception as e:
        raise ConnectionError(f"Error getting terminal info: {str(e)}")
