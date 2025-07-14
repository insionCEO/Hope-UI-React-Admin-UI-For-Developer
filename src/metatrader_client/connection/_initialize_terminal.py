def _initialize_terminal(connection):
    """
    Initialize the MetaTrader 5 terminal.
    Returns:
        bool: True if successful, False otherwise.
    Raises:
        InitializationError: If initialization fails.
    """
    import random
    import time
    import logging
    logger = logging.getLogger("MT5Connection")
    from metatrader_client.exceptions import InitializationError
    import MetaTrader5 as mt5
    from ._find_terminal_path import _find_terminal_path
    from ._ensure_cooldown import _ensure_cooldown
    _ensure_cooldown(connection)
    if mt5.terminal_info() is not None:
        logger.debug("Terminal is already initialized")
        return True
    if not connection.path:
        try:
            connection.path = _find_terminal_path(connection)
            logger.debug(f"Found terminal path: {connection.path}")
        except InitializationError:
            connection.path = None
            logger.debug("Could not find terminal path, trying without path")
    if connection.login is not None:
        try:
            connection.login = int(connection.login)
        except ValueError:
            raise InitializationError(f"Invalid login format: {connection.login}. Must be an integer.")
    logger.debug(f"Attempting to initialize with path={connection.path}")
    retries = 0
    while retries < connection.max_retries:
        jitter = random.uniform(0, 0.5)
        try:
            result = mt5.initialize(
                path=connection.path,
                login=connection.login,
                password=connection.password,
                server=connection.server,
                timeout=connection.timeout,
                portable=connection.portable
            )
            if result:
                return True
            error_code, error_message = connection._get_last_error()
            if error_code == -6:
                logger.warning(f"Authorization failed (Error code: {error_code}). Cooling down before retry.")
                time.sleep(connection.cooldown_time * 2 + jitter)
            else:
                backoff_time = connection.backoff_factor ** retries + jitter
                logger.warning(f"Initialization failed (Error code: {error_code}). Retrying in {backoff_time:.2f} seconds.")
                time.sleep(backoff_time)
        except Exception as e:
            logger.error(f"Unexpected error during initialization: {str(e)}")
            backoff_time = connection.backoff_factor ** retries + jitter
            time.sleep(backoff_time)
        retries += 1
    error_code, error_message = connection._get_last_error()
    raise InitializationError(f"Failed to initialize MetaTrader 5 terminal: {error_message} (Error code: {error_code})")
