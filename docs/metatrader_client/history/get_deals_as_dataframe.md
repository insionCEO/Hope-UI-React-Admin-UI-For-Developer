# get_deals_as_dataframe 🧾➡️📊

**Signature:**
```python
def get_deals_as_dataframe(
    connection,
    from_date: Optional[datetime] = None,
    to_date: Optional[datetime] = None,
    group: Optional[str] = None,
    ticket: Optional[int] = None,
    position: Optional[int] = None
) -> pd.DataFrame
```

## What does it do?
Fetches historical deals and returns them as a pandas DataFrame for easy data analysis and manipulation. Super handy for quants and data nerds! 🤓

## Parameters
- **connection**: Your MetaTrader 5 connection object (must be connected!)
- **from_date**: Start date for history (default: 30 days ago)
- **to_date**: End date for history (default: now)
- **group**: (Optional) Filter by group
- **ticket**: (Optional) Filter by ticket number
- **position**: (Optional) Filter by position ID

## Returns
- **pd.DataFrame**: Deals as a DataFrame, indexed by time if available.

## Raises
- `DealsHistoryError` if DataFrame creation fails

## Example Usage
```python
from metatrader_client.history import get_deals_as_dataframe

df = get_deals_as_dataframe(conn)
```

---

✨ _No deals? You’ll get an empty DataFrame, not a frown!_
