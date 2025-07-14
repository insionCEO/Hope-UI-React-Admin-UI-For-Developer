"""
MetaTrader 5 type definitions.

This module contains type definitions and mappings for MetaTrader 5 constants.
"""
import MetaTrader5 as mt5
from typing import Optional
from enum import Enum


# Create a Timeframe class that behaves like a dictionary
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


# ========================================================================================
# Order Type Definitions
# ========================================================================================

class OrderType(Enum):
    """
    Enhanced OrderType enumeration with bi-directional mapping capabilities.
    
    This combines the benefits of Python's Enum with dictionary-like lookups:
    - Access numeric values via OrderType.BUY, OrderType.SELL, etc. (Enum style)
    - Get string representation via OrderType.to_string(0) ("BUY")
    - Get numeric value via OrderType.to_code("BUY") (0)
    - Check if a code or name exists via OrderType.exists("BUY") or OrderType.exists(0)
    
    Examples:
        OrderType.BUY.value == 0
        OrderType.to_string(0) == "BUY"
        OrderType.to_code("BUY") == 0
        OrderType["BUY"].value == 0
    """
    BUY = 0
    SELL = 1
    BUY_LIMIT = 2
    SELL_LIMIT = 3
    BUY_STOP = 4
    SELL_STOP = 5
    BUY_STOP_LIMIT = 6
    SELL_STOP_LIMIT = 7
    CLOSE_BY = 8
    
    @classmethod
    def to_string(cls, code, default=None):
        """
        Convert numeric order type code to string representation.
        
        Args:
            code: Numeric order type code
            default: Value to return if code is not found
            
        Returns:
            str: String representation of order type or default value
        """
        for order_type in cls:
            if order_type.value == code:
                return order_type.name
        return default or f"UNKNOWN_{code}"
    
    @classmethod
    def to_code(cls, name, default=None):
        """
        Convert string order type name to numeric code.
        
        Args:
            name: String representation of order type
            default: Value to return if name is not found
            
        Returns:
            int: Numeric code for order type or default value
        """
        try:
            return cls[name.upper()].value
        except (KeyError, AttributeError):
            return default
    
    @classmethod
    def exists(cls, key):
        """
        Check if an order type code or name exists.
        
        Args:
            key: Order type code (int) or name (str)
            
        Returns:
            bool: True if the order type exists
        """
        if isinstance(key, int):
            return any(order_type.value == key for order_type in cls)
        elif isinstance(key, str):
            try:
                cls[key.upper()]
                return True
            except KeyError:
                return False
        return False


class OrderFilling(Enum):
    """
    Enhanced OrderFilling enumeration with bi-directional mapping capabilities.
    
    This combines the benefits of Python's Enum with dictionary-like lookups:
    - Access numeric values via OrderFilling.FOK, OrderFilling.IOC, etc. (Enum style)
    - Get string representation via OrderFilling.to_string(0) ("FOK")
    - Get numeric value via OrderFilling.to_code("FOK") (0)
    - Check if a code or name exists via OrderFilling.exists("FOK") or OrderFilling.exists(0)
    
    Types:
        FOK (0): Fill or Kill - order must be filled completely or canceled
        IOC (1): Immediate or Cancel - fill as much as possible and cancel the rest
        RETURN (2): Return execution - return the remaining volume
    """
    FOK = 0       # Fill or Kill
    IOC = 1       # Immediate or Cancel
    RETURN = 2    # Return execution
    
    @classmethod
    def to_string(cls, code, default=None):
        """
        Convert numeric order filling code to string representation.
        
        Args:
            code: Numeric order filling code
            default: Value to return if code is not found
            
        Returns:
            str: String representation of order filling or default value
        """
        for filling in cls:
            if filling.value == code:
                return filling.name
        return default or f"UNKNOWN_{code}"
    
    @classmethod
    def to_code(cls, name, default=None):
        """
        Convert string order filling name to numeric code.
        
        Args:
            name: String representation of order filling
            default: Value to return if name is not found
            
        Returns:
            int: Numeric code for order filling or default value
        """
        try:
            return cls[name.upper()].value
        except (KeyError, AttributeError):
            return default
    
    @classmethod
    def exists(cls, key):
        """
        Check if an order filling code or name exists.
        
        Args:
            key: Order filling code (int) or name (str)
            
        Returns:
            bool: True if the order filling exists
        """
        if isinstance(key, int):
            return any(filling.value == key for filling in cls)
        elif isinstance(key, str):
            try:
                cls[key.upper()]
                return True
            except KeyError:
                return False
        return False


class OrderTime(Enum):
    """
    Enhanced OrderTime enumeration with bi-directional mapping capabilities.
    
    This combines the benefits of Python's Enum with dictionary-like lookups:
    - Access numeric values via OrderTime.GTC, OrderTime.DAY, etc. (Enum style)
    - Get string representation via OrderTime.to_string(0) ("GTC")
    - Get numeric value via OrderTime.to_code("GTC") (0)
    - Check if a code or name exists via OrderTime.exists("GTC") or OrderTime.exists(0)
    
    Types:
        GTC (0): Good Till Cancelled - order remains active until explicitly canceled
        DAY (1): Day Order - order is valid until the end of the current trading day
        SPECIFIED (2): Valid until specified date and time
        SPECIFIED_DAY (3): Valid until 23:59:59 of specified day
    """
    GTC = 0            # Good Till Cancelled
    DAY = 1            # Day Order
    SPECIFIED = 2      # Valid until specified date
    SPECIFIED_DAY = 3  # Valid until 23:59:59 of specified day
    
    @classmethod
    def to_string(cls, code, default=None):
        """
        Convert numeric order lifetime code to string representation.
        
        Args:
            code: Numeric order lifetime code
            default: Value to return if code is not found
            
        Returns:
            str: String representation of order lifetime or default value
        """
        for time_type in cls:
            if time_type.value == code:
                return time_type.name
        return default or f"UNKNOWN_{code}"
    
    @classmethod
    def to_code(cls, name, default=None):
        """
        Convert string order lifetime name to numeric code.
        
        Args:
            name: String representation of order lifetime
            default: Value to return if name is not found
            
        Returns:
            int: Numeric code for order lifetime or default value
        """
        try:
            return cls[name.upper()].value
        except (KeyError, AttributeError):
            return default
    
    @classmethod
    def exists(cls, key):
        """
        Check if an order lifetime code or name exists.
        
        Args:
            key: Order lifetime code (int) or name (str)
            
        Returns:
            bool: True if the order lifetime exists
        """
        if isinstance(key, int):
            return any(time_type.value == key for time_type in cls)
        elif isinstance(key, str):
            try:
                cls[key.upper()]
                return True
            except KeyError:
                return False
        return False


class TradeAction(Enum):
    """
    Trading operation types supported by MetaTrader 5.
    
    Types:
        DEAL (1): Market order - immediate execution
        PENDING (5): Pending order - execution when conditions are met
        SLTP (6): Modify Stop Loss and Take Profit levels
        MODIFY (7): Modify parameters of existing order
        REMOVE (8): Delete order
        CLOSE_BY (10): Close position by an opposite one
    """
    DEAL = 1  # Market order
    PENDING = 5  # Pending order
    SLTP = 6  # Modify Stop Loss and Take Profit
    MODIFY = 7  # Modify order
    REMOVE = 8  # Delete order
    CLOSE_BY = 10  # Close position by opposite one


# ========================================================================================
# Order State Definitions
# ========================================================================================

class OrderState(Enum):
    """
    Enhanced OrderState enumeration with bi-directional mapping capabilities.
    
    This combines the benefits of Python's Enum with dictionary-like lookups:
    - Access numeric values via OrderState.STARTED, OrderState.PLACED, etc. (Enum style)
    - Get string representation via OrderState.to_string(0) ("STARTED")
    - Get numeric value via OrderState.to_code("STARTED") (0)
    - Check if a code or name exists via OrderState.exists("STARTED") or OrderState.exists(0)
    
    Examples:
        OrderState.STARTED.value == 0
        OrderState.to_string(0) == "STARTED"
        OrderState.to_code("STARTED") == 0
        OrderState["STARTED"].value == 0
    """
    STARTED = 0         # Order checked, but not yet accepted by broker
    PLACED = 1          # Order accepted
    CANCELED = 2        # Order canceled by client
    PARTIAL = 3         # Order partially executed
    FILLED = 4          # Order fully executed
    REJECTED = 5        # Order rejected
    EXPIRED = 6         # Order expired
    REQUEST_ADD = 7     # Order being registered (placing)
    REQUEST_MODIFY = 8  # Order being modified (modifying)
    REQUEST_CANCEL = 9  # Order being deleted (deleting)
    
    @classmethod
    def to_string(cls, code, default=None):
        """
        Convert numeric order state code to string representation.
        
        Args:
            code: Numeric order state code
            default: Value to return if code is not found
            
        Returns:
            str: String representation of order state or default value
        """
        for order_state in cls:
            if order_state.value == code:
                return order_state.name
        return default or f"UNKNOWN_{code}"
    
    @classmethod
    def to_code(cls, name, default=None):
        """
        Convert string order state name to numeric code.
        
        Args:
            name: String representation of order state
            default: Value to return if name is not found
            
        Returns:
            int: Numeric code for order state or default value
        """
        try:
            return cls[name.upper()].value
        except (KeyError, AttributeError):
            return default
    
    @classmethod
    def exists(cls, key):
        """
        Check if an order state code or name exists.
        
        Args:
            key: Order state code (int) or name (str)
            
        Returns:
            bool: True if the order state exists
        """
        if isinstance(key, int):
            return any(order_state.value == key for order_state in cls)
        elif isinstance(key, str):
            try:
                cls[key.upper()]
                return True
            except KeyError:
                return False
        return False