"""
MetaTrader 5 order filling definitions.

This module contains order filling definitions and mappings for MetaTrader 5 constants.
"""
from enum import Enum


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

    def __eq__(self, other):
        """
        Enable equality comparison with integers, strings, and other OrderFilling instances.
        
        Args:
            other: Value to compare with (int, str, or OrderFilling)
            
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

    @classmethod
    def validate(cls, input):
        """
        Validate order filling type.
        
        Args:
            input: Order filling code (int) or name (str)
            
        Returns:
            int: Numeric code for order filling or None
        """
        if isinstance(input, str):
            return cls.to_code(input)
        elif isinstance(input, cls):
            return input.value
        return None