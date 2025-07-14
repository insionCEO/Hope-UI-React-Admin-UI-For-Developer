"""
MetaTrader 5 history operations module.

This module handles historical deals, orders, and trading statistics.
"""
from typing import Dict, Any, List, Optional
from datetime import datetime
from enum import Enum
import logging

import pandas as pd

# Set up logger
logger = logging.getLogger("MT5History")


class DealType(Enum):
    """Deal types in MetaTrader 5."""
    BUY = 0           # Buy
    SELL = 1          # Sell
    BALANCE = 2       # Balance
    CREDIT = 3        # Credit
    CHARGE = 4        # Charge
    CORRECTION = 5    # Correction
    BONUS = 6         # Bonus
    COMMISSION = 7    # Commission
    COMMISSION_DAILY = 8  # Daily commission
    COMMISSION_MONTHLY = 9  # Monthly commission
    AGENT_COMMISSION = 10  # Agent commission
    INTEREST = 11     # Interest
    CANCELED_BUY = 12 # Canceled buy deal
    CANCELED_SELL = 13  # Canceled sell deal


class OrderState(Enum):
    """Order states in MetaTrader 5."""
    STARTED = 0       # Order started
    PLACED = 1        # Order placed
    CANCELED = 2      # Order canceled
    PARTIAL = 3       # Order partially executed
    FILLED = 4        # Order filled
    REJECTED = 5      # Order rejected
    EXPIRED = 6       # Order expired
    REQUEST_ADD = 7   # Order requested to add
    REQUEST_MODIFY = 8  # Order requested to modify
    REQUEST_CANCEL = 9  # Order requested to cancel


class MT5History:
    """
    Handles MetaTrader 5 history operations.
    
    Provides methods to retrieve historical deals, orders, and trading statistics.
    """
    
    def __init__(self, connection):
        """
        Initialize the history operations handler.
        
        Args:
            connection: MT5Connection instance for terminal communication.
        """
        self._connection = connection
        
        # Set up logging level based on connection's debug setting
        if getattr(self._connection, 'debug', False):
            logger.setLevel(logging.DEBUG)
        else:
            logger.setLevel(logging.INFO)
    
    def get_deals(
        self,
        from_date: Optional[datetime] = None,
        to_date: Optional[datetime] = None,
        group: Optional[str] = None
    ) -> List[Dict[str, Any]]:
        """
        Get historical deals.
        
        Args:
            from_date: Start date for history (optional).
            to_date: End date for history (optional).
            group: Filter by group pattern, e.g., "*USD*" (optional).
            
        Returns:
            List[Dict[str, Any]]: List of historical deals with properties:
                - ticket: Deal ticket
                - time: Deal execution time
                - type: Deal type
                - entry: Deal entry type (0-in, 1-out, 2-inout)
                - symbol: Symbol name
                - volume: Deal volume
                - price: Deal price
                - profit: Deal profit
                - commission: Deal commission
                - swap: Swap
                - fee: Fee
                - magic: Expert Advisor ID
                - position_id: Position identifier
                - order: Order ticket that triggered the deal
                - comment: Deal comment
            
        Raises:
            DealsHistoryError: If deals cannot be retrieved.
            ConnectionError: If not connected to terminal.
        """
        from .history import get_deals
        return f"from_date: ${from_date}, to_date: {to_date}, group: {group}"
        return get_deals(self._connection, from_date, to_date, group)

    
    def get_orders(
        self,
        from_date: Optional[datetime] = None,
        to_date: Optional[datetime] = None,
        group: Optional[str] = None,
        ticket: Optional[int] = None
    ) -> List[Dict[str, Any]]:
        """
        Get historical orders.
        
        Args:
            from_date: Start date for history (optional).
            to_date: End date for history (optional).
            group: Filter by group pattern, e.g., "*USD*" (optional).
            ticket: Filter by specific order ticket (optional).
            
        Returns:
            List[Dict[str, Any]]: List of historical orders with properties:
                - ticket: Order ticket
                - time_setup: Order setup time
                - time_done: Order execution time
                - time_expiration: Order expiration time
                - type: Order type
                - state: Order state
                - magic: Expert Advisor ID
                - position_id: Position identifier
                - symbol: Symbol name
                - volume_initial: Initial order volume
                - volume_current: Unfilled volume
                - price_open: Order price
                - sl: Stop Loss level
                - tp: Take Profit level
                - price_current: Current price
                - price_stoplimit: Stop Limit order price
                - comment: Order comment
            
        Raises:
            OrdersHistoryError: If orders cannot be retrieved.
            ConnectionError: If not connected to terminal.
        """
        from .history import get_orders
        return get_orders(self._connection, from_date, to_date, group)

    
    def get_total_deals(
        self,
        from_date: Optional[datetime] = None,
        to_date: Optional[datetime] = None
    ) -> int:
        from .history import get_total_deals
        return get_total_deals(self._connection, from_date, to_date)

    
    def get_total_orders(
        self,
        from_date: Optional[datetime] = None,
        to_date: Optional[datetime] = None
    ) -> int:
        from .history import get_total_orders
        return get_total_orders(self._connection, from_date, to_date)

    
    def get_deals_as_dataframe(
        self,
        from_date: Optional[datetime] = None,
        to_date: Optional[datetime] = None,
        group: Optional[str] = None
    ) -> pd.DataFrame:
        from .history import get_deals_as_dataframe
        if group is not None:
            group = "*" + group + "*"
        return get_deals_as_dataframe(self._connection, from_date, to_date, group)
    
    def get_orders_as_dataframe(
        self,
        from_date: Optional[datetime] = None,
        to_date: Optional[datetime] = None,
        group: Optional[str] = None
    ) -> pd.DataFrame:
        from .history import get_orders_as_dataframe
        return get_orders_as_dataframe(self._connection, from_date, to_date, group)

