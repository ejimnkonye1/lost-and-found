from fastapi import APIRouter, Request, HTTPException
from app.db import db
import datetime
from app.routes.user import users
router = APIRouter()

@router.get('/item')
async def fetch_items():
    print('we are active')
    return {"message": "running now"}

post_collection = db["post_collection"]
@router.post('/post_item')
async def Post_item(request:Request):
    data = await request.json()
    username =  data.get('username').lower()
    name =   data.get('name')
    description =  data.get('description')
    location_found =  data.get('location_found')
    image =  data.get('image')
    whatsapp_number =  data.get('whatsapp_number')
    phone_number =  data.get('phone_number')
    poster =  await users.find_one({'username':username})

    if not poster:
        raise HTTPException(status_code=400, detail='invalid sender')
    
    newpost = {
            'poster_name': username,
            'name': name,
            'description': description,
            'location_found': location_found,
            'image': image,
            'whatsapp_number': whatsapp_number,
            'phone_number': phone_number,
            'timestamp': datetime.datetime.now()
        }

    await post_collection.insert_one(newpost)
    
    return({
        'message': 'posted successfully'
    })