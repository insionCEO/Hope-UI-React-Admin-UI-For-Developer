"""
MetaTrader 5 position retrieval function.
"""

import MetaTrader5 as mt5
import pandas as pd
from typing import Optional, Union

from ..client_market import MT5Market
from ..utils import convert_positions_to_dataframe
from ..types import OrderType


def get_positions(
    connection,
    ticket: Optional[Union[int, str]] = None,
    symbol_name: Optional[str] = None,
    group: Optional[str] = None,
    order_type: Optional[Union[str, int, OrderType]] = None,
) -> pd.DataFrame:
    """
    Get open trade positions.

    Argument rules:
    - All arguments are optionals.
    - If "ticket" is defined, then "symbol_name" and "group" will be ignored.
    - If "symbol_name" is defined, then "group" will be ignored.

    Returns:
        Trade positions in Panda's DataFrame, ordered by time (descending).
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

    # Get positions using MetaTrader5 library
    positions = []
    if ticket is not None:
        # Convert ticket to integer if it's a string
        if isinstance(ticket, str):
            try:
                ticket = int(ticket)
            except ValueError:
                # Return empty DataFrame if ticket cannot be converted to int
                return pd.DataFrame()
        
        positions = mt5.positions_get(ticket=ticket)
    elif symbol_name is not None:
        positions = mt5.positions_get(symbol=symbol_name)
    elif group is not None:
        positions = mt5.positions_get(group=group)
    else:
        positions = mt5.positions_get()

    # Convert positions to DataFrame with enhanced order types
    if positions is not None:
        result = convert_positions_to_dataframe(positions)
        
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

    # Return result
    result.drop("type_code", axis=1, inplace=True, errors="ignore")
    return result
