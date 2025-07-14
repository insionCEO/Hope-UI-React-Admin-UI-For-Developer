from pandas import DataFrame
from .get_positions import get_positions

def get_positions_by_currency(connection, currency: str) -> DataFrame:
	"""
	Get all open positions for a specific currency.

	Args:
		connection: The connection object to the MetaTrader platform.
		currency: The currency to be filtered.

	Returns:
		A DataFrame containing all open positions for the given currency,
		ordered by time (descending).
	"""
	currency_filter = f"*{currency}*"
	return get_positions(connection, group=currency_filter)