"""
MetaTrader 5 market operations module.

This module provides a comprehensive interface for interacting with MetaTrader 5 market data.
It handles various market operations including:
- Symbol information retrieval
- Price data access
- Historical candle data fetching

The MT5Market class serves as the main entry point for all market-related operations.
"""

from typing import Dict, Any, List, Optional
import pandas as pd
from .market import get_symbols, get_symbol_info, get_symbol_price, get_candles_latest, get_candles_by_date


class MT5Market:
    """
    Handles MetaTrader 5 market operations.
    
    Provides methods to retrieve market data, symbol information, and prices.
    This class requires an active MT5 connection to function properly.
    """
    
    def __init__(self, connection):
        """
        Initialize the market operations handler.
        
        Establishes a link to the MetaTrader 5 terminal through the provided connection
        object. This connection must be active and properly initialized before
        using any methods of this class.
        
        Args:
            connection: MT5Connection instance for terminal communication.
                        This object handles the underlying connection to the MT5 terminal.
        """
        self._connection = connection
    
    def get_symbols(self, group: Optional[str] = None) -> List[str]:
        return get_symbols(self._connection, group)

    def get_symbol_info(self, symbol_name: str) -> Dict[str, Any]:
        return get_symbol_info(self._connection, symbol_name)
    
    def get_symbol_price(self, symbol_name: str) -> Dict[str, Any]:
        return get_symbol_price(self._connection, symbol_name)
    
    def get_candles_latest(
        self,
        symbol_name: str,
        timeframe: str,
        count: int = 100
    ) -> pd.DataFrame:
        return get_candles_latest(self._connection, symbol_name, timeframe, count)

    def get_candles_by_date(self, symbol_name: str, timeframe: str, from_date: Optional[str] = None, to_date: Optional[str] = None) -> pd.DataFrame:
        return get_candles_by_date(self._connection, symbol_name, timeframe, from_date, to_date)