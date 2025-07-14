# 🏷️ cancel_pending_orders_by_symbol

**Signature:**
```python
def cancel_pending_orders_by_symbol(connection, symbol: str)
```

## What does it do? 🎯
Cancels all pending orders for a specific symbol. Targeted cleanup!

## Parameters
- **connection**: MetaTrader 5 connection object
- **symbol**: Symbol name

## Returns
- Dictionary with error flag, message, and number of orders canceled

## Fun Fact 🎯
No more unwanted orders for that symbol!
