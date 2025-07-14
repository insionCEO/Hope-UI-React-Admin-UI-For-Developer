# MT5Market Sub-module 📊

Welcome to the **MT5Market** documentation! This sub-module lets you access real-time and historical market data from your MetaTrader 5 terminal using Python. Perfect for building trading strategies, dashboards, or just exploring the markets! 📈🐍

---

## Purpose 🎯

The `MT5Market` class provides a high-level, Pythonic interface for retrieving market data, symbol information, and price history in MetaTrader 5. It wraps the MetaTrader5 Python API and offers convenient methods for all your market data needs, with support for pandas DataFrames for analysis.

---

## Class Overview 🏗️

```python
from metatrader_client.client_market import MT5Market
```

- **Class:** `MT5Market`
- **Location:** `src/metatrader_client/client_market.py`
- **Dependencies:** [MetaTrader5 Python package](https://pypi.org/project/MetaTrader5/), [pandas](https://pandas.pydata.org/)

---

## Initialization ⚙️

To use `MT5Market`, you need an active connection via `MT5Connection`:

```python
from metatrader_client.client_connection import MT5Connection
from metatrader_client.client_market import MT5Market

conn = MT5Connection(config)
if conn.connect():
    market = MT5Market(conn)
```

---

## Main Methods 🧩

- [`get_candles_by_date`](market/get_candles_by_date.md) — Fetch historical candle data between two dates. 🕰️
- [`get_candles_latest`](market/get_candles_latest.md) — Get the latest N candles for a symbol and timeframe. 🔥
- [`get_symbol_info`](market/get_symbol_info.md) — Retrieve all available information about a trading symbol. 🏷️
- [`get_symbol_price`](market/get_symbol_price.md) — Get the latest price and tick data for a symbol. 💸
- [`get_symbols`](market/get_symbols.md) — Get a list of all available market symbols. 🗂️


- **get_symbols(group=None)**: List all available symbols, optionally filtered by group.
- **get_symbol_info(symbol_name)**: Get detailed information for a given symbol.
- **get_symbol_price(symbol_name)**: Get the latest price data for a symbol.
- **get_candles_latest(symbol_name, timeframe, count=100)**: Get the most recent candle data as a pandas DataFrame.
- **get_candles_by_date(symbol_name, timeframe, from_date=None, to_date=None)**: Get candle data for a specific date range as a pandas DataFrame.

---

## Example Usage 💡

```python
from metatrader_client.client_connection import MT5Connection
from metatrader_client.client_market import MT5Market

config = {"login": 12345678, "password": "your_password", "server": "Broker-Server"}
conn = MT5Connection(config)
if conn.connect():
    market = MT5Market(conn)
    symbols = market.get_symbols()
    print("Available symbols:", symbols)
    price = market.get_symbol_price("EURUSD")
    print("EURUSD price:", price)
    candles = market.get_candles_latest("EURUSD", timeframe="M1", count=10)
    print(candles)
    conn.disconnect()
else:
    print("Failed to connect. 🚨")
```

---

## Troubleshooting & Tips 🛡️
- Ensure the [MetaTrader5 Python package](https://pypi.org/project/MetaTrader5/) and [pandas](https://pandas.pydata.org/) are installed.
- Always connect using `MT5Connection` before creating an `MT5Market` instance.
- Use the `debug` flag in your connection config for more verbose logging.
- Check symbol names and timeframes carefully for typos.

---

## Happy Exploring! 🌍🤓

For more details, see the source code in `src/metatrader_client/client_market.py` or check the main README.
