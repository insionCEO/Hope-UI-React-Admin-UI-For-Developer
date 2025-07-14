from typing import Dict, Any
from datetime import datetime, timezone
import MetaTrader5 as mt5
from ..exceptions import SymbolNotFoundError, MarketDataError

def get_symbol_price(connection, symbol_name: str) -> Dict[str, Any]:
    """
    Get the latest price and tick data for a symbol.

    Parameters
    ----------
    connection : MetaTrader connection object
        The connection to use for retrieving the data.
    symbol_name : str
        The symbol to query (e.g., 'EURUSD').

    Returns
    -------
    Dict[str, Any]
        A dictionary containing the following:
        - "bid": The current bid price.
        - "ask": The current ask price.
        - "last": The current last price.
        - "volume": The current volume.
        - "time": The current time as a datetime object.

    Raises
    ------
    SymbolNotFoundError
        If the symbol does not exist.
    MarketDataError
        If data retrieval fails.
    """
    # Ensure symbol is available
    if not mt5.symbol_select(symbol_name, True):
        raise MarketDataError(f"Failed to select symbol '{symbol_name}'")
    tick = mt5.symbol_info_tick(symbol_name)
    if tick is None:
        raise SymbolNotFoundError(f"Could not get price data for symbol '{symbol_name}'")
    tick_time = datetime.fromtimestamp(tick.time, tz=timezone.utc)
    return {
        "bid": tick.bid,
        "ask": tick.ask,
        "last": tick.last,
        "volume": tick.volume,
        "time": tick_time
    }
