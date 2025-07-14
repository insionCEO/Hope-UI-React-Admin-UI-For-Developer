# get_symbol_info 🏷️

Retrieve all available information about a trading symbol. Perfect for exploring symbol properties and metadata! 🕵️‍♂️

## Parameters
- **connection**: The MetaTrader connection/session object.
- **symbol_name** (`str`): The symbol (e.g., 'EURUSD') you want info for.

## Returns
- **`Dict[str, Any]`**: Dictionary containing all symbol attributes (tick size, margin, etc).

## How It Works
1. Queries MetaTrader5 for the symbol. 📡
2. If found, extracts all non-callable attributes.
3. Returns them in a Python dictionary for easy access.

## Raises
- `SymbolNotFoundError`: If the symbol doesn't exist.

## Example Usage
```python
info = get_symbol_info(conn, 'EURUSD')
print(info['spread'], info['trade_mode'])
```

Uncover all the secrets of your favorite symbols! 🕵️‍♀️✨
