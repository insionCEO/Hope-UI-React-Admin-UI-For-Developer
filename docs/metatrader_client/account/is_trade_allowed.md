# is_trade_allowed ✅

## What does it do?
Checks if trading is allowed for this account.

## Parameters
- `connection`: The MetaTrader connection object (must be connected!).

## Returns
- `bool`: True if trading is allowed, False otherwise.

## Raises
- `AccountInfoError`: If trading permission can't be determined.
- `ConnectionError`: If not connected to the terminal.

## Example
```python
if is_trade_allowed(connection):
    print("Trading is allowed! 🚦")
else:
    print("Trading is NOT allowed! 🚫")
```

---

> **Safety first:** Always check before you trade! 🛡️
