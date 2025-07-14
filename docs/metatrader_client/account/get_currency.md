# get_currency 💱

## What does it do?
Returns the account's deposit currency (e.g., USD, EUR).

## Parameters
- `connection`: The MetaTrader connection object (must be connected!).

## Returns
- `str`: Account currency code.

## Raises
- `AccountInfoError`: If currency can't be retrieved.
- `ConnectionError`: If not connected to the terminal.

## Example
```python
currency = get_currency(connection)
print(f"Account currency: {currency} 💵")
```

---

> **Currency matters!** All your balances and profits are shown in this currency. 🌍
