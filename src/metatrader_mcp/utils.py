from typing import Any, Optional, Union
from metatrader_client import client

def init(
	login: Optional[Union[str, int]],
	password: Optional[str],
	server: Optional[str],
) -> Optional[client.MT5Client]:
	"""
	Initialize MT5Client

	Args:
		login (Optional[Union[str, int]]): Login ID
		password (Optional[str]): Password
		server (Optional[str]): Server name

	Returns:
		Optional[client.MT5Client]: MT5Client instance if all parameters are provided, None otherwise
	"""
	
	if login and password and server:
		mt5_client = client.MT5Client(config={
			"login": int(login),
			"password": password,
			"server": server,
		})
		mt5_client.connect()
		return mt5_client

	return None
	
def get_client(ctx: Any) -> Optional[client.MT5Client]:
	return ctx.request_context.lifespan_context.client