# get_orders_as_dataframe 📜➡️📊

**Signature:**
```python
def get_orders_as_dataframe(
    connection,
    from_date: Optional[datetime] = None,
    to_date: Optional[datetime] = None,
    group: Optional[str] = None,
    ticket: Optional[int] = None
) -> pd.DataFrame
```

## What does it do?
Fetches historical orders and returns them as a pandas DataFrame for easy data crunching. Perfect for analysis and reporting! 📈

## Parameters
- **connection**: Your MetaTrader 5 connection object (must be connected!)
- **from_date**: Start date for history (default: 30 days ago)
- **to_date**: End date for history (default: now)
- **group**: (Optional) Filter by group
- **ticket**: (Optional) Filter by ticket number

## Returns
- **pd.DataFrame**: Orders as a DataFrame, indexed by setup time if available.

## Raises
- `OrdersHistoryError` if DataFrame creation fails

## Example Usage
```python
from metatrader_client.history import get_orders_as_dataframe

df = get_orders_as_dataframe(conn)
```

---

✨ _No orders? You’ll get an empty DataFrame, not an error!_
