def connect(connection):
    """
    Connect to the MetaTrader 5 terminal.
    Returns:
        bool: True if successful, False otherwise.
    Raises:
        ConnectionError: If connection fails.
    """
    import logging
    logger = logging.getLogger("MT5Connection")
    from metatrader_client.exceptions import ConnectionError, InitializationError, LoginError
    from ._initialize_terminal import _initialize_terminal
    from ._login import _login
    try:
        _initialize_terminal(connection)
        _login(connection)
        connection._connected = True
        logger.info("Successfully connected to MetaTrader 5 terminal")
        return True
    except (InitializationError, LoginError) as e:
        connection._connected = False
        raise ConnectionError(str(e)) from e
    except Exception as e:
        connection._connected = False
        raise ConnectionError(f"Unexpected error: {str(e)}") from e
