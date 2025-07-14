from typing import Dict, Any
import MetaTrader5 as mt5
from ..exceptions import SymbolNotFoundError

def get_symbol_info(connection, symbol_name: str) -> Dict[str, Any]:
    symbols = mt5.symbols_get(symbol_name)
    if not symbols or len(symbols) == 0:
        raise SymbolNotFoundError(f"Symbol '{symbol_name}' not found")
    symbol_info = symbols[0]
    return {
        attr: getattr(symbol_info, attr)
        for attr in dir(symbol_info)
        if not attr.startswith('__') and not callable(getattr(symbol_info, attr))
    }
