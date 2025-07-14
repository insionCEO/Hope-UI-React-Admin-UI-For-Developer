# 💰 calculate_profit

**Signature:**
```python
def calculate_profit(order_type, symbol, volume, entry_price, exit_price) -> Optional[float]
```

## What does it do? 📈
Calculates the profit (or loss) for a trade given entry and exit prices. Perfect for post-trade analysis or planning!

## Parameters
- **order_type**: BUY/SELL or OrderType enum
- **symbol**: Instrument name
- **volume**: Trading volume in lots
- **entry_price**: Price you entered
- **exit_price**: Price you exited

## Returns
- The profit as a float, or None if calculation fails.

## Fun Fact 🤑
See how much you made (or lost) with just one call!
