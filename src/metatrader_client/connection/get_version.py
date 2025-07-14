def get_version(connection):
    """
    Get the version of the MetaTrader 5 terminal.
    Returns:
        Tuple[int, int, int, int]: Version as (major, minor, build, revision).
    Raises:
        ConnectionError: If not connected to the terminal.
    """
    from metatrader_client.exceptions import ConnectionError
    try:
        from .get_terminal_info import get_terminal_info
        terminal_info = get_terminal_info(connection)
        build = terminal_info.get('build', 0)
        name = terminal_info.get('name', '')
        name_version = name.split()[-1] if name and len(name.split()) > 1 else ''
        major = minor = revision = 0
        if name_version:
            parts = name_version.split('.')
            if len(parts) >= 1:
                try:
                    major = int(parts[0])
                except (ValueError, IndexError):
                    pass
            if len(parts) >= 2:
                try:
                    minor = int(parts[1])
                except (ValueError, IndexError):
                    pass
            if len(parts) >= 3:
                try:
                    revision = int(parts[2])
                except (ValueError, IndexError):
                    pass
        if major == 0:
            major = 5
        return (major, minor, build, revision)
    except Exception as e:
        raise ConnectionError(f"Error getting terminal version: {str(e)}")
