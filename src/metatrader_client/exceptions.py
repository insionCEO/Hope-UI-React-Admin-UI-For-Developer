"""
Custom exceptions for the MetaTrader 5 client.

This module defines all custom exceptions used in the MetaTrader 5 client.
"""


class MT5ClientError(Exception):
    """Base exception for all MetaTrader 5 client errors."""
    
    def __init__(self, message: str, error_code: int = 0):
        """
        Initialize the exception.
        
        Args:
            message: Error message.
            error_code: MetaTrader 5 error code (if applicable).
        """
        self.error_code = error_code
        self.message = message
        super().__init__(f"{message} (Error code: {error_code})" if error_code else message)


class ConnectionError(MT5ClientError):
    """Exception raised for connection-related errors."""
    pass


class InitializationError(ConnectionError):
    """Exception raised when initialization of the terminal fails."""
    pass


class LoginError(ConnectionError):
    """Exception raised when login to the trading account fails."""
    pass


class DisconnectionError(ConnectionError):
    """Exception raised when disconnection from the terminal fails."""
    pass


class AccountError(MT5ClientError):
    """Exception raised for account-related errors."""
    pass


class AccountInfoError(AccountError):
    """Exception raised when account information cannot be retrieved."""
    pass


class TradingNotAllowedError(AccountError):
    """Exception raised when trading is not allowed on the account."""
    pass


class MarginLevelError(AccountError):
    """Exception raised when margin level is too low for operations."""
    pass


class MarketError(MT5ClientError):
    """Exception raised for market data-related errors."""
    pass


class SymbolError(MarketError):
    """Exception raised for symbol-related errors."""
    pass


class SymbolNotFoundError(SymbolError):
    """Exception raised when a symbol is not found."""
    pass


class InvalidTimeframeError(MarketError):
    """Exception raised when an invalid timeframe is provided."""
    pass


class MarketDataError(MarketError):
    """Exception raised when market data cannot be retrieved."""
    pass


class PriceError(MarketError):
    """Exception raised when price data cannot be retrieved."""
    pass


class HistoryDataError(MarketError):
    """Exception raised when historical data cannot be retrieved."""
    pass


class OrderError(MT5ClientError):
    """Exception raised for order-related errors."""
    pass


class OrderExecutionError(OrderError):
    """Exception raised when order execution fails."""
    pass


class OrderModificationError(OrderError):
    """Exception raised when order modification fails."""
    pass


class OrderCancellationError(OrderError):
    """Exception raised when order cancellation fails."""
    pass


class PositionError(MT5ClientError):
    """Exception raised for position-related errors."""
    pass


class PositionModificationError(PositionError):
    """Exception raised when position modification fails."""
    pass


class PositionCloseError(PositionError):
    """Exception raised when position closing fails."""
    pass


class HistoryError(MT5ClientError):
    """Exception raised for history-related errors."""
    pass


class DealsHistoryError(HistoryError):
    """Exception raised when deals history cannot be retrieved."""
    pass


class OrdersHistoryError(HistoryError):
    """Exception raised when orders history cannot be retrieved."""
    pass


class StatisticsError(HistoryError):
    """Exception raised when trading statistics cannot be retrieved."""
    pass


class CalculationError(MT5ClientError):
    """Exception raised for calculation-related errors."""
    pass


class MarginCalculationError(CalculationError):
    """Exception raised when margin calculation fails."""
    pass


class ProfitCalculationError(CalculationError):
    """Exception raised when profit calculation fails."""
    pass


class TimeoutError(MT5ClientError):
    """Exception raised when an operation times out."""
    pass


class PermissionError(MT5ClientError):
    """Exception raised when an operation is not permitted."""
    pass


class InvalidParameterError(MT5ClientError):
    """Exception raised when an invalid parameter is provided."""
    pass


class ServerError(MT5ClientError):
    """Exception raised for server-related errors."""
    pass
