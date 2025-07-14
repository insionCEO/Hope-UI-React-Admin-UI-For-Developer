"""
Calculate margin required for a trading operation.

This module implements the calculate_margin function which calculates
the margin required in the account currency to perform a specified trading operation.
"""
import MetaTrader5 as mt5
from typing import Optional, Union

from metatrader_client.types import OrderType


# Mapping between our OrderType enum and MT5's ORDER_TYPE constants
_MT5_ORDER_TYPE_MAP = {
    OrderType.BUY.value: mt5.ORDER_TYPE_BUY,
    OrderType.SELL.value: mt5.ORDER_TYPE_SELL,
    OrderType.BUY_LIMIT.value: mt5.ORDER_TYPE_BUY_LIMIT,
    OrderType.SELL_LIMIT.value: mt5.ORDER_TYPE_SELL_LIMIT,
    OrderType.BUY_STOP.value: mt5.ORDER_TYPE_BUY_STOP,
    OrderType.SELL_STOP.value: mt5.ORDER_TYPE_SELL_STOP,
    OrderType.BUY_STOP_LIMIT.value: mt5.ORDER_TYPE_BUY_STOP_LIMIT,
    OrderType.SELL_STOP_LIMIT.value: mt5.ORDER_TYPE_SELL_STOP_LIMIT,
    OrderType.CLOSE_BY.value: mt5.ORDER_TYPE_CLOSE_BY,
}


def calculate_margin(
    order_type: Union[int, str, OrderType], 
    symbol: str, 
    volume: float, 
    price: float
) -> Optional[float]:
    """
    Calculate the margin required for a specified trading operation.
    
    This function determines in advance how much margin will be required to open a specific 
    position, without actually placing the order. This pre-trade calculation helps prevent 
    margin calls and account overleveraging by ensuring sufficient funds are available 
    before executing trades.
    
    Args:
        order_type: The type of order (can be OrderType enum value, string name, or integer code)
        symbol: Financial instrument name (e.g., "EURUSD")
        volume: Trading operation volume in lots
        price: Open price at which the order would be executed
        
    Returns:
        float: The margin required in the account currency if successful
        None: If an error occurred during calculation
        
    Examples:
        >>> calculate_margin(OrderType.BUY, "EURUSD", 0.1, 1.1234)
        48.15
        >>> calculate_margin("SELL", "USDJPY", 0.1, 107.50)
        43.28
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
    
    # Get the corresponding MT5 order type
    mt5_order_type = _MT5_ORDER_TYPE_MAP.get(type_code)
    if mt5_order_type is None:
        raise ValueError(f"Unsupported order type: {OrderType.to_string(type_code)}")
    
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
    
    # Calculate the margin
    margin = mt5.order_calc_margin(mt5_order_type, symbol, volume, price)
    
    if margin is None:
        error_code = mt5.last_error()
        print(f"Failed to calculate margin for {symbol}, error code: {error_code}")
        return None
    
    return margin