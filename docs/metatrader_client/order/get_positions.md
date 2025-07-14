# 📋 get_positions

**Signature:**
```python
def get_positions(connection, ticket: Optional[Union[int, str]] = None, symbol_name: Optional[str] = None, group: Optional[str] = None, order_type: Optional[Union[str, int, OrderType]] = None) -> pd.DataFrame
```

## What does it do? 🧐
Fetches open trade positions. You can filter by ticket, symbol, group, or order type. Returns a DataFrame for easy analysis.

## Parameters
- **connection**: MetaTrader 5 connection object
- **ticket**: (Optional) Position ticket
- **symbol_name**: (Optional) Symbol name
- **group**: (Optional) Group name
- **order_type**: (Optional) Order type

## Returns
- DataFrame of trade positions, ordered by time (descending)

## Fun Fact 📊
Analyze your open trades like a pro!
