# _login(connection) 🔐

Logs into the MetaTrader 5 terminal using the provided credentials.

## Parameters
- **connection**: The connection object containing login credentials.

## Returns
- **bool**: `True` if login is successful, `False` otherwise.

## Raises
- **LoginError**: If login fails after retries.

## How it works
1. Checks if already logged in.
2. Attempts login with retries and backoff.
3. Handles errors and retries smartly.

## Fun Fact 🕵️‍♂️
Handles login like a pro—persistent and patient, but never gives up too soon!
