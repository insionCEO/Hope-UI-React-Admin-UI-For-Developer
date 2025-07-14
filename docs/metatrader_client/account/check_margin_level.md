# check_margin_level 🕵️‍♀️

## What does it do?
Checks if the margin level is above a specified minimum (default: 100%).

## Parameters
- `connection`: The MetaTrader connection object (must be connected!).
- `min_level`: Minimum margin level percentage (default: 100.0).

## Returns
- `bool`: True if margin level is above minimum, raises error otherwise.

## Raises
- `MarginLevelError`: If margin level is too low.
- `AccountInfoError`: If margin level can't be retrieved.
- `ConnectionError`: If not connected to the terminal.

## Example
```python
try:
    check_margin_level(connection, min_level=120)
    print("Margin level is safe! 👍")
except MarginLevelError:
    print("Danger! Margin too low! 🚨")
```

---

> **Pro tip:** Stay above the minimum margin level to avoid stop out! ⛑️
