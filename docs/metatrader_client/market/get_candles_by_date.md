# get_candles_by_date 🕰️

Fetch historical candle data for a given symbol and timeframe between two dates. Perfect for backtesting, charting, or just time traveling through the markets! 🚀

## Parameters
- **connection**: The MetaTrader connection/session object.
- **symbol_name** (`str`): The symbol (e.g., 'EURUSD') you want candles for.
- **timeframe** (`str`): Timeframe string (e.g., 'M1', 'H1', 'D1').
- **from_date** (`Optional[str]`): Start date as 'YYYY-MM-DD' or 'YYYY-MM-DD HH:MM'.
- **to_date** (`Optional[str]`): End date as 'YYYY-MM-DD' or 'YYYY-MM-DD HH:MM'.

## Returns
- **`pd.DataFrame`**: DataFrame with candle data (open, high, low, close, volume, time, etc).

## How It Works
1. Checks if the symbol exists. ❓
2. Validates the timeframe. ⏲️
3. Parses the input dates and ensures correct order. 📅
4. Fetches candles using MetaTrader5 API.
5. Returns a pandas DataFrame for easy data wrangling.

## Raises
- `SymbolNotFoundError`: If the symbol doesn't exist.
- `InvalidTimeframeError`: If the timeframe is invalid.
- `MarketDataError`: If data retrieval fails.

## Example Usage
```python
candles = get_candles_by_date(conn, 'EURUSD', 'H1', '2024-01-01', '2024-01-31')
print(candles.head())
```

Enjoy your market time machine! ⏳✨
