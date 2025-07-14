# disconnect(connection) 🔌

Disconnects from the MetaTrader 5 terminal, safely shutting down the session.

## Parameters
- **connection**: The connection object representing the current session.

## Returns
- **bool**: `True` if the disconnection was successful or already disconnected, `False` otherwise.

## Raises
- **DisconnectionError**: If the disconnection fails.

## How it works
1. Calls the MetaTrader 5 shutdown method.
2. Updates `connection._connected` to `False` if successful.
3. Handles already disconnected state gracefully.

## Exceptions
If the shutdown fails, the function raises a `DisconnectionError` with error details.

## Fun Fact 🥳
This function ensures you leave the MetaTrader party politely—no awkward exits!
