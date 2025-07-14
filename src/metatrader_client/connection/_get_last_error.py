def _get_last_error(connection):
    """
    Get the last error from the MetaTrader 5 terminal.
    Returns:
        Tuple[int, str]: Error code and message.
    """
    import MetaTrader5 as mt5
    if not hasattr(mt5, 'last_error'):
        return (-1, "Unknown error (mt5.last_error not available)")
    error = mt5.last_error()
    if error is None:
        return (0, "No error")
    try:
        code = error[0]
        message = error[1]
        return (code, message)
    except (IndexError, TypeError):
        return (-1, str(error))
