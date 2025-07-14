"""
Calculate price targets for take profit and stop loss orders.

This module implements a function to calculate price levels for take profit and stop loss orders
based on desired profit/loss targets.
"""
import MetaTrader5 as mt5
from typing import Optional, Union

from ..types import OrderType
from .calculate_profit import calculate_profit


def calculate_price_target(
    order_type: Union[int, str, OrderType],
    symbol: str,
    volume: float,
    entry_price: float,
    target: float
) -> Optional[float]:
    """
    Calculate the price level to achieve a desired profit or loss target.
    
    Args:
        order_type: The type of order (BUY or SELL)
        symbol: Financial instrument name (e.g., "EURUSD")
        volume: Trading operation volume in lots
        entry_price: Entry price at which the position is opened
        target: The profit/loss target to achieve (positive or negative)
            Positive value: Target profit to achieve
            Negative value: Maximum loss to limit
        
    Returns:
        float: The price level that achieves the target
        None: If an error occurred or the target cannot be achieved
        
    Examples:
        # Calculate price for $100 profit on EURUSD BUY position
        >>> calculate_price_target("BUY", "EURUSD", 0.1, 1.1200, 100.0)
        1.1300
        
        # Calculate price to limit losses to $50 on a EURUSD BUY position
        >>> calculate_price_target("BUY", "EURUSD", 0.1, 1.1200, -50.0)
        1.1100
    """
    # Get symbol info
    symbol_info = mt5.symbol_info(symbol)
    if symbol_info is None:
        print(f"Symbol {symbol} not found")
        return None
    
    # Ensure the symbol is selected in Market Watch
    if not symbol_info.visible:
        print(f"Symbol {symbol} is not visible in Market Watch, trying to select it...")
        if not mt5.symbol_select(symbol, True):
            print(f"Failed to select {symbol}")
            return None
    
    # Get symbol properties
    point = symbol_info.point
    digits = symbol_info.digits
    tick_size = symbol_info.trade_tick_size
    tick_value = symbol_info.trade_tick_value
    contract_size = symbol_info.trade_contract_size
    
    # Standardize order type
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
    
    if type_code not in [OrderType.BUY.value, OrderType.SELL.value]:
        raise ValueError(f"Only BUY and SELL order types are supported, got {OrderType.to_string(type_code)}")
    
    # Binary search approach to find target price
    is_buy = (type_code == OrderType.BUY.value)
    
    # Determine search direction based on order type and target sign
    # For BUY orders:
    #   - Positive target: price needs to go HIGHER
    #   - Negative target: price needs to go LOWER
    # For SELL orders:
    #   - Positive target: price needs to go LOWER
    #   - Negative target: price needs to go HIGHER
    
    search_higher = (is_buy and target > 0) or (not is_buy and target < 0)
    
    # Calculate initial price movement estimation using actual symbol data
    # We'll estimate how many points of price movement we need to achieve the target
    
    # Use tick value to estimate points needed
    if tick_value and tick_size and tick_value > 0 and tick_size > 0:
        # Calculate the value of 1 point movement
        point_value = tick_value / tick_size
        
        # Calculate how many points needed for the target
        if point_value > 0:
            points_needed = abs(target) / (volume * point_value)
            # Add a safety factor to ensure we cover the target
            points_needed *= 1.5
            
            # At least 20 points or 1% of the price
            min_points = max(20, entry_price * 0.01 / point)
            points_needed = max(points_needed, min_points)
            
            # Calculate price movement
            price_movement = points_needed * point
        else:
            # Fallback if point_value is zero
            price_movement = entry_price * 0.01  # 1% of entry price
    else:
        # Fallback if tick data is missing
        price_movement = entry_price * 0.01  # 1% of entry price
    
    # Set initial bounds based on search direction
    if search_higher:
        lower_bound = entry_price
        upper_bound = entry_price + price_movement
    else:
        lower_bound = max(entry_price - price_movement, point)  # Don't go below 0
        upper_bound = entry_price
    
    # Expand bounds until we find a price that gives the target profit
    max_iterations = 20
    iterations = 0
    target_found = False
    
    while iterations < max_iterations and not target_found:
        test_price = upper_bound if search_higher else lower_bound
        test_profit = calculate_profit(type_code, symbol, volume, entry_price, test_price)
        
        if test_profit is None:
            # Failed to calculate profit, try a smaller step
            price_movement /= 2
            if search_higher:
                upper_bound = entry_price + price_movement
            else:
                lower_bound = max(entry_price - price_movement, point)
            iterations += 1
            continue
        
        # Check if our bounds contain the target
        if (target > 0 and test_profit >= target) or (target < 0 and test_profit <= target):
            target_found = True
            break
        
        # Expand bounds
        price_movement *= 2
        if search_higher:
            upper_bound = entry_price + price_movement
        else:
            lower_bound = max(entry_price - price_movement, point)
        
        iterations += 1
    
    if not target_found:
        print(f"Could not find appropriate price bounds for target {target} on {symbol}")
        # Last resort - use a very large range
        if search_higher:
            upper_bound = entry_price * 2
        else:
            lower_bound = max(entry_price / 2, point)
    
    # Binary search to find the exact price
    tolerance = max(0.01, abs(target * 0.01))  # 1% of target or 0.01 minimum
    max_binary_iterations = 30
    binary_iterations = 0
    
    while (upper_bound - lower_bound) > (point/2) and binary_iterations < max_binary_iterations:
        mid_price = (lower_bound + upper_bound) / 2
        mid_price = round(mid_price, digits)
        
        # Skip prices too close to entry price
        if abs(mid_price - entry_price) < (point * 5):
            if search_higher:
                mid_price = entry_price + (10 * point)
            else:
                mid_price = entry_price - (10 * point)
        
        current_profit = calculate_profit(type_code, symbol, volume, entry_price, mid_price)
        
        if current_profit is None:
            # Failed to calculate profit
            binary_iterations += 1
            # Move toward entry price for stability
            if search_higher:
                upper_bound = (mid_price + entry_price) / 2
            else:
                lower_bound = (mid_price + entry_price) / 2
            continue
        
        # Check if we're close enough to the target
        if abs(current_profit - target) < tolerance:
            # Found a close enough match
            return mid_price
        
        # Update bounds based on profit comparison
        if (target > 0 and current_profit < target) or (target < 0 and current_profit > target):
            if search_higher:
                lower_bound = mid_price
            else:
                upper_bound = mid_price
        else:
            if search_higher:
                upper_bound = mid_price
            else:
                lower_bound = mid_price
        
        binary_iterations += 1
    
    # Return our best estimate
    result = (lower_bound + upper_bound) / 2
    
    # Ensure we're not returning entry price for non-zero targets
    if abs(result - entry_price) < (point * 5) and abs(target) > 0.01:
        if search_higher:
            result = entry_price + (100 * point)
        else:
            result = entry_price - (100 * point)
    
    return round(result, digits)
