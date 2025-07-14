from typing import Optional
from datetime import datetime, timedelta
import logging

try:
    import MetaTrader5 as mt5
except ImportError:
    raise ImportError("MetaTrader5 package is not installed. Please install it with: pip install MetaTrader5")

from ..exceptions import DealsHistoryError, ConnectionError

logger = logging.getLogger("MT5History")

def get_total_deals(
    connection,
    from_date: Optional[datetime] = None,
    to_date: Optional[datetime] = None
) -> int:
    """
    Get total number of deals in history.
    """
    if not connection.is_connected():
        raise ConnectionError("Not connected to MetaTrader 5 terminal.")
    logger.debug(f"Retrieving total deals count with parameters: from_date={from_date}, to_date={to_date}")
    if from_date is None:
        from_date = datetime.now() - timedelta(days=30)
    if to_date is None:
        to_date = datetime.now()
    total = mt5.history_deals_total(from_date, to_date)
    if total is None:
        error = mt5.last_error()
        msg = f"Failed to retrieve deals count: {error[1]}"
        logger.error(msg)
        raise DealsHistoryError(msg, error[0])
    logger.debug(f"Retrieved total deals count: {total}")
    return total
