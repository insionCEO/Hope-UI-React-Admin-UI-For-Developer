"""
MetaTrader MCP Client package.

This package provides a modular interface for communicating with the MetaTrader 5 terminal.
"""

from .client import MT5Client
from .client_order import MT5Order

from .exceptions import (
    MT5ClientError, 
    ConnectionError, 
    OrderError, 
    MarketError,
    AccountError,
    HistoryError
)

__all__ = [
    
    "MT5Client",
    "MT5Order",

    "MT5ClientError",
    "ConnectionError",
    "OrderError",
    "MarketError",
    "AccountError",
    "HistoryError",
]
