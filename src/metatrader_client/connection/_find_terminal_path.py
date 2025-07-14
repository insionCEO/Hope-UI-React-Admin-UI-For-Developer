def _find_terminal_path(connection):
    """
    Find the MetaTrader 5 terminal path.
    Returns:
        str: Path to the MetaTrader 5 terminal.
    Raises:
        InitializationError: If the terminal path cannot be found.
    """
    import os
    if connection.path and os.path.isfile(connection.path):
        return connection.path
    # Try standard paths
    for path in connection.standard_paths:
        if '*' in path:
            import glob
            paths = glob.glob(path)
            if paths:
                return paths[0]
        elif os.path.isfile(path):
            return path
    from metatrader_client.exceptions import InitializationError
    raise InitializationError("Could not find MetaTrader 5 terminal path")
