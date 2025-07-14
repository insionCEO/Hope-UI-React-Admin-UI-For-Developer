from typing import Dict, Any, List, Optional
from datetime import datetime, timedelta
import logging
import MetaTrader5 as mt5  # type: ignore
# pylint: disable=no-member
from ..exceptions import OrdersHistoryError, ConnectionError

logger = logging.getLogger("MT5History")

def get_orders(
    connection,
    from_date: Optional[str] = None,
    to_date: Optional[str] = None,
    group: Optional[str] = None
) -> List[Dict[str, Any]]:
        """
        Get historical orders.
        """
        if not connection.is_connected():
                raise ConnectionError("Not connected to MetaTrader 5 terminal.")
        orders = None
        logger.debug(f"Retrieving orders with parameters: from_date={from_date}, to_date={to_date}, group={group}")
        try:
            if from_date is None:
                from_date = datetime.now() - timedelta(days=30)
            else:
                from_date = datetime.strptime(from_date, '%Y-%m-%d')
        
            if to_date is None:
                to_date = datetime.now()
            else:
                to_date = datetime.strptime(to_date, '%Y-%m-%d')
            if group is not None:
                orders = mt5.history_orders_get(from_date, to_date, group=group)
            else:
                    orders = mt5.history_orders_get(from_date, to_date)
        except Exception as e:
                error_code = -1
                if hasattr(mt5, 'last_error'):
                        error = mt5.last_error()
                        if error and len(error) > 1:
                                error_code = error[0]
                msg = f"Failed to retrieve orders history: {str(e)}"
                logger.error(msg)
                raise OrdersHistoryError(msg, error_code)
        if orders is None:
                error = mt5.last_error()
                msg = f"Failed to retrieve orders history: {error[1]}"
                logger.error(msg)
                raise OrdersHistoryError(msg, error[0])
        if len(orders) == 0:
                logger.info("No orders found with the specified parameters.")
                return []
        result = [order._asdict() for order in orders]
        logger.debug(f"Retrieved {len(result)} orders.")
        return result
