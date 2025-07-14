# MT5Account Sub-module 🏦

Welcome to the **MT5Account** documentation! This sub-module lets you easily retrieve and manage account information from your MetaTrader 5 terminal using Python. Perfect for traders, analysts, or anyone who needs to keep an eye on their account stats! 📊🐍

---

## Purpose 🎯

The `MT5Account` class provides a high-level, Pythonic interface for accessing and managing account information in MetaTrader 5. It wraps the MetaTrader5 Python API and adds convenient methods for all key account metrics, along with robust error handling and logging.

---

## Class Overview 🏗️

```python
from metatrader_client.client_account import MT5Account
```

- **Class:** `MT5Account`
- **Location:** `src/metatrader_client/client_account.py`
- **Dependencies:** [MetaTrader5 Python package](https://pypi.org/project/MetaTrader5/)
- **Custom Exceptions:**
  - `AccountError`
  - `AccountInfoError`
  - `TradingNotAllowedError`
  - `MarginLevelError`
  - `ConnectionError`

---

## Initialization ⚙️

To use `MT5Account`, you need an active connection via `MT5Connection`:

```python
from metatrader_client.client_connection import MT5Connection
from metatrader_client.client_account import MT5Account

conn = MT5Connection(config)
if conn.connect():
    account = MT5Account(conn)
```

---

## Main Methods 🧩

- [**get_account_info()**](account/get_account_info.md): Get all available account information as a dictionary.
- [**get_balance()**](account/get_balance.md): Retrieve the current account balance.
- [**get_equity()**](account/get_equity.md): Get the current account equity.
- [**get_margin()**](account/get_margin.md): Get the current margin used.
- [**get_free_margin()**](account/get_free_margin.md): Get the free margin available.
- [**get_margin_level()**](account/get_margin_level.md): Get the margin level percentage.
- [**get_currency()**](account/get_currency.md): Get the account's base currency.
- [**get_leverage()**](account/get_leverage.md): Get the account leverage.
- [**get_account_type()**](account/get_account_type.md): Get the type of account (e.g., demo, real).
- [**is_trade_allowed()**](account/is_trade_allowed.md): Check if trading is currently allowed on the account.
- [**check_margin_level(min_level=100.0)**](account/check_margin_level.md): Check if margin level is above a minimum threshold.
- [**get_trade_statistics()**](account/get_trade_statistics.md): Retrieve trade statistics as a dictionary.

---

## Example Usage 💡

```python
from metatrader_client.client_connection import MT5Connection
from metatrader_client.client_account import MT5Account

config = {"login": 12345678, "password": "your_password", "server": "Broker-Server"}
conn = MT5Connection(config)
if conn.connect():
    account = MT5Account(conn)
    info = account.get_account_info()
    print("Account Info:", info)
    print("Balance:", account.get_balance())
    print("Equity:", account.get_equity())
    print("Margin Level:", account.get_margin_level())
    conn.disconnect()
else:
    print("Failed to connect. 🚨")
```

---

## Troubleshooting & Tips 🛡️
- Ensure the [MetaTrader5 Python package](https://pypi.org/project/MetaTrader5/) is installed.
- Always connect using `MT5Connection` before creating an `MT5Account`.
- Use the `debug` flag in your connection config for more verbose logging.
- Handle custom exceptions for robust error management.

---

## Happy Trading! 📈🤖

For more details, see the source code in `src/metatrader_client/client_account.py` or check the main README.
