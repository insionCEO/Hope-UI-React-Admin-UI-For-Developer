"""
Calculate potential profit for a trading operation.

This module implements the calculate_profit function which calculates
the potential profit in the account currency for a specified trading operation.
"""
import MetaTrader5 as mt5
from typing import Optional, Union

from metatrader_client.types import OrderType


# Mapping between our OrderType enum and MT5's ORDER_TYPE constants
# For profit calculation, only BUY and SELL are valid
_MT5_ORDER_TYPE_MAP = {
    OrderType.BUY.value: mt5.ORDER_TYPE_BUY,
    OrderType.SELL.value: mt5.ORDER_TYPE_SELL,
}


def calculate_profit(
    order_type: Union[int, str, OrderType], 
    symbol: str, 
    volume: float, 
    price_open: float,
    price_close: float
) -> Optional[float]:
    """
    Calculate the potential profit for a specified trading operation.
    
    This function estimates the result of a trading operation in the current market environment,
    allowing traders to make more informed decisions about position sizing, take-profit levels,
    and overall trade viability before executing a trade.
    
    Args:
        order_type: The type of order (only BUY or SELL supported; can be OrderType enum, string name, or integer code)
        symbol: Financial instrument name (e.g., "EURUSD")
        volume: Trading operation volume in lots
        price_open: Open price at which the position would be entered
        price_close: Close price at which the position would be exited
        
    Returns:
        float: The estimated profit in the account currency if successful
        None: If an error occurred during calculation
        
    Examples:
        >>> calculate_profit(OrderType.BUY, "EURUSD", 0.1, 1.1234, 1.1334)
        10.00
        >>> calculate_profit("SELL", "USDJPY", 0.1, 107.50, 106.50)
        9.30
    
    Raises:
        ValueError: If an invalid order_type is provided (only BUY and SELL are supported)
    """
    # Convert order_type to the appropriate code value
    if isinstance(order_type, str):
        type_code = OrderType.to_code(order_type)
        if type_code is None:
            raise ValueError(f"Invalid order type string: {order_type}")
    elif isinstance(order_type, OrderType):
        type_code = order_type.value
    else:
        type_code = order_type
        if not OrderType.exists(type_code):
            raise ValueError(f"Invalid order type code: {type_code}")
    
    # Validate that the order type is BUY or SELL
    if type_code not in [OrderType.BUY.value, OrderType.SELL.value]:
        raise ValueError(f"Only BUY and SELL order types are supported for profit calculation, got {OrderType.to_string(type_code)}")
    
    # Get the corresponding MT5 order type 
    mt5_order_type = _MT5_ORDER_TYPE_MAP.get(type_code)
    
    # Make sure the symbol is selected in Market Watch
    symbol_info = mt5.symbol_info(symbol)
    if symbol_info is None:
        print(f"Symbol {symbol} not found")
        return None
    
    if not symbol_info.visible:
        print(f"Symbol {symbol} is not visible in Market Watch, trying to select it...")
        if not mt5.symbol_select(symbol, True):
            print(f"Failed to select {symbol}")
            return None
    
    # Calculate the profit
    profit = mt5.order_calc_profit(mt5_order_type, symbol, volume, price_open, price_close)
    
    if profit is None:
        error_code = mt5.last_error()
        print(f"Failed to calculate profit for {symbol}, error code: {error_code}")
        return None
    
    return profit
