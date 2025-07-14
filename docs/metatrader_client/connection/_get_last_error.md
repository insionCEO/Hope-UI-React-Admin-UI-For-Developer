# _get_last_error(connection) ❗

Fetches the last error code and message from the MetaTrader 5 terminal.

## Parameters
- **connection**: The connection object for the session.

## Returns
- **Tuple[int, str]**: Error code and message.

## How it works
1. Checks if the MetaTrader 5 API exposes `last_error`.
2. Retrieves and parses the error, if any.
3. Returns a tuple with the error code and message.

## Fun Fact 🐞
This function is your bug detective—always ready to report what went wrong!
