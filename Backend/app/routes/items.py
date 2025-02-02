from fastapi import APIRouter, Request, HTTPException
from app.db import db
import datetime
router = APIRouter()

@router.get('/item')
async def fetch_items():
    print('we are active')
    return {"message": "running now"}

post_collection = db["post_collection"]
@router.post('/post_item')
async def Post_item(request:Request):
    data = await request.json()
    username = await data.get('username')
    name =  await data.get('name')
    description = await data.get('description')
    location_found = await data.get('location_found')
    image =  await data.get('image')
    whatsapp_number = await data.get('whatsapp_number')
    phone_number = await data.get('phone_number')
    poster_Id = post_collection.find_one({username:'username'})

    if not poster_Id:
        raise HTTPException(status_code=400, detail='invalid sender')
    posts = post_collection.find_one({})
    for post in posts :
        post_collection.insert_one ({
            'poster_id': poster_Id['_id'],
            'name': name,
            'description': description,
            'location_found': location_found,
            'image': image,
            'whatsapp_number': whatsapp_number,
            'phone_number': phone_number,
            'timestamp': datetime
        })

  