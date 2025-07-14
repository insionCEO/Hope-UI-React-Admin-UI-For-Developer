"""
MetaTrader 5 order operations module.

This module handles trade execution, modification, and management.
"""

from pandas import DataFrame
from typing import Optional, Union

from .order import get_all_positions, get_positions_by_symbol, get_positions_by_currency, get_positions_by_id
from .order import get_all_pending_orders, get_pending_orders_by_symbol, get_pending_orders_by_currency, get_pending_orders_by_id
from .order import place_market_order, place_pending_order, modify_position, modify_pending_order
from .order import close_position, close_all_positions, close_all_positions_by_symbol, close_all_profitable_positions, close_all_losing_positions
from .order import cancel_pending_order, cancel_all_pending_orders, cancel_pending_orders_by_symbol


class MT5Order:
    """
    Handles MetaTrader 5 order operations.
    Provides methods to execute, modify, and manage trading orders.
    """


    def __init__(self, connection):
        self._connection = connection
    

    def get_all_positions(self) -> DataFrame:
        return get_all_positions(self._connection)


    def get_positions_by_symbol(self, symbol: str) -> DataFrame:
        return get_positions_by_symbol(self._connection, symbol)


    def get_positions_by_currency(self, currency: str) -> DataFrame:
        return get_positions_by_currency(self._connection, currency)


    def get_positions_by_id(self, id: Union[int, str]) -> DataFrame:
        return get_positions_by_id(self._connection, id)


    def get_all_pending_orders(self) -> DataFrame:
        return get_all_pending_orders(self._connection)


    def get_pending_orders_by_symbol(self, symbol: str) -> DataFrame:
        return get_pending_orders_by_symbol(self._connection, symbol)


    def get_pending_orders_by_currency(self, currency: str) -> DataFrame:
        return get_pending_orders_by_currency(self._connection, currency)


    def get_pending_orders_by_id(self, id: Union[int, str]) -> DataFrame:
        return get_pending_orders_by_id(self._connection, id)


    def place_market_order(self, *, type: str, symbol: str, volume: Union[float, int]):
        return place_market_order(self._connection, type=type, symbol=symbol, volume=volume)
    
    
    def place_pending_order(self, *, type: str, symbol: str, volume: Union[float, int], price: Union[float, int], stop_loss: Optional[Union[float, int]] = 0.0, take_profit: Optional[Union[float, int]] = 0.0):
        return place_pending_order(self._connection, type=type, symbol=symbol, volume=volume, price=price, stop_loss=stop_loss, take_profit=take_profit)


    def modify_position(self, id: Union[str, int], *, stop_loss: Optional[Union[int, float]] = None, take_profit: Optional[Union[int, float]] = None):
        return modify_position(self._connection, id, stop_loss=stop_loss, take_profit=take_profit)


    def modify_pending_order(self, *, id: Union[int, str], price: Optional[Union[int, float]] = None, stop_loss: Optional[Union[int, float]] = None, take_profit: Optional[Union[int, float]] = None):
        return modify_pending_order(self._connection, id=id, price=price, stop_loss=stop_loss, take_profit=take_profit)


    def close_position(self, id: Union[str, int]):
        return close_position(self._connection, id)


    def cancel_pending_order(self, id: Union[int, str]):
        return cancel_pending_order(self._connection, id)


    def close_all_positions(self):
        return close_all_positions(self._connection)


    def close_all_positions_by_symbol(self, symbol: str):
        return close_all_positions_by_symbol(self._connection, symbol)


    def close_all_profitable_positions(self):
        return close_all_profitable_positions(self._connection)

    def close_all_losing_positions(self):
        return close_all_losing_positions(self._connection)


    def cancel_all_pending_orders(self):
        return cancel_all_pending_orders(self._connection)

        
    def cancel_pending_orders_by_symbol(self, symbol: str):
        return cancel_pending_orders_by_symbol(self._connection, symbol)