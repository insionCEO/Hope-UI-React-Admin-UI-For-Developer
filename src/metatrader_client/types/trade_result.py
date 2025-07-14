"""
MetaTrader 5 trade result structure.

This module contains the trade result structure definition for MetaTrader 5.
"""
from dataclasses import dataclass
from typing import Optional
from .trade_request import TradeRequest


@dataclass
class TradeResult:
    """
    Trading result structure for MetaTrader 5 operations.
    
    This class represents the MqlTradeResult structure from the MetaTrader 5 API.
    It contains the results of a trade operation execution, including status codes,
    deal details, and financial information.
    
    Fields:
        retcode: Operation return code (0 means successful execution)
        deal: Deal ticket if it was performed
        order: Order ticket if it was placed
        volume: Deal volume confirmed by broker
        price: Deal price confirmed by broker
        bid: Current bid price
        ask: Current ask price
        comment: Broker comment on operation (usually error description if failed)
        request_id: Request ID set by the terminal during dispatching
        retcode_external: Return code of an external trading system
        balance: Balance value after the execution of the deal
        equity: Equity value after the execution of the deal
        profit: Profit of the performed deal
        margin: Margin required for the deal
        margin_free: Free margin remaining after the deal
        margin_level: Margin level after the deal
        request: Copy of the original trade request that was processed
    """
    retcode: int = 0
    deal: int = 0
    order: int = 0
    volume: float = 0.0
    price: float = 0.0
    bid: float = 0.0
    ask: float = 0.0
    comment: str = ""
    request_id: int = 0
    retcode_external: int = 0
    balance: float = 0.0
    equity: float = 0.0
    profit: float = 0.0
    margin: float = 0.0
    margin_free: float = 0.0
    margin_level: float = 0.0
    request: Optional[TradeRequest] = None
    
    def is_success(self) -> bool:
        """Check if the trade operation was successful.
        
        Returns:
            bool: True if operation was successful (retcode == 0)
        """
        return self.retcode == 0
    
    def __str__(self) -> str:
        """String representation of the trade result."""
        props = []
        for k, v in self.__dict__.items():
            if v and k != 'request':  # Include non-empty values except nested request
                props.append(f"{k}={v}")
        
        if self.request:
            props.append(f"request={{{self.request}}}")
            
        return f"TradeResult({', '.join(props)})"
    
    def to_dict(self) -> dict:
        """Convert the trade result to a dictionary.
        
        Returns:
            dict: Dictionary representation of the trade result
        """
        result = {k: v for k, v in self.__dict__.items() if v}
        if self.request:
            result['request'] = self.request.to_dict()
        return result
