"""
MetaTrader 5 type definitions package.

This package contains type definitions and mappings for MetaTrader 5 constants.
All types are re-exported at the package level to maintain backward compatibility.
"""

# Re-export all types from individual modules
from .timeframe import TimeframeClass, Timeframe
from .order_type import OrderType
from .order_filling import OrderFilling
from .order_time import OrderTime
from .trade_action import TradeAction
from .order_state import OrderState
from .trade_request_actions import TradeRequestActions
from .trade_return_codes import TradeReturnCodes
from .trade_request import TradeRequest
from .trade_result import TradeResult

# Define __all__ to control what gets imported with "from types import *"
__all__ = [
    'TimeframeClass',
    'Timeframe',
    'OrderType',
    'OrderFilling',
    'OrderTime',
    'TradeAction',
    'OrderState',
    'TradeRequestActions',
    'TradeReturnCodes',
    'TradeRequest',
    'TradeResult',
]
