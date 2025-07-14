from typing import Optional, List
import MetaTrader5 as mt5

def get_symbols(connection, group: Optional[str] = None) -> List[str]:
    """
    Get list of all available market symbols.
    Args:
        connection: MT5Connection instance (not used directly, but kept for API consistency)
        group: Filter symbols by group pattern (e.g., "*USD*" for USD pairs).
    Returns:
        List[str]: List of symbol names matching the filter criteria.
    """
    symbols = mt5.symbols_get() if group is None else mt5.symbols_get(group)
    names = [symbol.name for symbol in symbols] if symbols else []
    return names
