# 🏪 place_market_order

**Signature:**
```python
def place_market_order(connection, *, type: str, symbol: str, volume: Union[float, int])
```

## What does it do? 🚀
Places a market order (BUY or SELL) for a specified financial instrument. Sends the order to MetaTrader 5 and returns the result.

## Parameters
- **connection**: MetaTrader 5 connection object
- **type**: "BUY" or "SELL"
- **symbol**: Trading instrument symbol (e.g., "EURUSD")
- **volume**: Trade volume in lots

## Returns
- A dictionary with error status, message, and order data.

## Fun Fact 🎲
This is your go-to function for instant trades. Fast and furious!
