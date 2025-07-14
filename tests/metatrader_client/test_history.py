import os
import pytest
from dotenv import load_dotenv
from metatrader_client import MT5Client
import platform
import pandas as pd
from datetime import datetime, timedelta

def print_header():
    if platform.system() == "Windows":
        os.system('cls')
    else:
        os.system('clear')
    print("\n🧪 MetaTrader 5 MCP History System Full Test Suite 🧪\n")

@pytest.fixture(scope="module")
def mt5_history():
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
    history = client.history
    yield history
    print("\n🔌 Disconnecting from MetaTrader 5...")
    client.disconnect()
    print("👋 Disconnected!")

# --- Test Data ---
TODAY = datetime.now()
YESTERDAY = TODAY - timedelta(days=1)

# --- Tests ---
def test_get_deals(mt5_history):
    print("\n📋 Testing get_deals...")
    deals = mt5_history.get_deals(from_date=YESTERDAY, to_date=TODAY)
    print(f"Deals: {deals}")
    assert isinstance(deals, list)
    if deals:
        assert "ticket" in deals[0]
    print("✅ get_deals passed!")

def test_get_orders(mt5_history):
    print("\n📋 Testing get_orders...")
    orders = mt5_history.get_orders(from_date=YESTERDAY, to_date=TODAY)
    print(f"Orders: {orders}")
    assert isinstance(orders, list)
    if orders:
        assert "ticket" in orders[0]
    print("✅ get_orders passed!")

def test_get_total_deals(mt5_history):
    print("\n📊 Testing get_total_deals...")
    total = mt5_history.get_total_deals(from_date=YESTERDAY, to_date=TODAY)
    print(f"Total deals: {total}")
    assert isinstance(total, int)
    assert total >= 0
    print("✅ get_total_deals passed!")

def test_get_total_orders(mt5_history):
    print("\n📊 Testing get_total_orders...")
    total = mt5_history.get_total_orders(from_date=YESTERDAY, to_date=TODAY)
    print(f"Total orders: {total}")
    assert isinstance(total, int)
    assert total >= 0
    print("✅ get_total_orders passed!")

def test_get_deals_as_dataframe(mt5_history):
    print("\n📑 Testing get_deals_as_dataframe...")
    df = mt5_history.get_deals_as_dataframe(from_date=YESTERDAY, to_date=TODAY)
    print(df)
    assert isinstance(df, pd.DataFrame)
    print("✅ get_deals_as_dataframe passed!")

def test_get_orders_as_dataframe(mt5_history):
    print("\n📑 Testing get_orders_as_dataframe...")
    df = mt5_history.get_orders_as_dataframe(from_date=YESTERDAY, to_date=TODAY)
    print(df)
    assert isinstance(df, pd.DataFrame)
    print("✅ get_orders_as_dataframe passed!")

def test_get_deals_empty_range(mt5_history):
    print("\n🧪 Testing get_deals with empty range...")
    empty_day = datetime(2000, 1, 1)
    deals = mt5_history.get_deals(from_date=empty_day, to_date=empty_day)
    print(f"Deals (empty): {deals}")
    assert isinstance(deals, list)
    assert len(deals) == 0 or (deals and "ticket" in deals[0])
    print("✅ get_deals_empty_range passed!")

def test_get_orders_empty_range(mt5_history):
    print("\n🧪 Testing get_orders with empty range...")
    empty_day = datetime(2000, 1, 1)
    orders = mt5_history.get_orders(from_date=empty_day, to_date=empty_day)
    print(f"Orders (empty): {orders}")
    assert isinstance(orders, list)
    assert len(orders) == 0 or (orders and "ticket" in orders[0])
    print("✅ get_orders_empty_range passed!")
