import os
import pytest
from dotenv import load_dotenv
from metatrader_client.client_connection import MT5Connection, ConnectionError, LoginError, InitializationError
import platform

@pytest.fixture(scope="module")
def connection_config():
    # Clear console for pretty output
    if platform.system() == "Windows":
        os.system('cls')
    else:
        os.system('clear')
    print("\n🧪 MetaTrader 5 MCP Connection Test Suite 🧪\n")
    print("🔑 Loading credentials and preparing connection config...")
    load_dotenv()
    login = os.getenv("LOGIN")
    password = os.getenv("PASSWORD")
    server = os.getenv("SERVER")
    path = os.getenv("TERMINAL_PATH", None)
    if not login or not password or not server:
        print("❌ Error: Missing required environment variables!")
        print("Please create a .env file with LOGIN, PASSWORD, and SERVER variables.")
        pytest.skip("Missing environment variables for MetaTrader 5 connection")
    config = {
        "login": int(login),
        "password": password,
        "server": server,
    }
    if path:
        config["path"] = path
    return config

@pytest.fixture(scope="function")
def mt5_connection(connection_config):
    conn = MT5Connection(connection_config)
    yield conn
    if conn.is_connected():
        conn.disconnect()


def test_successful_connection(mt5_connection):
    print("\n🚦 Testing successful connection...")
    assert not mt5_connection.is_connected(), "Should not be connected initially."
    assert mt5_connection.connect() is True, "Connection should succeed."
    assert mt5_connection.is_connected() is True, "Should be connected after connect()."
    print("✅ Connected successfully!")
    mt5_connection.disconnect()
    assert not mt5_connection.is_connected(), "Should be disconnected after disconnect()."
    print("👋 Disconnected successfully!")


def test_duplicate_connection_handling(mt5_connection):
    print("\n🔄 Testing duplicate connection handling...")
    mt5_connection.connect()
    assert mt5_connection.is_connected() is True
    # Attempt to connect again
    assert mt5_connection.connect() is True
    assert mt5_connection.is_connected() is True
    mt5_connection.disconnect()
    print("✅ Duplicate connection handled gracefully!")


def test_terminal_info_and_version(mt5_connection):
    print("\nℹ️ Testing terminal info and version retrieval...")
    mt5_connection.connect()
    info = mt5_connection.get_terminal_info()
    version = mt5_connection.get_version()
    assert info is not None, "Terminal info should not be None."
    assert isinstance(version, tuple) and len(version) == 4, "Version should be a tuple of length 4."
    mt5_connection.disconnect()
    print(f"✅ Terminal info: {info}\n✅ Version: {version}")


def test_double_disconnection_handling(mt5_connection):
    print("\n🔌 Testing double disconnection handling...")
    mt5_connection.connect()
    mt5_connection.disconnect()
    # Attempt to disconnect again
    mt5_connection.disconnect()
    assert not mt5_connection.is_connected(), "Should remain disconnected."
    print("✅ Double disconnection handled gracefully!")


def test_error_handling_invalid_credentials(connection_config):
    print("\n❌ Testing error handling with invalid credentials...")
    bad_config = connection_config.copy()
    bad_config["login"] = 0  # Invalid login
    bad_config["password"] = "wrongpassword"
    bad_conn = MT5Connection(bad_config)
    with pytest.raises((LoginError, ConnectionError)):
        bad_conn.connect()
    assert not bad_conn.is_connected(), "Should not be connected with invalid credentials."
    print("✅ Properly handled invalid credentials!")


def test_error_handling_invalid_terminal_path(connection_config):
    print("\n❌ Testing error handling with invalid terminal path...")
    bad_config = connection_config.copy()
    bad_config["path"] = "C:/nonexistent/path/terminal.exe"
    bad_conn = MT5Connection(bad_config)
    with pytest.raises((InitializationError, ConnectionError)):
        bad_conn.connect()
    print("✅ Properly handled invalid terminal path!")


def test_cooldown_logic(mt5_connection):
    print("\n⏳ Testing cooldown logic...")
    mt5_connection.connect()
    import time
    start = time.time()
    mt5_connection.disconnect()
    mt5_connection.connect()  # Should enforce cooldown if implemented
    elapsed = time.time() - start
    assert mt5_connection.is_connected() is True
    mt5_connection.disconnect()
    print(f"✅ Cooldown logic tested (elapsed: {elapsed:.2f}s)")
