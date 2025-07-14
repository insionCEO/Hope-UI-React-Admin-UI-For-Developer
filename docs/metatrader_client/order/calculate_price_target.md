# 🎯 calculate_price_target

**Signature:**
```python
def calculate_price_target(order_type: Union[int, str, OrderType], symbol: str, volume: float, entry_price: float, target: float) -> Optional[float]
```

## What does it do? 🤓
Calculates the price level needed to hit a desired profit or loss target. Super handy for planning exits!

## Parameters
- **order_type**: Type of order (BUY/SELL or OrderType enum)
- **symbol**: Instrument name (e.g., "EURUSD")
- **volume**: Trading volume in lots
- **entry_price**: Your entry price
- **target**: Profit/loss target (positive for profit, negative for loss)

## Returns
- The price level to achieve the target, or None if not found.

## Fun Fact 📈
This function iteratively searches for the magic price that will get you to your goal. Math + trading = ❤️!
