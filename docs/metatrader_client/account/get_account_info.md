# get_account_info 🕵️‍♂️

## What does it do?
Fetches comprehensive MetaTrader account information as a dictionary. This includes login, trade mode, leverage, balance, credit, profit, equity, margin stats, and more!

## Parameters
- `connection`: The MetaTrader connection object (must be connected!).

## Returns
- `Dict[str, Any]`: All the juicy account details you ever wanted.

## Raises
- `AccountInfoError`: If account info can't be retrieved.
- `ConnectionError`: If not connected to the terminal.

## Example
```python
info = get_account_info(connection)
print(info['balance'])  # 💰
```

---

> **Pro Tip:** Always check your connection before calling. No connection, no info! 🚫
