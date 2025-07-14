# get_total_deals 🔢

**Signature:**
```python
def get_total_deals(
    connection,
    from_date: Optional[datetime] = None,
    to_date: Optional[datetime] = None
) -> int
```

## What does it do?
Counts the total number of deals in your MetaTrader 5 history. Useful for stats and sanity checks! 🧮

## Parameters
- **connection**: Your MetaTrader 5 connection object (must be connected!)
- **from_date**: Start date for history (default: 30 days ago)
- **to_date**: End date for history (default: now)

## Returns
- **int**: Total number of deals.

## Raises
- `ConnectionError` if not connected
- `DealsHistoryError` if MetaTrader 5 errors occur

## Example Usage
```python
from metatrader_client.history import get_total_deals

total = get_total_deals(conn)
```

---

✨ _If you get zero, maybe widen your date range!_
