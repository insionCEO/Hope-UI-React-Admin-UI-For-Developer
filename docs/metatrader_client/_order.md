# MT5Order Sub-module 📝

Welcome to the **MT5Order** documentation! This sub-module lets you execute, modify, and manage trading orders in your MetaTrader 5 terminal using Python. Perfect for algorithmic trading, portfolio management, or automating your trading workflow! 🤖💹

---

## Purpose 🎯

The `MT5Order` class provides a high-level, Pythonic interface for managing all order-related operations in MetaTrader 5. It wraps the MetaTrader5 Python API and offers convenient methods for order placement, modification, closing, and cancellation, with robust DataFrame support for analysis and reporting.

---

## Class Overview 🏗️

```python
from metatrader_client.client_order import MT5Order
```

- **Class:** `MT5Order`
- **Location:** `src/metatrader_client/client_order.py`
- **Dependencies:** [MetaTrader5 Python package](https://pypi.org/project/MetaTrader5/), [pandas](https://pandas.pydata.org/)

---

## Initialization ⚙️

To use `MT5Order`, you need an active connection via `MT5Connection`:

```python
from metatrader_client.client_connection import MT5Connection
from metatrader_client.client_order import MT5Order

conn = MT5Connection(config)
if conn.connect():
    order = MT5Order(conn)
```

---

## Main Methods 🧩

- **get_all_positions()**: Get all open positions as a DataFrame.
- **get_positions_by_symbol(symbol)**: Get positions filtered by symbol.
- **get_positions_by_currency(currency)**: Get positions filtered by currency.
- **get_positions_by_id(id)**: Get position by ticket or ID.
- **get_all_pending_orders()**: Get all pending orders as a DataFrame.
- **get_pending_orders_by_symbol(symbol)**: Get pending orders filtered by symbol.
- **get_pending_orders_by_currency(currency)**: Get pending orders filtered by currency.
- **get_pending_orders_by_id(id)**: Get pending order by ticket or ID.
- **place_market_order(type, symbol, volume)**: Place a market order (buy/sell).
- **place_pending_order(type, symbol, volume, price, stop_loss=0.0, take_profit=0.0)**: Place a pending order.
- **modify_position(id, stop_loss=None, take_profit=None)**: Modify stop loss/take profit of a position.
- **modify_pending_order(id, price=None, stop_loss=None, take_profit=None)**: Modify a pending order.
- **close_position(id)**: Close a single position by ID.
- **close_all_positions()**: Close all open positions.
- **close_all_positions_by_symbol(symbol)**: Close all positions for a symbol.
- **close_all_profitable_positions()**: Close all profitable positions.
- **close_all_losing_positions()**: Close all losing positions.
- **cancel_pending_order(id)**: Cancel a pending order by ID.
- **cancel_all_pending_orders()**: Cancel all pending orders.
- **cancel_pending_orders_by_symbol(symbol)**: Cancel all pending orders for a symbol.

---

## Example Usage 💡

```python
from metatrader_client.client_connection import MT5Connection
from metatrader_client.client_order import MT5Order

config = {"login": 12345678, "password": "your_password", "server": "Broker-Server"}
conn = MT5Connection(config)
if conn.connect():
    order = MT5Order(conn)
    print(order.get_all_positions())
    order.place_market_order(type="buy", symbol="EURUSD", volume=0.1)
    order.close_all_profitable_positions()
    conn.disconnect()
else:
    print("Failed to connect. 🚨")
```

---

## Troubleshooting & Tips 🛡️
- Ensure the [MetaTrader5 Python package](https://pypi.org/project/MetaTrader5/) and [pandas](https://pandas.pydata.org/) are installed.
- Always connect using `MT5Connection` before creating an `MT5Order` instance.
- Use the `debug` flag in your connection config for more verbose logging.
- Use DataFrame outputs for easy analysis and reporting.
- Double-check symbol names, order types, and volumes before placing orders.

---

## Happy Trading! 🚀📈

For more details, see the source code in `src/metatrader_client/client_order.py` or check the main README.
