# pylint: disable=import-error
from fastapi import APIRouter
from .accounts import router as accounts_router
from .history import router as history_router
from .market import router as market_router
from .orders import router as orders_router
from .positions import router as positions_router

router = APIRouter()


# Include endpoints
router.include_router(accounts_router, prefix="/account", tags=["accounts"])
router.include_router(history_router, prefix="/history", tags=["history"])
router.include_router(market_router, prefix="/market", tags=["market"])
router.include_router(orders_router, prefix="/order", tags=["orders"])
router.include_router(positions_router, prefix="/positions", tags=["positions"])
