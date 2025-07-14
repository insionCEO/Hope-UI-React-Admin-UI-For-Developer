# MT5Connection Sub-module 🚀

Welcome to the **MT5Connection** documentation! This sub-module is your gateway to programmatically connect, control, and interact with a MetaTrader 5 terminal from Python. Whether you're building trading bots, analytics tools, or automation scripts, this class makes MT5 connectivity simple and robust. 🛠️🐍

---

## Purpose 🎯

The `MT5Connection` class provides a high-level interface for connecting to a MetaTrader 5 terminal, handling all the tricky bits like retries, cooldowns, and error management. It wraps the lower-level MetaTrader5 Python API and adds extra safety, configurability, and logging.

---

## Class Overview 🏗️

```python
from metatrader_client.client_connection import MT5Connection
```

- **Class:** `MT5Connection`
- **Location:** `src/metatrader_client/client_connection.py`
- **Dependencies:** [MetaTrader5 Python package](https://pypi.org/project/MetaTrader5/)
- **Custom Exceptions:**
  - `ConnectionError`
  - `InitializationError`
  - `LoginError`
  - `DisconnectionError`

---

## Configuration Options ⚙️

Pass a dictionary to the constructor to customize connection behavior:

| Key            | Type    | Description                                                                | Default        |
|----------------|---------|----------------------------------------------------------------------------|---------------|
| `path`         | str     | Path to the MT5 terminal executable                                        | Auto-detect   |
| `login`        | int     | Trading account login ID                                                   | Required      |
| `password`     | str     | Trading account password                                                   | Required      |
| `server`       | str     | Broker server name                                                         | Required      |
| `timeout`      | int     | Connection timeout (ms)                                                    | 60000         |
| `portable`     | bool    | Use portable mode for the terminal                                         | False         |
| `debug`        | bool    | Enable debug logging                                                       | False         |
| `max_retries`  | int     | Max connection retries                                                     | 3             |
| `backoff_factor`| float  | Backoff multiplier for retry delays                                        | 1.5           |
| `cooldown_time`| float   | Cooldown between connections (seconds)                                     | 2.0           |

---

## Main Methods 🧩

- [**connect()**](connection/connect.md): Establish connection to the MT5 terminal. Handles retries and cooldowns.
- [**disconnect()**](connection/disconnect.md): Cleanly disconnect from the terminal.
- [**is_connected()**](connection/is_connected.md): Check if the connection is active.
- [**get_terminal_info()**](connection/get_terminal_info.md): Get details about the connected terminal.
- [**get_version()**](connection/get_version.md): Retrieve the MT5 terminal version.

*Internal helpers* (usually not called directly):
  - [`_find_terminal_path`](connection/_find_terminal_path.md)
  - [`_ensure_cooldown`](connection/_ensure_cooldown.md)
  - [`_initialize_terminal`](connection/_initialize_terminal.md)
  - [`_login`](connection/_login.md)
  - [`_get_last_error`](connection/_get_last_error.md)

---

## Example Usage 💡

```python
from metatrader_client.client_connection import MT5Connection

config = {
    "login": 12345678,
    "password": "your_password",
    "server": "Broker-Server",
    # Optional:
    # "path": "C:/Program Files/MetaTrader 5/terminal64.exe",
    # "timeout": 60000,
    # "debug": True,
}

mt5_conn = MT5Connection(config)
if mt5_conn.connect():
    print("Connected! 🎉")
    info = mt5_conn.get_terminal_info()
    print("Terminal Info:", info)
    mt5_conn.disconnect()
else:
    print("Failed to connect. 🚨")
```

---

## Troubleshooting & Tips 🛡️
- Ensure the [MetaTrader5 Python package](https://pypi.org/project/MetaTrader5/) is installed.
- Use the `debug` option for more detailed logs.
- If you encounter errors, check your credentials, terminal path, and server name.
- For advanced use, customize retry and cooldown settings.

---

## Happy Trading! 📈🤖

For more details, see the source code in `src/metatrader_client/client_connection.py` or the main README.
