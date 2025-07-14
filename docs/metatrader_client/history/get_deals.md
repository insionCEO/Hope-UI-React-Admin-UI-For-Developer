# get_deals 🕵️‍♂️

**Signature:**
```python
def get_deals(
    connection,
    from_date: Optional[datetime] = None,
    to_date: Optional[datetime] = None,
    group: Optional[str] = None,
    ticket: Optional[int] = None,
    position: Optional[int] = None
) -> List[Dict[str, Any]]
```

## What does it do?
Fetches historical deals from MetaTrader 5. You can filter by date, group, ticket, or position. Returns a list of deal dictionaries.

## Parameters
- **connection**: Your MetaTrader 5 connection object (must be connected!)
- **from_date**: Start date for history (default: 30 days ago)
- **to_date**: End date for history (default: now)
- **group**: (Optional) Filter by group
- **ticket**: (Optional) Filter by ticket number
- **position**: (Optional) Filter by position ID

## Returns
- **List[Dict[str, Any]]**: List of deals as dictionaries.

## Raises
- `ConnectionError` if not connected
- `DealsHistoryError` if MetaTrader 5 errors occur

## Example Usage
```python
from metatrader_client.history import get_deals

deals = get_deals(conn, from_date, to_date)
```

---

✨ _Pro tip: If you get an empty list, check your filters!_
