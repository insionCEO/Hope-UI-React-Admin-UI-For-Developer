# get_candles_latest 🔥

Fetch the latest N candles for a given symbol and timeframe. Great for live dashboards, quick analyses, or just keeping your finger on the market pulse! 📊

## Parameters
- **connection**: The MetaTrader connection/session object.
- **symbol_name** (`str`): The symbol (e.g., 'EURUSD') you want candles for.
- **timeframe** (`str`): Timeframe string (e.g., 'M1', 'H1', 'D1').
- **count** (`int`, default=100): Number of latest candles to fetch.

## Returns
- **`pd.DataFrame`**: DataFrame with the latest candle data (open, high, low, close, volume, time, etc).

## How It Works
1. Checks if the symbol exists. 🔎
2. Validates the timeframe. ⏰
3. Fetches candles using MetaTrader5 API.
4. Returns a pandas DataFrame sorted by time (most recent first).

## Raises
- `SymbolNotFoundError`: If the symbol doesn't exist.
- `InvalidTimeframeError`: If the timeframe is invalid.
- `MarketDataError`: If data retrieval fails.

## Example Usage
```python
candles = get_candles_latest(conn, 'EURUSD', 'M5', 50)
print(candles.head())
```

Stay up-to-date with the markets! 🚦
