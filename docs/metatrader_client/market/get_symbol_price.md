# get_symbol_price 💸

Get the latest price and tick data for a symbol. Perfect for live quotes, trading bots, or just checking the price! 🤑

## Parameters
- **connection**: The MetaTrader connection/session object.
- **symbol_name** (`str`): The symbol (e.g., 'EURUSD') you want the price for.

## Returns
- **`Dict[str, Any]`**: Dictionary with keys: `bid`, `ask`, `last`, `volume`, `time` (as `datetime`).

## How It Works
1. Queries MetaTrader5 for the latest tick. ⏳
2. Parses the tick data and timestamp.
3. Returns a dictionary with price and volume info.

## Raises
- `SymbolNotFoundError`: If the symbol doesn't exist.

## Example Usage
```python
price = get_symbol_price(conn, 'EURUSD')
print(price['bid'], price['ask'])
```

Get those prices in real time! 🕒💹
