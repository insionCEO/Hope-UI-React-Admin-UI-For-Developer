# get_version(connection) 🏷️

Retrieves the version of the connected MetaTrader 5 terminal.

## Parameters
- **connection**: The connection object for the current session.

## Returns
- **Tuple[int, int, int, int]**: Version as `(major, minor, build, revision)`.

## Raises
- **ConnectionError**: If not connected or unable to fetch version info.

## How it works
1. Gets terminal info via `get_terminal_info`.
2. Parses version details from terminal info.
3. Defaults to major version 5 if parsing fails.

## Exceptions
Raises `ConnectionError` if version information can't be retrieved.

## Fun Fact 🏷️
Knowing your MetaTrader version helps you stay up-to-date and compatible with the latest features!
