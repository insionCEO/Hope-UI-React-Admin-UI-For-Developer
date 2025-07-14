"""
MetaTrader 5 order sending function.

This module provides functionality to send trading orders to MetaTrader 5.
It supports various trading operations including market orders, pending orders,
modification of positions and orders, and position closing.
"""

import MetaTrader5 as mt5
import pandas as pd
from typing import Optional, Union, Dict
from datetime import datetime

from ..client_market import MT5Market
from ..types import (
	TradeRequest,
	TradeRequestActions,
	OrderType,
	OrderFilling,
	OrderTime
)


def send_order(
	connection,
	*,
	action: Union[str, int, TradeRequestActions],
	symbol: Optional[str] = None,
	volume: Optional[float] = None,
	order_type: Optional[Union[str, int, OrderType]] = None,
	price: Optional[float] = 0.0,
	stop_loss: Optional[float] = 0.0,
	take_profit: Optional[float] = 0.0,
	deviation: Optional[int] = 20,
	magic: Optional[int] = 0,
	comment: Optional[str] = "",
	position: Optional[int] = 0,
	position_by: Optional[int] = 0,
	order: Optional[int] = 0,
	expiration: Optional[datetime] = None,
	type_filling: Optional[Union[str, int, OrderFilling]] = None,
	type_time: Optional[Union[str, int, OrderTime]] = None,
	stoplimit: Optional[float] = 0.0
) -> Dict:
	"""
	Send a trading order to MetaTrader 5.
	
	This function creates and sends a trading request to MetaTrader 5 using the order_send
	function. It supports all types of trading operations including market orders, pending
	orders, position modifications, and order cancellations.
	
	Args:
		connection: MetaTrader 5 connection object
		action: Trading operation type (DEAL, PENDING, SLTP, MODIFY, REMOVE, CLOSE_BY)
		symbol: Trading instrument name (e.g., "EURUSD")
		volume: Trade volume in lots
		order_type: Order type (BUY, SELL, BUY_LIMIT, etc.)
		price: Order price (required for pending orders, ignored for market in some execution modes)
		stop_loss: Stop Loss level (optional)
		take_profit: Take Profit level (optional)
		deviation: Maximum acceptable price deviation in points (for market orders)
		magic: Expert Advisor ID (magic number)
		comment: Order comment
		position: Position ticket (required for position operations)
		position_by: Opposite position ticket (for CLOSE_BY operations)
		order: Order ticket (required for order modification)
		expiration: Order expiration time (for orders with type_time=SPECIFIED)
		type_filling: Order filling type (FOK, IOC, RETURN)
		type_time: Order lifetime type (GTC, DAY, SPECIFIED)
		stoplimit: Stop limit price (for STOP_LIMIT orders)
	
	Returns:
		Dictionary containing:
		- 'success': Boolean indicating if the operation was successful
		- 'message': Human-readable message describing the result
		
	Notes:
		Different parameters are required depending on the action:
		- DEAL (market order): symbol, volume, order_type (BUY/SELL)
		- PENDING: symbol, volume, price, order_type
		- SLTP: position, sl and/or tp
		- MODIFY: order, and new parameters to modify
		- REMOVE: order
		- CLOSE_BY: position, position_by
	"""
	_market = MT5Market(connection)

	# Validate action
	action = TradeRequestActions.validate(action)
	
	# Validate order type
	order_type = OrderType.validate(order_type)

	# Validate symbol
	if symbol is not None:
		if (len(_market.get_symbols(symbol)) == 0):
			return { "success": False, "message": "Invalid symbol" }
		# Ensure symbol is available
		if not mt5.symbol_select(symbol, True):
			return { "success": False, "message": f"Failed to select {symbol}", "data": None }
		# Get symbol info
		symbol_info = mt5.symbol_info(symbol)
		if symbol_info is None:
			return { "success": False, "message": f"Failed to get symbol info for {symbol}", "data": None }
		# Fetch broker-supported filling modes
		filling_mask = symbol_info.filling_mode
		filling_to_enum = {
			1: mt5.ORDER_FILLING_FOK,
			2: mt5.ORDER_FILLING_IOC,
			4: mt5.ORDER_FILLING_RETURN
		}
		for flag, enum in filling_to_enum.items():
			if filling_mask & flag:
				selected_filling = enum
				break

	# Validate volume
	if volume is not None:
		if (volume <= 0 or volume > 100 or volume == 0):
			return { "success": False, "message": "Invalid volume", "data": None }
		else:
			volume = float(volume)

	# Validate price
	price = float(price)
	if not isinstance(price, float):
		return { "success": False, "message": "Invalid price" }

	# Validate TP and SL
	if stop_loss != 0:
		stop_loss = float(stop_loss)
		if not isinstance(stop_loss, float):
			return { "success": False, "message": "Invalid SL or TP" }
	if take_profit != 0:
		take_profit = float(take_profit)
		if not isinstance(take_profit, float):
			return { "success": False, "message": "Invalid SL or TP" }
		
	if order_type in [OrderType.BUY, OrderType.BUY_LIMIT, OrderType.BUY_STOP]:
		if (stop_loss != 0) and (stop_loss >= price):
			return { "success": False, "message": "Stop loss must be less than price" }
		if (take_profit != 0) and (take_profit <= price):
			return { "success": False, "message": "Take profit must be higher than the price" }
		if (stop_loss != 0) and (take_profit != 0) and (stop_loss > take_profit):
			return { "success": False, "message": "Stop loss must be less than take profit" }
		
	elif order_type in [OrderType.SELL, OrderType.SELL_LIMIT, OrderType.SELL_STOP]:
		if (stop_loss != 0) and (stop_loss <= price):
			return { "success": False, "message": "Stop loss must be above the price" }
		if (take_profit != 0) and (take_profit >= price):
			return { "success": False, "message": "Take profit must be below the price" }
		if (stop_loss != 0 and take_profit != 0) and (stop_loss < take_profit):
			return { "success": False, "message": "Stop loss must be above the take profit" }

	# Comment
	comment = comment if comment else "MCP"

	match action:

		# ------------------------------
		# Market execution (BUY or SELL)
		# ------------------------------
		case TradeRequestActions.DEAL:
			
			if order_type not in [OrderType.BUY, OrderType.SELL]:
				return { "success": False, "message": "Invalid order type, must be BUY or SELL", "data": None }

			# Ensure the price is not zero
			if price == 0:
				tick = mt5.symbol_info_tick(symbol)
				if tick is None:
					return { "success": False, "message": "Failed to get tick for {symbol}", "data": None }
				price = tick.ask if order_type == OrderType.BUY else tick.bid
				# Round to broker's precision
				digits = symbol_info.digits
				price = round(price, digits)

			request = {
				"symbol": symbol,
				"volume": volume,
				"type": order_type,
				"price": price,
				"action": action,
				"type_filling": selected_filling,
				"comment": comment,
				"sl": stop_loss,
				"tp": take_profit,
				"deviation": 20,
				"position": position
			}

			if position is None:
				del request["position"]
			else:
				pass
			
			response = mt5.order_send(request)

			error_code, error_description = mt5.last_error()
			
			if error_code < 0:
				return { "success": False, "message": f"Error {error_code}: {error_description}", "data": None }

			return { "success": True, "message": "Order sent successfully", "data": response }

		# ----------------------------------------------------------
		# Pending order (BUY_LIMIT, SELL_LIMIT, BUY_STOP, SELL_STOP)
		# ----------------------------------------------------------
		case TradeRequestActions.PENDING:

			if order_type not in [OrderType.BUY_LIMIT, OrderType.SELL_LIMIT, OrderType.BUY_STOP, OrderType.SELL_STOP]:
				return { "success": False, "message": "Invalid order type, must be BUY_LIMIT, SELL_LIMIT, BUY_STOP, or SELL_STOP", "data": None }

			tick = mt5.symbol_info_tick(symbol)
			if tick is not None:
				match order_type:
					case OrderType.BUY_LIMIT:
						if price > tick.ask:
							return { "success": False, "message": "Invalid price, must be above current ask", "data": None }
					case OrderType.SELL_LIMIT:
						if price < tick.bid:
							return { "success": False, "message": "Invalid price, must be below current bid", "data": None }
					case OrderType.BUY_STOP:
						if price < tick.ask:
							return { "success": False, "message": "Invalid price, must be above current ask", "data": None }
					case OrderType.SELL_STOP:
						if price > tick.bid:
							return { "success": False, "message": "Invalid price, must be below current bid", "data": None }

			request = {
				"action": action,
				"symbol": symbol,
				"volume": volume,
				"type": order_type,
				"price": price,
				"sl": stop_loss,
				"tp": take_profit,
				"deviation": deviation,
				"comment": comment,
				"type_time": OrderTime.SPECIFIED.value if expiration else OrderTime.GTC.value,
				"expiration": expiration if expiration else 0,
				"type_filling": selected_filling,
			}

			response = mt5.order_send(request)

			error_code, error_description = mt5.last_error()
			if error_code < 0:
				return { "success": False, "message": f"Error {error_code}: {error_description}", "data": None }
			return { "success": True, "message": "Order sent successfully", "data": response }

		# --------------------
		# Modify order (SL/TP)
		# --------------------    
		case TradeRequestActions.SLTP:

			if position is None:
				return {
					"success": False,
					"message": f"Parameter `position` is required for this operation",
					"data": None,
				}

			request = {
				"action": action,
				"position": position,
				"sl": stop_loss,
				"tp": take_profit,
				"comment": comment,
			}

			response = mt5.order_send(request)

			error_code, error_description = mt5.last_error()
			if error_code < 0:
				return { "success": False, "message": f"Error {error_code}: {error_description}", "data": None }
			return { "success": True, "message": "Order sent successfully", "data": response }
			
		# ------------
		# Modify order
		# ------------
		case TradeRequestActions.MODIFY:

			if order is None:
				return {
					"success": False,
					"message": f"Parameter `order` is required for this operation",
					"data": None,
				}
			
			request = {
				"action": action,
				"order": order,
				"price": price,
				"sl": stop_loss,
				"tp": take_profit,
			}

			if price is None:
				del request["price"]
			if stop_loss is None:
				del request["sl"]
			if take_profit is None:
				del request["tp"]

			mt5.order_send(request)

			error_code, error_description = mt5.last_error()
			if error_code < 0:
				return { "success": False, "message": f"Error {error_code}: {error_description}", "data": None }
			return { "success": True, "message": "Order sent successfully", "data": None }

		#----------------------
		#  Remove pending order
		# ---------------------
		case TradeRequestActions.REMOVE:

			if order is None:
				return {
					"success": False,
					"message": f"Parameter `order` is required for this operation",
					"data": None,
				}
			
			request = {
				"action": action,
				"order": order,
			}

			response = mt5.order_send(request)

			error_code, error_description = mt5.last_error()
			if error_code < 0:
				return { "success": False, "message": f"Error {error_code}: {error_description}", "data": None }
			return { "success": True, "message": "Order sent successfully", "data": response }

		# --------
		# Close by
		# --------   
		case TradeRequestActions.CLOSE_BY:
			print("CLOSE BY")

	return {
		'success': False,
		'return_code': -1,
		'return_message': 'Unknown error',
		'request': None,
		'result': None
	}
