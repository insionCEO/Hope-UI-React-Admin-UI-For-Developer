def disconnect(connection):
    """
    Disconnect from the MetaTrader 5 terminal.
    Returns:
        bool: True if successful, False otherwise.
    Raises:
        DisconnectionError: If disconnection fails.
    """
    import logging
    logger = logging.getLogger("MT5Connection")
    from metatrader_client.exceptions import DisconnectionError
    import MetaTrader5 as mt5
    if not connection._connected:
        logger.debug("Already disconnected")
        return True
    try:
        result = mt5.shutdown()
        if result:
            connection._connected = False
            logger.info("Successfully disconnected from MetaTrader 5 terminal")
            return True
        else:
            from ._get_last_error import _get_last_error
            error_code, error_message = _get_last_error(connection)
            raise DisconnectionError(f"Failed to disconnect from MetaTrader 5 terminal: {error_message} (Error code: {error_code})")
    except Exception as e:
        if "not initialized" in str(e).lower():
            connection._connected = False
            logger.debug("Terminal already disconnected")
            return True
        raise DisconnectionError(f"Error disconnecting from MetaTrader 5 terminal: {str(e)}")
