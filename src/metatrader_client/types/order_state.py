"""
MetaTrader 5 order state definitions.

This module contains order state definitions and mappings for MetaTrader 5.
"""
from enum import Enum


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
    STARTED = 0
    PLACED = 1
    CANCELED = 2
    PARTIAL = 3
    FILLED = 4
    REJECTED = 5
    EXPIRED = 6
    REQUEST_ADD = 7
    REQUEST_MODIFY = 8
    REQUEST_CANCEL = 9
    
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
        for state in cls:
            if state.value == code:
                return state.name
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
            return any(state.value == key for state in cls)
        elif isinstance(key, str):
            try:
                cls[key.upper()]
                return True
            except KeyError:
                return False
        return False
