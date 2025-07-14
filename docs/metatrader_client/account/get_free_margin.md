# get_free_margin 🆓

## What does it do?
Returns the free margin available for new trades.

## Parameters
- `connection`: The MetaTrader connection object (must be connected!).

## Returns
- `float`: Free margin available.

## Raises
- `AccountInfoError`: If free margin can't be retrieved.
- `ConnectionError`: If not connected to the terminal.

## Example
```python
free_margin = get_free_margin(connection)
print(f"Free Margin: {free_margin} 🆓")
```

---

> **Fun fact:** Free margin = equity - margin. More free margin, more trading power! 💪
