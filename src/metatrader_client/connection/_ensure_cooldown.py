def _ensure_cooldown(connection):
    """
    Ensure that there's a cooldown period between connection attempts to prevent rate limiting and authorization issues.
    """
    import time
    now = time.time()
    elapsed = now - connection._last_connection_time
    import logging
    logger = logging.getLogger("MT5Connection")
    if connection._last_connection_time > 0 and elapsed < connection.cooldown_time:
        cooldown_needed = connection.cooldown_time - elapsed
        logger.debug(f"Applying cooldown of {cooldown_needed:.2f} seconds")
        time.sleep(cooldown_needed)
    connection._last_connection_time = time.time()
