def _login(connection):
    """
    Login to the MetaTrader 5 terminal.
    Returns:
        bool: True if successful, False otherwise.
    Raises:
        LoginError: If login fails.
    """
    import random
    import time
    import logging
    logger = logging.getLogger("MT5Connection")
    from metatrader_client.exceptions import LoginError
    import MetaTrader5 as mt5
    if mt5.account_info() is not None:
        logger.debug("Already logged in")
        return True
    if connection.login is None or connection.password is None or connection.server is None:
        if mt5.terminal_info() is not None:
            logger.debug("No login credentials provided, but terminal is initialized")
            return True
        else:
            raise LoginError("Login credentials not provided")
    logger.debug(f"Attempting to login with login={connection.login}, server={connection.server}")
    retries = 0
    while retries < connection.max_retries:
        try:
            result = mt5.login(
                login=connection.login,
                password=connection.password,
                server=connection.server
            )
            if result:
                logger.debug("Login successful!")
                return True
            error_code, error_message = connection._get_last_error()
            backoff_time = connection.backoff_factor ** retries + random.uniform(0, 0.5)
            logger.warning(f"Login failed: {error_message} (Error code: {error_code}). Retrying in {backoff_time:.2f} seconds.")
            time.sleep(backoff_time)
        except Exception as e:
            logger.error(f"Unexpected error during login: {str(e)}")
            backoff_time = connection.backoff_factor ** retries + random.uniform(0, 0.5)
            time.sleep(backoff_time)
        retries += 1
    error_code, error_message = connection._get_last_error()
    raise LoginError(f"Failed to login to MetaTrader 5 terminal: {error_message} (Error code: {error_code})")
