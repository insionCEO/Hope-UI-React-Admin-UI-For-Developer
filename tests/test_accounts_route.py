import sys, os
# Add src to path to import metatrader_openapi
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir, "src")))

import pytest
from fastapi.testclient import TestClient
from metatrader_openapi.main import app
import metatrader_openapi.main as main_module

class DummyAccount:
    def get_trade_statistics(self):
        return {"balance": 1234.56, "equity": 1234.56, "profit": 0.0}

class DummyClient:
    account = DummyAccount()
    def disconnect(self):
        pass

@pytest.fixture(autouse=True)
def stub_lifespan(monkeypatch):
    # Stub out dotenv loading and MT5 client init
    monkeypatch.setattr(main_module, "load_dotenv", lambda: None)
    monkeypatch.setattr(main_module, "init", lambda login, password, server: DummyClient())
    yield

def test_account_info():
    with TestClient(app) as client:
        response = client.get("/api/v1/accounts/info")
    assert response.status_code == 200
    assert response.json() == {"balance": 1234.56, "equity": 1234.56, "profit": 0.0}
