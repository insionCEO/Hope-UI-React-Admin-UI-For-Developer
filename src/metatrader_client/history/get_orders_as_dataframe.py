from typing import Optional
import pandas as pd
import logging
from .get_orders import get_orders
from ..exceptions import OrdersHistoryError

logger = logging.getLogger("MT5History")

def get_orders_as_dataframe(
    connection,
    from_date: Optional[str] = None,
    to_date: Optional[str] = None,
    group: Optional[str] = None
) -> pd.DataFrame:
    """
    Get historical orders as a pandas DataFrame.
    """
    try:
        orders = get_orders(connection, from_date, to_date, group)
        if not orders:
            logger.info("No orders found, returning empty DataFrame.")
            return pd.DataFrame()
        df = pd.DataFrame(orders)
        for col in ['time_setup', 'time_done', 'time_expiration']:
            if col in df.columns:
                df[col] = pd.to_datetime(df[col], unit='s')
        if 'time_setup' in df.columns:
            df.set_index('time_setup', inplace=True)
        logger.debug(f"Created DataFrame with {len(df)} orders.")
        return df
    except OrdersHistoryError:
        raise
    except Exception as e:
        msg = f"Error creating DataFrame from orders: {str(e)}"
        logger.error(msg)
        raise OrdersHistoryError(msg)
