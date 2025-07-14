# get_total_orders 🔢

**Signature:**
```python
def get_total_orders(
    connection,
    from_date: Optional[datetime] = None,
    to_date: Optional[datetime] = None
) -> int
```

## What does it do?
Counts the total number of orders in your MetaTrader 5 history. Handy for reporting and dashboards! 📊

## Parameters
- **connection**: Your MetaTrader 5 connection object (must be connected!)
- **from_date**: Start date for history (default: 30 days ago)
- **to_date**: End date for history (default: now)

## Returns
- **int**: Total number of orders.

## Raises
- `ConnectionError` if not connected
- `OrdersHistoryError` if MetaTrader 5 errors occur

## Example Usage
```python
from metatrader_client.history import get_total_orders

total = get_total_orders(conn)
```

---

✨ _Zero orders? Check your filters!_
