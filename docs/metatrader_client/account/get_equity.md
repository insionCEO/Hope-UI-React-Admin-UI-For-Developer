# get_equity ⚖️

## What does it do?
Returns your account equity, which is your balance plus floating profit/loss from open positions.

## Parameters
- `connection`: The MetaTrader connection object (must be connected!).

## Returns
- `float`: Current account equity.

## Raises
- `AccountInfoError`: If equity can't be retrieved.
- `ConnectionError`: If not connected to the terminal.

## Example
```python
equity = get_equity(connection)
print(f"Equity: {equity} ⚖️")
```

---

> **Did you know?** Equity is your real-time net worth in the trading world! 🌍
