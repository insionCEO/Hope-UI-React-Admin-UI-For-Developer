# 🧮 calculate_margin

**Signature:**
```python
def calculate_margin(order_type: Union[int, str, OrderType], symbol: str, volume: float, price: float) -> Optional[float]
```

## What does it do? 🤔
Calculates the margin required for a specified trading operation. This helps you know in advance how much margin you’ll need before placing an order—no surprises!

## Parameters
- **order_type**: Type of order (BUY/SELL or OrderType enum)
- **symbol**: Financial instrument name (e.g., "EURUSD")
- **volume**: Trading volume in lots
- **price**: Entry price

## Returns
- The required margin as a float, or None if calculation fails.

## Fun Fact 🎉
This function helps you avoid margin calls and keep your account healthy. Trade smart!
