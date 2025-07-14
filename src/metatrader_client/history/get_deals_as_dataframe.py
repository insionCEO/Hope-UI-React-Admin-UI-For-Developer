from typing import Optional
from datetime import datetime
import pandas as pd
import logging
from .get_deals import get_deals
from ..exceptions import DealsHistoryError

logger = logging.getLogger("MT5History")

def get_deals_as_dataframe(
    connection,
    from_date: Optional[datetime] = None,
    to_date: Optional[datetime] = None,
    group: Optional[str] = None
) -> pd.DataFrame:
    """
    Get historical deals as a pandas DataFrame.
    """

    try:
        deals = get_deals(connection, from_date, to_date, group)
        if not deals:
            logger.info("No deals found, returning empty DataFrame.")
            return pd.DataFrame()
        df = pd.DataFrame(deals)
        if 'time' in df.columns:
            df['time'] = pd.to_datetime(df['time'], unit='s')
            df.set_index('time', inplace=True)
        logger.debug(f"Created DataFrame with {len(df)} deals.")
        return df
    except DealsHistoryError:
        raise
    except Exception as e:
        msg = f"Error creating DataFrame from deals: {str(e)}"
        logger.error(msg)
        raise DealsHistoryError(msg)
