# get_symbols 🗂️

Get a list of all available market symbols, optionally filtered by group. Great for discovering what's tradable! 🧭

## Parameters
- **connection**: The MetaTrader connection/session object.
- **group** (`Optional[str]`): Filter symbols by group (e.g., '*USD*' for all USD pairs).

## Returns
- **`List[str]`**: List of symbol names matching the filter.

## How It Works
1. Queries MetaTrader5 for all symbols, or those matching the group. 🔍
2. Returns a list of symbol names.

## Example Usage
```python
symbols = get_symbols(conn, '*JPY*')
print(symbols)
```

Explore the world of tradable assets! 🌎✨
