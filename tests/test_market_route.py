import sys, os
# Add src to path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir, "src")))

import pytest
from fastapi.testclient import TestClient
from datetime import datetime # Make sure datetime is imported
import pandas as pd # Import pandas for creating a sample DataFrame
from unittest.mock import MagicMock, patch

from metatrader_openapi.main import app # Your FastAPI app
from metatrader_client.exceptions import ConnectionError as MT5ConnectionError # Import custom exception

@pytest.fixture
def mock_market_client_methods(monkeypatch):
    # Mock for client.market.get_symbol_info
    mock_get_info = MagicMock()
    monkeypatch.setattr("metatrader_openapi.routers.market.client.market.get_symbol_info", mock_get_info)
    
    # Mock for client.market.get_candles_by_date (will be used in next plan step)
    mock_get_candles = MagicMock()
    monkeypatch.setattr("metatrader_openapi.routers.market.client.market.get_candles_by_date", mock_get_candles)
    
    return mock_get_info, mock_get_candles # Return both mocks

def test_get_symbol_info_success(mock_market_client_methods):
    mock_get_info, _ = mock_market_client_methods # Unpack the relevant mock

    symbol_name = "EURUSD"
    # This is a simplified example of what symbol_info might return (client directly returns dict)
    sample_symbol_info = {
        "name": symbol_name,
        "description": "Euro vs US Dollar",
        "currency_base": "EUR",
        "currency_profit": "USD",
        "digits": 5,
        "spread": 10, # Example value
        "volume_min": 0.01,
        "volume_max": 1000.0,
        "trade_mode_description": "Full access", # Example, actual fields may vary
        "visible": True
        # Add other fields as expected from the actual client.market.get_symbol_info()
    }
    mock_get_info.return_value = sample_symbol_info

    with TestClient(app) as api_client:
        # Assuming the market router is prefixed with /market in main.py under /api/v1
        response = api_client.get(f"/api/v1/market/symbol/info/{symbol_name}")

    assert response.status_code == 200, response.text
    assert response.json() == sample_symbol_info
    mock_get_info.assert_called_once_with(symbol_name=symbol_name)

def test_get_symbol_info_not_found(mock_market_client_methods):
    mock_get_info, _ = mock_market_client_methods

    symbol_name = "UNKNOWN_SYMBOL"
    mock_get_info.return_value = None # Simulate client returning None for not found

    with TestClient(app) as api_client:
        response = api_client.get(f"/api/v1/market/symbol/info/{symbol_name}")

    assert response.status_code == 404, response.text
    assert response.json() == {"detail": f"Symbol {symbol_name} not found or no info available."}
    mock_get_info.assert_called_once_with(symbol_name=symbol_name)
    
def test_get_symbol_info_connection_error(mock_market_client_methods):
    mock_get_info, _ = mock_market_client_methods

    symbol_name = "EURUSD"
    mock_get_info.side_effect = MT5ConnectionError("Test connection error")

    with TestClient(app) as api_client:
        response = api_client.get(f"/api/v1/market/symbol/info/{symbol_name}")

    assert response.status_code == 503, response.text # As defined in the router
    # The actual message might be wrapped by the router's error handler
    response_json = response.json()
    assert "detail" in response_json
    assert "Test connection error" in response_json["detail"]
    # The router also adds: f"An error occurred while fetching info for {symbol_name}: "
    # So, a more precise check could be:
    # assert response_json["detail"] == f"An error occurred while fetching info for {symbol_name}: Test connection error"
    # However, the problem description implies the router uses `str(e)` for MT5ConnectionError,
    # which would just be "Test connection error" for the detail. Let's stick to the simpler check.
    mock_get_info.assert_called_once_with(symbol_name=symbol_name)

# Placeholder for tests for /candles/date to be added in the next step
# def test_get_candles_by_date_success(mock_market_client_methods):
#     pass
#
# def test_get_candles_by_date_invalid_params(mock_market_client_methods):
#     pass
#
# def test_get_candles_by_date_no_data(mock_market_client_methods):
#     pass
#
# def test_get_candles_by_date_connection_error(mock_market_client_methods):
#     pass

def test_get_candles_by_date_success(mock_market_client_methods):
    _, mock_get_candles = mock_market_client_methods # Unpack the relevant mock

    symbol_name = "EURUSD"
    timeframe = "H1"
    date_from_str = "2023-01-01T00:00:00"
    date_to_str = "2023-01-01T05:00:00"
    
    # Construct expected datetime objects as FastAPI will pass to client
    date_from_dt = datetime.fromisoformat(date_from_str)
    date_to_dt = datetime.fromisoformat(date_to_str)

    # Re-create DataFrame with actual datetime objects for 'time' for accurate mock
    sample_candles_df_data = [
        {'time': datetime(2023, 1, 1, 0, 0), 'open': 1.1, 'high': 1.105, 'low': 1.095, 'close': 1.102, 'tick_volume': 100, 'spread': 5, 'real_volume': 1000},
        {'time': datetime(2023, 1, 1, 1, 0), 'open': 1.102, 'high': 1.108, 'low': 1.100, 'close': 1.107, 'tick_volume': 120, 'spread': 5, 'real_volume': 1200}
    ]
    mock_get_candles.return_value = pd.DataFrame(sample_candles_df_data)
    
    expected_response_data = [
        {'time': '2023-01-01T00:00:00', 'open': 1.1, 'high': 1.105, 'low': 1.095, 'close': 1.102, 'tick_volume': 100, 'spread': 5, 'real_volume': 1000},
        {'time': '2023-01-01T01:00:00', 'open': 1.102, 'high': 1.108, 'low': 1.100, 'close': 1.107, 'tick_volume': 120, 'spread': 5, 'real_volume': 1200}
    ]

    with TestClient(app) as api_client:
        response = api_client.get(
            f"/api/v1/market/candles/date?symbol_name={symbol_name}&timeframe={timeframe}&date_from={date_from_str}&date_to={date_to_str}"
        )

    assert response.status_code == 200, response.text
    assert response.json() == expected_response_data
    mock_get_candles.assert_called_once_with(
        symbol_name=symbol_name,
        timeframe=timeframe,
        date_from=date_from_dt, 
        date_to=date_to_dt     
    )

def test_get_candles_by_date_no_data(mock_market_client_methods):
    _, mock_get_candles = mock_market_client_methods

    symbol_name = "EURUSD"
    timeframe = "M5"
    date_from_str = "2023-02-01T00:00:00"
    date_to_str = "2023-02-01T01:00:00"
    date_from_dt = datetime.fromisoformat(date_from_str)
    date_to_dt = datetime.fromisoformat(date_to_str)

    mock_get_candles.return_value = pd.DataFrame() # Empty DataFrame

    with TestClient(app) as api_client:
        response = api_client.get(
            f"/api/v1/market/candles/date?symbol_name={symbol_name}&timeframe={timeframe}&date_from={date_from_str}&date_to={date_to_str}"
        )

    assert response.status_code == 200, response.text
    assert response.json() == [] # Expect an empty list
    mock_get_candles.assert_called_once_with(
        symbol_name=symbol_name,
        timeframe=timeframe,
        date_from=date_from_dt,
        date_to=date_to_dt
    )

def test_get_candles_by_date_value_error(mock_market_client_methods):
    _, mock_get_candles = mock_market_client_methods

    symbol_name = "EURUSD"
    timeframe = "H1"
    date_from_str = "2023-01-01T00:00:00"
    date_to_str = "2022-01-01T00:00:00" # date_to before date_from
    date_from_dt = datetime.fromisoformat(date_from_str)
    date_to_dt = datetime.fromisoformat(date_to_str)

    mock_get_candles.side_effect = ValueError("Test ValueError: date_to cannot be before date_from")

    with TestClient(app) as api_client:
        response = api_client.get(
            f"/api/v1/market/candles/date?symbol_name={symbol_name}&timeframe={timeframe}&date_from={date_from_str}&date_to={date_to_str}"
        )

    assert response.status_code == 400, response.text # As defined in the router
    assert "Test ValueError: date_to cannot be before date_from" in response.json()["detail"]
    mock_get_candles.assert_called_once_with(
        symbol_name=symbol_name,
        timeframe=timeframe,
        date_from=date_from_dt,
        date_to=date_to_dt
    )

def test_get_candles_by_date_connection_error(mock_market_client_methods):
    _, mock_get_candles = mock_market_client_methods
    
    symbol_name = "EURUSD"
    timeframe = "H1"
    date_from_str = "2023-01-01T00:00:00"
    date_to_str = "2023-01-02T00:00:00"
    date_from_dt = datetime.fromisoformat(date_from_str)
    date_to_dt = datetime.fromisoformat(date_to_str)

    mock_get_candles.side_effect = MT5ConnectionError("Test connection error for candles")

    with TestClient(app) as api_client:
        response = api_client.get(
            f"/api/v1/market/candles/date?symbol_name={symbol_name}&timeframe={timeframe}&date_from={date_from_str}&date_to={date_to_str}"
        )
    
    assert response.status_code == 503, response.text
    assert "Test connection error for candles" in response.json()["detail"]
    mock_get_candles.assert_called_once_with(
        symbol_name=symbol_name,
        timeframe=timeframe,
        date_from=date_from_dt,
        date_to=date_to_dt
    )
