"""
MetaTrader 5 trade action definitions.

This module contains trade action type definitions for MetaTrader 5.
"""
from enum import Enum
from typing import Optional, Union, Any


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
    DEAL = 1
    PENDING = 5
    SLTP = 6
    MODIFY = 7
    REMOVE = 8
    CLOSE_BY = 10

    @classmethod
    def to_string(cls, code, default=None):
        """
        Convert numeric action code to string representation.
        
        Args:
            code: Numeric action code
            default: Value to return if code is not found
            
        Returns:
            str: String representation of action or default value
        """
        for action in cls:
            if action.value == code:
                return action.name
        return default or f"UNKNOWN_{code}"

    @classmethod
    def to_code(cls, name, default=None):
        """
        Convert string action name to numeric code.
        
        Args:
            name: String representation of action
            default: Value to return if name is not found
            
        Returns:
            int: Numeric code for action or default value
        """
        try:
            return cls[name.upper()].value
        except (KeyError, AttributeError):
            return default

    @classmethod
    def exists(cls, key):
        """
        Check if an action code or name exists.
        
        Args:
            key: Action code (int) or name (str)
            
        Returns:
            bool: True if the action exists
        """
        if isinstance(key, int):
            return any(action.value == key for action in cls)
        elif isinstance(key, str):
            try:
                cls[key.upper()]
                return True
            except KeyError:
                return False
        return False

    @classmethod
    def validate(cls, input: Any) -> Optional[int]:
        """
        Validate action type.
        
        Args:
            input: Action code (int) or name (str)
            
        Returns:
            int: Numeric code for action or None
        """
        if isinstance(input, str):
            return cls.to_code(input)
        elif isinstance(input, cls):
            return input.value
        return None