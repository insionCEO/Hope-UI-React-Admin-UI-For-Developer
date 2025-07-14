"""
MetaTrader 5 client main module.

This module provides a unified interface for all MT5 operations.
"""
from typing import Dict, Any, Optional, Tuple

from .client_connection import MT5Connection
from .client_order import MT5Order
from .client_account import MT5Account
from .client_market import MT5Market
from .client_history import MT5History

class MT5Client:
    """
    Main client class for MetaTrader 5 operations.
    
    Provides a unified interface for all MT5 operations including
    connection management, account information, market data,
    order execution, and history retrieval.
    """
    
    def __init__(self, config: Optional[Dict[str, Any]] = None):
        """
        Initialize the MT5 client.
        
        Args:
            config: Optional configuration dictionary with connection parameters.
                   Can include: path, login, password, server, timeout, portable
        """
        self._config = config or {}
        self._connection = MT5Connection(config)
        self.account = MT5Account(self._connection)
        self.market = MT5Market(self._connection)
        self.order = MT5Order(self._connection)
        self.history = MT5History(self._connection)
    
    # Connection methods
    
    def connect(self) -> bool:
        """
        Connect to the MetaTrader 5 terminal.
        
        If login credentials are provided in config, also performs login.
        Terminal is automatically launched if needed.
        
        Returns:
            bool: True if connection was successful.
            
        Raises:
            ConnectionError: If connection fails with specific error details.
        """
        return self._connection.connect()
    
    def disconnect(self) -> bool:
        """
        Disconnect from the MetaTrader 5 terminal.
        
        Properly shuts down the connection to release resources.
        
        Returns:
            bool: True if disconnection was successful.
        """
        return self._connection.disconnect()
    
    def is_connected(self) -> bool:
        """
        Check if connected to the MetaTrader 5 terminal.
        
        Returns:
            bool: True if connected.
        """
        return self._connection.is_connected()
    
    def get_terminal_info(self) -> Dict[str, Any]:
        """
        Get information about the connected MT5 terminal.
        
        Returns comprehensive information about the terminal including
        version, path, memory usage, etc.
        
        Returns:
            Dict[str, Any]: Terminal information.
            
        Raises:
            ConnectionError: If not connected to terminal.
        """
        return self._connection.get_terminal_info()
    
    def get_version(self) -> Tuple[int, int, int, int]:
        """
        Get the version of the connected MetaTrader 5 terminal.
        
        Returns:
            Tuple[int, int, int, int]: Version as (major, minor, build, revision).
            
        Raises:
            ConnectionError: If not connected to terminal.
        """
        return self._connection.get_version()
    
    def last_error(self) -> Tuple[int, str]:
        """
        Get the last error code and description.
        
        Returns:
            Tuple[int, str]: Error code and description.
        """
        return self._connection.last_error()