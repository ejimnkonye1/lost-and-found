from fastapi import APIRouter

router = APIRouter()

@router.get('/item')
async def fetch_items():
    print('we are active')
    return 'running '