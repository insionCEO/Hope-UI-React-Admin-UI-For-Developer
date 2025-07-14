# _find_terminal_path(connection) 🗺️

Finds the file path to the MetaTrader 5 terminal executable.

## Parameters
- **connection**: The connection object with path details.

## Returns
- **str**: Path to the MetaTrader 5 terminal executable.

## Raises
- **InitializationError**: If the terminal path cannot be found.

## How it works
1. Checks if a custom path is provided and valid.
2. Searches standard paths, including glob patterns.
3. Raises error if no valid path is found.

## Fun Fact 🧭
This function is your treasure map—leading you straight to the MetaTrader terminal!
