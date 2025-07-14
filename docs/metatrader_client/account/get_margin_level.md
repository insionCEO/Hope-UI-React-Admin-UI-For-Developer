# get_margin_level 📊

## What does it do?
Returns the current margin level (in %), a key risk metric for your account.

## Parameters
- `connection`: The MetaTrader connection object (must be connected!).

## Returns
- `float`: Current margin level percentage.

## Raises
- `AccountInfoError`: If margin level can't be retrieved.
- `ConnectionError`: If not connected to the terminal.

## Example
```python
margin_level = get_margin_level(connection)
print(f"Margin Level: {margin_level}% 📈")
```

---

> **Warning:** Low margin level = risk of stop out! 🚨
