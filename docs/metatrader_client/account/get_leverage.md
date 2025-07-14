# get_leverage 🏋️

## What does it do?
Returns the account leverage (e.g., 100 for 1:100 leverage).

## Parameters
- `connection`: The MetaTrader connection object (must be connected!).

## Returns
- `int`: Account leverage.

## Raises
- `AccountInfoError`: If leverage can't be retrieved.
- `ConnectionError`: If not connected to the terminal.

## Example
```python
leverage = get_leverage(connection)
print(f"Leverage: 1:{leverage} 🏋️")
```

---

> **Leverage = Power!** But use it wisely, high leverage means higher risk. ⚡
