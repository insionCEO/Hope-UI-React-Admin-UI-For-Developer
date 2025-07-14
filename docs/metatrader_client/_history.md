# MT5History Sub-module 📜

Welcome to the **MT5History** documentation! This sub-module lets you fetch and analyze historical deals, orders, and trading statistics from your MetaTrader 5 terminal using Python. Perfect for backtesting, reporting, or just satisfying your curiosity! ⏳🐍

---

## Purpose 🎯

The `MT5History` class provides a high-level, Pythonic interface for retrieving and analyzing historical account activity in MetaTrader 5. It wraps the MetaTrader5 Python API and offers convenient methods for querying deals, orders, and statistics, with support for pandas DataFrames for data analysis.

---

## Class Overview 🏗️

```python
from metatrader_client.client_history import MT5History
```

- **Class:** `MT5History`
- **Location:** `src/metatrader_client/client_history.py`
- **Dependencies:** [MetaTrader5 Python package](https://pypi.org/project/MetaTrader5/), [pandas](https://pandas.pydata.org/)
- **Enums:**
  - `DealType`: Types of deals (BUY, SELL, BALANCE, etc.)
  - `OrderState`: States of orders (STARTED, PLACED, CANCELED, etc.)
- **Custom Exceptions:**
  - `DealsHistoryError`
  - `OrdersHistoryError`
  - `ConnectionError`

---

## Initialization ⚙️

To use `MT5History`, you need an active connection via `MT5Connection`:

```python
from metatrader_client.client_connection import MT5Connection
from metatrader_client.client_history import MT5History

conn = MT5Connection(config)
if conn.connect():
    history = MT5History(conn)
```

---

## Main Methods 🧩

- [**get_deals** 🕵️‍♂️](./history/get_deals.md): Retrieve historical deals (list of dicts).
- [**get_orders** 📜](./history/get_orders.md): Retrieve historical orders (list of dicts).
- [**get_total_deals** 🔢](./history/get_total_deals.md): Get the total number of deals in a period.
- [**get_total_orders** 🔢](./history/get_total_orders.md): Get the total number of orders in a period.
- [**get_deals_as_dataframe** 🧾➡️📊](./history/get_deals_as_dataframe.md): Get deals as a pandas DataFrame for analysis.
- [**get_orders_as_dataframe** 📜➡️📊](./history/get_orders_as_dataframe.md): Get orders as a pandas DataFrame for analysis.

All methods support filtering by date, group, ticket, and more (see code for details).

---

## Example Usage 💡

```python
from metatrader_client.client_connection import MT5Connection
from metatrader_client.client_history import MT5History
from datetime import datetime, timedelta

config = {"login": 12345678, "password": "your_password", "server": "Broker-Server"}
conn = MT5Connection(config)
if conn.connect():
    history = MT5History(conn)
    deals = history.get_deals(from_date=datetime.now()-timedelta(days=7))
    print("Deals in last 7 days:", deals)
    df = history.get_deals_as_dataframe(from_date=datetime.now()-timedelta(days=30))
    print(df.head())
    conn.disconnect()
else:
    print("Failed to connect. 🚨")
```

---

## Troubleshooting & Tips 🛡️
- Ensure the [MetaTrader5 Python package](https://pypi.org/project/MetaTrader5/) and [pandas](https://pandas.pydata.org/) are installed.
- Always connect using `MT5Connection` before creating an `MT5History` instance.
- Use the `debug` flag in your connection config for more verbose logging.
- Handle custom exceptions for robust error management.

---

## Happy Analyzing! 📈🤓

For more details, see the source code in `src/metatrader_client/client_history.py` or check the main README.
