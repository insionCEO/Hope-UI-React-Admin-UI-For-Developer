"""
MetaTrader 5 pending orders retrieval function.
"""

import MetaTrader5 as mt5
import pandas as pd
from typing import Optional, Union

from ..client_market import MT5Market
from ..utils import convert_orders_to_dataframe
from ..types import OrderType, OrderState, OrderFilling, OrderTime


def get_pending_orders(
    connection,
    ticket: Optional[Union[int, str]] = None,
    symbol_name: Optional[str] = None,
    group: Optional[str] = None,
    order_type: Optional[Union[str, int, OrderType]] = None,
    order_state: Optional[Union[str, int, OrderState]] = None,
    order_filling: Optional[Union[str, int, OrderFilling]] = None,
    order_lifetime: Optional[Union[str, int, OrderTime]] = None,
) -> pd.DataFrame:
    """
    Get pending orders.

    Argument rules:
    - All arguments are optionals.
    - If "ticket" is defined, then "symbol_name" and "group" will be ignored.
    - If "symbol_name" is defined, then "group" will be ignored.

    Returns:
        Pending orders in Panda's DataFrame, ordered by time (descending).
    """
    market = MT5Market(connection)
    
    # symbol_name and group validation
    if (ticket is not None):
        # Check if symbol_name is valid otherwise return empty DataFrame
        if symbol_name:
            symbols = market.get_symbols(symbol_name)
            if (len(symbols) != 1):
                return pd.DataFrame()

        # Check if group is valid otherwise return empty DataFrame
        if group:
            symbols = market.get_symbols(group)
            if (len(symbols) == 0):
                return pd.DataFrame()

    # Define result variable as DataFrame.
    result = pd.DataFrame()

    # Get pending orders using MetaTrader5 library
    orders = []
    if ticket is not None:
        # Convert ticket to integer if it's a string
        if isinstance(ticket, str):
            try:
                ticket = int(ticket)
            except ValueError:
                # Return empty DataFrame if ticket cannot be converted to int
                return pd.DataFrame()
        
        orders = mt5.orders_get(ticket=ticket)
    elif symbol_name is not None:
        orders = mt5.orders_get(symbol=symbol_name)
    elif group is not None:
        orders = mt5.orders_get(group=group)
    else:
        orders = mt5.orders_get()

    # Convert orders to DataFrame with enhanced order types
    if orders is not None:
        # Use the utility function to convert orders to DataFrame
        result = convert_orders_to_dataframe(orders)
        
        # Filter by order_type if specified
        if order_type is not None and not result.empty:
            if isinstance(order_type, str):
                type_code = OrderType.to_code(order_type)
            elif isinstance(order_type, OrderType):
                type_code = order_type.value
            else:
                type_code = order_type
            
            if 'type_code' in result.columns:
                result = result[result['type_code'] == type_code]
        
        # Filter by order_state if specified
        if order_state is not None and not result.empty:
            if isinstance(order_state, str):
                state_code = OrderState.to_code(order_state)
            elif isinstance(order_state, OrderState):
                state_code = order_state.value
            else:
                state_code = order_state
            
            if 'state_code' in result.columns:
                result = result[result['state_code'] == state_code]
                
        # Filter by order_filling if specified
        if order_filling is not None and not result.empty:
            if isinstance(order_filling, str):
                filling_code = OrderFilling.to_code(order_filling)
            elif isinstance(order_filling, OrderFilling):
                filling_code = order_filling.value
            else:
                filling_code = order_filling
            
            if 'filling_code' in result.columns:
                result = result[result['filling_code'] == filling_code]
                
        # Filter by order_lifetime if specified
        if order_lifetime is not None and not result.empty:
            if isinstance(order_lifetime, str):
                lifetime_code = OrderTime.to_code(order_lifetime)
            elif isinstance(order_lifetime, OrderTime):
                lifetime_code = order_lifetime.value
            else:
                lifetime_code = order_lifetime
            
            if 'lifetime_code' in result.columns:
                result = result[result['lifetime_code'] == lifetime_code]

    # Return result
    return result
