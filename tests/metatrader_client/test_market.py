import os
import pytest
from dotenv import load_dotenv
from metatrader_client import MT5Client
from metatrader_client.client_market import MT5Market
import platform
import pandas as pd

def print_header():
    if platform.system() == "Windows":
        os.system('cls')
    else:
        os.system('clear')
    print("\n🧪 MetaTrader 5 MCP Market System Full Test Suite 🧪\n")

@pytest.fixture(scope="module")
def mt5_market():
    print_header()
    print("🔑 Loading credentials and connecting to MetaTrader 5...")
    load_dotenv()
    login = os.getenv("LOGIN")
    password = os.getenv("PASSWORD")
    server = os.getenv("SERVER")
    if not login or not password or not server:
        print("❌ Error: Missing required environment variables!")
        print("Please create a .env file with LOGIN, PASSWORD, and SERVER variables.")
        pytest.skip("Missing environment variables for MetaTrader 5 connection")
    config = {
        "login": int(login),
        "password": password,
        "server": server
    }
    client = MT5Client(config)
    client.connect()
    print("✅ Connected!\n")
    market = client.market
    yield market
    print("\n🔌 Disconnecting from MetaTrader 5...")
    client.disconnect()
    print("👋 Disconnected!")

# --- Test Data ---
TEST_SYMBOL = os.getenv("TEST_SYMBOL", "EURUSD")
TEST_TIMEFRAME = os.getenv("TEST_TIMEFRAME", "M1")

# --- Tests ---
def test_get_symbols(mt5_market):
    print("\n📋 Testing get_symbols...")
    symbols = mt5_market.get_symbols()
    print(f"Symbols: {symbols[:5]} ... (total: {len(symbols)}) 📝")
    assert isinstance(symbols, list)
    assert TEST_SYMBOL in symbols
    print("✅ get_symbols passed!")

def test_get_symbols_group(mt5_market):
    print("\n📋 Testing get_symbols with group...")
    group = "forex"
    symbols = mt5_market.get_symbols(group)
    print(f"Forex group symbols: {symbols[:5]} ...")
    assert isinstance(symbols, list)
    print("✅ get_symbols_group passed!")

def test_get_symbol_info(mt5_market):
    print("\n🔎 Testing get_symbol_info...")
    info = mt5_market.get_symbol_info(TEST_SYMBOL)
    print(f"Symbol info for {TEST_SYMBOL}: {info}")
    assert isinstance(info, dict)
    assert "name" in info
    assert info["name"] == TEST_SYMBOL
    print("✅ get_symbol_info passed!")

def test_get_symbol_info_invalid(mt5_market):
    print("\n❌ Testing get_symbol_info with invalid symbol...")
    with pytest.raises(Exception):
        mt5_market.get_symbol_info("INVALID_SYMBOL")
    print("✅ get_symbol_info_invalid passed!")

def test_get_symbol_price(mt5_market):
    price = mt5_market.get_symbol_price(TEST_SYMBOL)
    print(f"Price for {TEST_SYMBOL}: {price}")
    assert isinstance(price, dict)
    assert "bid" in price and "ask" in price
    assert price["bid"] > 0 and price["ask"] > 0

def test_get_symbol_price_invalid(mt5_market):
    with pytest.raises(Exception):
        mt5_market.get_symbol_price("INVALID_SYMBOL")

def test_get_candles_latest(mt5_market):
    candles = mt5_market.get_candles_latest(TEST_SYMBOL, TEST_TIMEFRAME, count=10)
    print(f"Latest candles for {TEST_SYMBOL} ({TEST_TIMEFRAME}):\n{candles}")
    assert isinstance(candles, pd.DataFrame)
    assert not candles.empty
    assert len(candles) == 10

def test_get_candles_by_date(mt5_market):
    # Use a recent date range (last 2 days)
    from datetime import datetime, timedelta
    to_date = datetime.now().strftime("%Y-%m-%d")
    from_date = (datetime.now() - timedelta(days=2)).strftime("%Y-%m-%d")
    candles = mt5_market.get_candles_by_date(TEST_SYMBOL, TEST_TIMEFRAME, from_date, to_date)
    print(f"Candles from {from_date} to {to_date} for {TEST_SYMBOL}:\n{candles}")
    assert isinstance(candles, pd.DataFrame)
    assert not candles.empty

def test_get_candles_invalid_symbol(mt5_market):
    with pytest.raises(Exception):
        mt5_market.get_candles_latest("INVALID_SYMBOL", TEST_TIMEFRAME, count=5)

def test_get_candles_invalid_timeframe(mt5_market):
    with pytest.raises(Exception):
        mt5_market.get_candles_latest(TEST_SYMBOL, "INVALID_TF", count=5)
