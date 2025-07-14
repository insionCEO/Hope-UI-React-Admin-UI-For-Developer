"""
MetaTrader 5 timeframe definitions.

This module contains timeframe definitions and mappings for MetaTrader 5 constants.
"""
import MetaTrader5 as mt5
from typing import Optional


class TimeframeClass:
    """
    Mapping of MetaTrader5 timeframe constants accessible via string keys.
    
    Examples:
        Timeframe["M1"] or Timeframe["m1"] to get mt5.TIMEFRAME_M1
    """
    _timeframes = {
        "M1": mt5.TIMEFRAME_M1,
        "M2": mt5.TIMEFRAME_M2,
        "M3": mt5.TIMEFRAME_M3,
        "M4": mt5.TIMEFRAME_M4,
        "M5": mt5.TIMEFRAME_M5,
        "M6": mt5.TIMEFRAME_M6,
        "M10": mt5.TIMEFRAME_M10,
        "M12": mt5.TIMEFRAME_M12,
        "M15": mt5.TIMEFRAME_M15,
        "M20": mt5.TIMEFRAME_M20,
        "M30": mt5.TIMEFRAME_M30,
        "H1": mt5.TIMEFRAME_H1,
        "H2": mt5.TIMEFRAME_H2,
        "H3": mt5.TIMEFRAME_H3,
        "H4": mt5.TIMEFRAME_H4,
        "H6": mt5.TIMEFRAME_H6,
        "H8": mt5.TIMEFRAME_H8,
        "H12": mt5.TIMEFRAME_H12,
        "D1": mt5.TIMEFRAME_D1,
        "W1": mt5.TIMEFRAME_W1,
        "MN1": mt5.TIMEFRAME_MN1,
    }
    
    def __getitem__(self, key: str) -> int:
        """
        Get timeframe constant using string key.
        
        Args:
            key: String representation of timeframe (e.g., "M1", "H1")
            
        Returns:
            int: MetaTrader5 timeframe constant
            
        Raises:
            KeyError: If timeframe string is invalid
        """
        if isinstance(key, str):
            upper_key = key.upper()
            if upper_key in self._timeframes:
                return self._timeframes[upper_key]
        raise KeyError(f"Invalid timeframe: {key}")
    
    def get(self, key: str, default=None) -> Optional[int]:
        """
        Get timeframe constant using string key with default fallback.

        Args:
            key: String representation of timeframe (e.g., "M1", "H1")
            default: Value to return if key is not found
        
        Returns:
            int: MetaTrader5 timeframe constant or default value
        """
        try:
            return self[key]
        except KeyError:
            return default


# Create a singleton instance of TimeframeClass
Timeframe = TimeframeClass()
