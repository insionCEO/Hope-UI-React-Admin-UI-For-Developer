"""
MetaTrader 5 trade request action definitions.

This module contains trade request action type definitions for MetaTrader 5.
"""
from enum import Enum
from typing import Any


class TradeRequestActions(Enum):
    """
    Enhanced TradeRequestActions enumeration with bi-directional mapping capabilities.
    
    This combines the benefits of Python's Enum with dictionary-like lookups:
    - Access numeric values via TradeRequestActions.DEAL, TradeRequestActions.PENDING, etc.
    - Get string representation via TradeRequestActions.to_string(1) ("DEAL")
    - Get numeric value via TradeRequestActions.to_code("DEAL") (1)
    - Check if a code or name exists via TradeRequestActions.exists("DEAL") or TradeRequestActions.exists(1)
    - Use in logical comparisons: if action == TradeRequestActions.DEAL or if action == "DEAL" or if action == 1
    
    Types:
        DEAL (1): Place an order for an instant deal (market order)
        PENDING (5): Place a pending order
        SLTP (6): Modify Stop Loss and Take Profit for an open position
        MODIFY (7): Modify parameters of a previously placed order
        REMOVE (8): Delete a previously placed pending order
        CLOSE_BY (10): Close a position by an opposite one
    """
    DEAL = 1
    PENDING = 5
    SLTP = 6
    MODIFY = 7
    REMOVE = 8
    CLOSE_BY = 10
    
    def __eq__(self, other):
        """
        Enable equality comparison with integers, strings, and other TradeRequestActions instances.
        
        Args:
            other: Value to compare with (int, str, or TradeRequestActions)
            
        Returns:
            bool: True if values are equal
        """
        if isinstance(other, int):
            return self.value == other
        elif isinstance(other, str):
            try:
                return self.name == other.upper()
            except (AttributeError, TypeError):
                return False
        return super().__eq__(other)
    
    def __hash__(self):
        """
        Maintain hashability for use in dictionaries and sets.
        
        Returns:
            int: Hash value
        """
        return hash(self.name)
    
    @classmethod
    def to_string(cls, code, default=None):
        """
        Convert numeric trade request action code to string representation.
        
        Args:
            code: Numeric trade request action code
            default: Value to return if code is not found
            
        Returns:
            str: String representation of trade request action or default value
        """
        for action in cls:
            if action.value == code:
                return action.name
        return default or f"UNKNOWN_{code}"
    
    @classmethod
    def to_code(cls, name, default=None):
        """
        Convert string trade request action name to numeric code.
        
        Args:
            name: String representation of trade request action
            default: Value to return if name is not found
            
        Returns:
            int: Numeric code for trade request action or default value
        """
        try:
            return cls[name.upper()].value
        except (KeyError, AttributeError):
            return default
    
    @classmethod
    def exists(cls, key):
        """
        Check if a trade request action code or name exists.
        
        Args:
            key: Trade request action code (int) or name (str)
            
        Returns:
            bool: True if the trade request action exists
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
    def validate(cls, input):
        """
        Validate trade request action type.
        
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
