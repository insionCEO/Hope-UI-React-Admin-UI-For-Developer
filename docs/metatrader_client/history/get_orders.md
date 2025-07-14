# get_orders 📜

**Signature:**
```python
def get_orders(
    connection,
    from_date: Optional[datetime] = None,
    to_date: Optional[datetime] = None,
    group: Optional[str] = None,
    ticket: Optional[int] = None
) -> List[Dict[str, Any]]
```

## What does it do?
Fetches historical orders from MetaTrader 5. You can filter by date, group, or ticket. Returns a list of order dictionaries.

## Parameters
- **connection**: Your MetaTrader 5 connection object (must be connected!)
- **from_date**: Start date for history (default: 30 days ago)
- **to_date**: End date for history (default: now)
- **group**: (Optional) Filter by group
- **ticket**: (Optional) Filter by ticket number

## Returns
- **List[Dict[str, Any]]**: List of orders as dictionaries.

## Raises
- `ConnectionError` if not connected
- `OrdersHistoryError` if MetaTrader 5 errors occur

## Example Usage
```python
from metatrader_client.history import get_orders

orders = get_orders(conn, from_date, to_date)
```

---

✨ _No orders? No worries, you’ll get an empty list!_
