from fastapi import APIRouter, HTTPException, Request, Path, Body
from typing import Any, Dict, List, Optional, Union

router = APIRouter()

@router.get("", response_model=List[Dict[str, Any]])
async def positions_all(request: Request):
    """Get all open positions as a DataFrame."""
    client = request.app.state.client
    try:
        df = client.order.get_all_positions()
        return df.to_dict(orient="records")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/symbol/{symbol}", response_model=List[Dict[str, Any]])
async def positions_by_symbol(request: Request, symbol: str = Path(..., description="Symbol name")):
    """Get positions filtered by symbol."""
    client = request.app.state.client
    try:
        df = client.order.get_positions_by_symbol(symbol=symbol)
        return df.to_dict(orient="records")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{id}", response_model=List[Dict[str, Any]])
async def positions_by_id(request: Request, id: Union[int, str] = Path(..., description="Position ID")):
    """Get position by ticket or ID."""
    client = request.app.state.client
    try:
        df = client.order.get_positions_by_id(id=id)
        return df.to_dict(orient="records")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/{id}", response_model=Dict[str, Any])
async def modify_position(
    request: Request,
    id: Union[int, str] = Path(..., description="Position ID"),
    stop_loss: Optional[float] = Body(None, description="Stop loss price"),
    take_profit: Optional[float] = Body(None, description="Take profit price"),
):
    """Modify stop loss/take profit of a position."""
    client = request.app.state.client
    try:
        return client.order.modify_position(id=id, stop_loss=stop_loss, take_profit=take_profit)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/profitable", response_model=Dict[str, Any])
async def close_profitable_positions(request: Request):
    """Close all profitable positions. No input parameters required."""
    client = request.app.state.client
    try:
        return client.order.close_all_profitable_positions()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/losing", response_model=Dict[str, Any])
async def close_losing_positions(request: Request):
    """Close all losing positions. No input parameters required."""
    client = request.app.state.client
    try:
        return client.order.close_all_losing_positions()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/{id}", response_model=Dict[str, Any])
async def close_position(request: Request, id: Union[int, str] = Path(..., description="Position ID")):
    """Closes a specific position by its ID."""
    client = request.app.state.client
    try:
        return client.order.close_position(id=id)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("", response_model=Dict[str, Any])
async def close_all_positions(request: Request):
    """Close all open positions. No input parameters required."""
    client = request.app.state.client
    try:
        return client.order.close_all_positions()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/symbol/{symbol}", response_model=Dict[str, Any])
async def close_positions_by_symbol(request: Request, symbol: str = Path(..., description="Symbol name")):
    """Close all positions for a symbol."""
    client = request.app.state.client
    try:
        return client.order.close_all_positions_by_symbol(symbol=symbol)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

