from pandas import DataFrame
from .get_pending_orders import get_pending_orders

def get_all_pending_orders(connection) -> DataFrame:
	"""
	Get all pending orders.

	Args:
		connection: The connection object to the MetaTrader platform.

	Returns:
		A DataFrame containing all pending orders, ordered by time (descending).
	"""
	return get_pending_orders(connection)