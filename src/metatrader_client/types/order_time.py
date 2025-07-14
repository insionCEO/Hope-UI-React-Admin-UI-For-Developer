"""
MetaTrader 5 order time definitions.

This module contains order time/lifetime definitions and mappings for MetaTrader 5 constants.
"""
from enum import Enum


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
    GTC = 0
    DAY = 1
    SPECIFIED = 2
    SPECIFIED_DAY = 3

    def __eq__(self, other):
        """
        Enable equality comparison with integers, strings, and other OrderTime instances.
        
        Args:
            other: Value to compare with (int, str, or OrderTime)
            
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
        Convert numeric order lifetime code to string representation.
        
        Args:
            code: Numeric order lifetime code
            default: Value to return if code is not found
            
        Returns:
            str: String representation of order lifetime or default value
        """
        for order_time in cls:
            if order_time.value == code:
                return order_time.name
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
            return any(order_time.value == key for order_time in cls)
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
        Validate order lifetime type.
        
        Args:
            input: Order lifetime code (int) or name (str)
            
        Returns:
            int: Numeric code for order lifetime or None
        """
        if isinstance(input, str):
            return cls.to_code(input)
        elif isinstance(input, cls):
            return input.value
        return None