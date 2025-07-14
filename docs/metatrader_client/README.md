# MT5Client Sub-module 🤖

Welcome to the **MT5Client** documentation! This is your all-in-one Python interface for MetaTrader 5 automation: connect, trade, analyze, and manage your MT5 terminal with a single, unified client. Perfect for algo trading, analytics, and robust trading automation! 🚀

---

## Purpose 🎯

The `MT5Client` class is the main entry point for all MetaTrader 5 operations in this library. It wraps and unifies connection, account, market, order, and history management into a single, easy-to-use object.

---

## Class Overview 🏗️

```python
from metatrader_client.client import MT5Client
```

- **Class:** `MT5Client`
- **Location:** `src/metatrader_client/client.py`
- **Submodules:**
  - `.account` → Account info and status
  - `.market` → Market data and symbol info
  - `.order` → Trading and order management
  - `.history` → Historical deals and orders
  - `.connection` → Terminal connection management

---

## Initialization ⚙️

```python
from metatrader_client.client import MT5Client

config = {
    "login": 12345678,
    "password": "your_password",
    "server": "Broker-Server",
    # Optional: path, timeout, portable, debug, etc.
}

client = MT5Client(config)
```

---

## Main Attributes & Methods 🧩

### Attributes (Submodules)
- `client.account` — Account operations (balance, equity, margin, etc.)
- `client.market` — Market data (symbols, prices, candles)
- `client.order` — Order management (positions, orders, trading)
- `client.history` — Historical deals/orders/statistics

### Connection Methods
- `connect()` — Connect to the MT5 terminal and login
- `disconnect()` — Disconnect from the terminal
- `is_connected()` — Check connection status
- `get_terminal_info()` — Get terminal details
- `get_version()` — Get terminal version
- `last_error()` — Get last error code/description

---

## Example Usage 💡

```python
from metatrader_client.client import MT5Client

config = {
    "login": 12345678,
    "password": "your_password",
    "server": "Broker-Server"
}

client = MT5Client(config)
if client.connect():
    print("Connected! 🎉")
    print("Balance:", client.account.get_balance())
    print("EURUSD price:", client.market.get_symbol_price("EURUSD"))
    client.order.place_market_order(type="buy", symbol="EURUSD", volume=0.1)
    print("Recent deals:", client.history.get_deals())
    client.disconnect()
else:
    print("Failed to connect. 🚨")
```

---

## Submodule Docs 📚
- [Connection](./_connection.md)
- [Account](./_account.md)
- [Market](./_market.md)
- [Order](./_order.md)
- [History](./_history.md)

---

## Tips & Troubleshooting 🛡️
- Ensure the [MetaTrader5 Python package](https://pypi.org/project/MetaTrader5/) is installed.
- Use the `debug` flag in your config for more logs.
- Handle exceptions for robust automation.
- See submodule docs above for detailed info.

---

## Happy Trading! 📈🤖

For more details, see the source code in `src/metatrader_client/client.py` and the submodules.
