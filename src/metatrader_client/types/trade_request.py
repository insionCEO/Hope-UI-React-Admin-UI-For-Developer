"""
MetaTrader 5 trade request structure.

This module contains the trade request structure definition for MetaTrader 5.
"""
from dataclasses import dataclass
from datetime import datetime
from typing import Optional


@dataclass
class TradeRequest:
    """
    Trading request structure for MetaTrader 5 operations.
    
    This class represents the MqlTradeRequest structure from the MetaTrader 5 API.
    It contains all parameters needed for various trading operations such as
    opening positions, placing pending orders, and modifying existing orders/positions.
    
    Fields:
        action: Trading operation type (from TradeRequestActions enum)
        magic: EA ID (magic number) identifying which program sent the order
        order: Order ticket (for modify operations)
        symbol: Trading instrument name (e.g., "EURUSD")
        volume: Requested volume for a deal in lots
        price: Price at which the order should be executed
        stoplimit: Price for a Stop Limit order when price reaches the 'price' value
        sl: Stop Loss level
        tp: Take Profit level
        deviation: Maximum acceptable price deviation in points
        type: Order type (from OrderType enum)
        type_filling: Order filling type (from OrderFilling enum)
        type_time: Order lifetime type (from OrderTime enum)
        expiration: Order expiration time (for orders with type_time=ORDER_TIME_SPECIFIED)
        comment: Order comment
        position: Position ticket for position operations
        position_by: Opposite position ticket for position close by operations
    """
    action: int
    symbol: str
    volume: float
    type: int
    
    # Optional parameters with default values
    magic: int = 0
    order: int = 0
    price: float = 0.0
    stoplimit: float = 0.0
    sl: float = 0.0
    tp: float = 0.0
    deviation: int = 0
    type_filling: int = 0
    type_time: int = 0
    expiration: Optional[datetime] = None
    comment: str = ""
    position: int = 0
    position_by: int = 0
    
    def __str__(self) -> str:
        """String representation of the trade request."""
        props = []
        for k, v in self.__dict__.items():
            if v:  # Only include non-zero and non-empty values
                props.append(f"{k}={v}")
        return f"TradeRequest({', '.join(props)})"
        
    def to_dict(self) -> dict:
        """Convert the trade request to a dictionary.
        
        Returns:
            dict: Dictionary representation of the trade request
        """
        return {k: v for k, v in self.__dict__.items() if v or k in ['action', 'symbol', 'volume', 'type']}
