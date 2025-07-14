# get_balance 💰

## What does it do?
Returns the current account balance (the cash you have, not counting open positions).

## Parameters
- `connection`: The MetaTrader connection object (must be connected!).

## Returns
- `float`: Your account balance in deposit currency.

## Raises
- `AccountInfoError`: If balance can't be retrieved.
- `ConnectionError`: If not connected to the terminal.

## Example
```python
balance = get_balance(connection)
print(f"Balance: {balance} 🤑")
```

---

> **Tip:** Balance is your financial starting line. Don't spend it all in one place! 😉
