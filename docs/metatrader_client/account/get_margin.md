# get_margin 🏦

## What does it do?
Returns the current used margin for your account.

## Parameters
- `connection`: The MetaTrader connection object (must be connected!).

## Returns
- `float`: Current used margin.

## Raises
- `AccountInfoError`: If margin can't be retrieved.
- `ConnectionError`: If not connected to the terminal.

## Example
```python
margin = get_margin(connection)
print(f"Margin used: {margin} 🏦")
```

---

> **Remember:** Margin is what you put up to open trades. Keep an eye on it! 👀
