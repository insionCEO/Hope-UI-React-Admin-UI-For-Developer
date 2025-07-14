"""
MetaTrader 5 account operations module.

This module handles account information retrieval and management.
"""
from typing import Dict, Any, Optional
import logging

try:
    import MetaTrader5 as mt5
except ImportError:
    raise ImportError("MetaTrader5 package is not installed. Please install it with: pip install MetaTrader5")

from .exceptions import AccountError, AccountInfoError, TradingNotAllowedError, MarginLevelError, ConnectionError
from .account import (
    get_account_info,
    get_balance,
    get_equity,
    get_margin,
    get_free_margin,
    get_margin_level,
    get_currency,
    get_leverage,
    get_account_type,
    is_trade_allowed,
    check_margin_level,
    get_trade_statistics,
)

# Set up logger
logger = logging.getLogger("MT5Account")


class MT5Account:
    """
    Handles MetaTrader 5 account operations.
    
    Provides methods to retrieve account information and status.
    """
    
    def __init__(self, connection):
        """
        Initialize the account operations handler.
        
        Args:
            connection: MT5Connection instance for terminal communication.
        """
        self._connection = connection
        
        # Set up logging level based on connection's debug setting
        if getattr(self._connection, 'debug', False):
            logger.setLevel(logging.DEBUG)
        else:
            logger.setLevel(logging.INFO)
    
    def get_account_info(self) -> Dict[str, Any]:
        return get_account_info(self._connection)
    
    def get_balance(self) -> float:
        return get_balance(self._connection)
    
    def get_equity(self) -> float:
        return get_equity(self._connection)
    
    def get_margin(self) -> float:
        return get_margin(self._connection)
    
    def get_free_margin(self) -> float:
        return get_free_margin(self._connection)
    
    def get_margin_level(self) -> float:
        return get_margin_level(self._connection)
    
    def get_currency(self) -> str:
        return get_currency(self._connection)
    
    def get_leverage(self) -> int:
        return get_leverage(self._connection)
    
    def get_account_type(self) -> str:
        return get_account_type(self._connection)
    
    def is_trade_allowed(self) -> bool:
        return is_trade_allowed(self._connection)
    
    def check_margin_level(self, min_level: float = 100.0) -> bool:
        return check_margin_level(self._connection, min_level)
    
    def get_trade_statistics(self) -> Dict[str, Any]:
        return get_trade_statistics(self._connection)
