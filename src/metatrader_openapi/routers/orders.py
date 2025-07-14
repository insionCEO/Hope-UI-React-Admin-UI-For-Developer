from fastapi import APIRouter, HTTPException, Request, Path, Body
from typing import Any, Dict, List, Optional, Union

router = APIRouter()

# --- Pending Orders Endpoints ---
@router.get("/pending", response_model=List[Dict[str, Any]])
async def pending_all(request: Request):
    """Get all pending orders as a DataFrame.

    Input:
        None

    Response:
        List[Dict[str, Any]]: List of pending order records.
    """
    client = request.app.state.client
    try:
        df = client.order.get_all_pending_orders()
        return df.to_dict(orient="records")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/pending/symbol/{symbol}", response_model=List[Dict[str, Any]])
async def pending_by_symbol(request: Request, symbol: str = Path(..., description="Symbol name")):
    """Get pending orders filtered by symbol.

    Input:
        symbol (str): Symbol name.

    Response:
        List[Dict[str, Any]]: List of pending order records for the symbol.
    """
    client = request.app.state.client
    try:
        df = client.order.get_pending_orders_by_symbol(symbol=symbol)
        return df.to_dict(orient="records")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/pending/{id}", response_model=List[Dict[str, Any]])
async def pending_by_id(request: Request, id: Union[int, str] = Path(..., description="Order ID")):
    """Get pending order by ticket or ID.

    Input:
        id (Union[int, str]): Order ID.

    Response:
        List[Dict[str, Any]]: List of pending order records matching the ID.
    """
    client = request.app.state.client
    try:
        df = client.order.get_pending_orders_by_id(id=id)
        return df.to_dict(orient="records")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/pending/{id}", response_model=Dict[str, Any])
async def modify_pending(
    request: Request,
    id: Union[int, str] = Path(..., description="Pending order ID"),
    price: Optional[float] = Body(None, description="New price"),
    stop_loss: Optional[float] = Body(None, description="Stop loss price"),
    take_profit: Optional[float] = Body(None, description="Take profit price"),
):
    """Modifies an existing pending order's price, stop loss, or take profit.

    Input:
        id (Union[int, str]): Pending order ID.
        price (Optional[float]): New price.
        stop_loss (Optional[float]): Stop loss price.
        take_profit (Optional[float]): Take profit price.

    Response:
        Dict[str, Any]: Modified order data.
    """
    client = request.app.state.client
    try:
        return client.order.modify_pending_order(id=id, price=price, stop_loss=stop_loss, take_profit=take_profit)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/pending/{id}", response_model=Dict[str, Any])
async def cancel_pending(request: Request, id: Union[int, str] = Path(..., description="Pending order ID")):
    """Cancels a specific pending order by ID.

    Input:
        id (Union[int, str]): Pending order ID.

    Response:
        Dict[str, Any]: Cancellation result.
    """
    client = request.app.state.client
    try:
        return client.order.cancel_pending_order(id=id)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/pending", response_model=Dict[str, Any])
async def cancel_all_pending(request: Request):
    """Cancels all pending orders in your account.

    Input:
        None

    Response:
        Dict[str, Any]: Cancellation result.
    """
    client = request.app.state.client
    try:
        return client.order.cancel_all_pending_orders()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/pending/symbol/{symbol}", response_model=Dict[str, Any])
async def cancel_pending_by_symbol(request: Request, symbol: str = Path(..., description="Symbol name")):
    """Cancels all pending orders for a specific symbol.

    Input:
        symbol (str): Symbol name.

    Response:
        Dict[str, Any]: Cancellation result.
    """
    client = request.app.state.client
    try:
        return client.order.cancel_pending_orders_by_symbol(symbol=symbol)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# --- New Order Placement ---
@router.post("/market", response_model=Dict[str, Any])
async def place_market(
    request: Request,
    symbol: str = Body(..., description="Symbol name"),
    volume: float = Body(..., description="Lot size"),
    type: str = Body(..., description="Order type, 'BUY' or 'SELL'"),
    stop_loss: Optional[float] = Body(0.0, description="Stop loss price"),
    take_profit: Optional[float] = Body(0.0, description="Take profit price"),
):
    """Places a market order (BUY or SELL) for a specified financial instrument.

    Input:
        symbol (str): Symbol name.
        volume (float): Lot size.
        type (str): Order type, 'BUY' or 'SELL'.
        stop_loss (Optional[float]): Stop loss price.
        take_profit (Optional[float]): Take profit price.

    Response:
        Dict[str, Any]: Placed order data.
    """
    client = request.app.state.client
    try:
        return client.order.place_market_order(symbol=symbol, volume=volume, type=type, stop_loss=stop_loss, take_profit=take_profit)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/pending", response_model=Dict[str, Any])
async def place_pending(
    request: Request,
    symbol: str = Body(..., description="Symbol name"),
    volume: float = Body(..., description="Lot size"),
    type: str = Body(..., description="Order type, 'BUY' or 'SELL'"),
    price: float = Body(..., description="Pending order price"),
    stop_loss: Optional[float] = Body(0.0, description="Stop loss price"),
    take_profit: Optional[float] = Body(0.0, description="Take profit price"),
):
    """Place a pending order.

    Input:
        symbol (str): Symbol name.
        volume (float): Lot size.
        type (str): Order type, 'BUY' or 'SELL'.
        price (float): Pending order price.
        stop_loss (Optional[float]): Stop loss price.
        take_profit (Optional[float]): Take profit price.

    Response:
        Dict[str, Any]: Placed pending order data.
    """
    client = request.app.state.client
    try:
        return client.order.place_pending_order(symbol=symbol, volume=volume, type=type, price=price, stop_loss=stop_loss, take_profit=take_profit)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
