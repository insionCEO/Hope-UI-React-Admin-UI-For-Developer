from fastapi import APIRouter, HTTPException, Request

router = APIRouter()

@router.get("/info", response_model=dict)
async def account_info(request: Request):
    """
    Returns a dictionary with basic trade statistics: balance, equity, profit, margin level, free margin, account type, leverage, and currency.

    Input:
        None

    Response:
        dict: {
            'balance': float,
            'equity': float,
            'profit': float,
            'margin_level': float,
            'free_margin': float,
            'account_type': str,
            'leverage': int,
            'currency': str
        }
    """
    client = request.app.state.client
    try:
        return client.account.get_trade_statistics()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
