# get_trade_statistics 📈

## What does it do?
Returns a dictionary with basic trade statistics: balance, equity, profit, margin level, free margin, account type, leverage, and currency.

## Parameters
- `connection`: The MetaTrader connection object (must be connected!).

## Returns
- `Dict[str, Any]`: Dictionary with all the stats you need to flex your trading muscles.

## Raises
- `AccountInfoError`: If statistics can't be retrieved.
- `ConnectionError`: If not connected to the terminal.

## Example
```python
stats = get_trade_statistics(connection)
print(stats)
```

---

> **Stat attack:** Use these numbers to track your trading health! 🩺
