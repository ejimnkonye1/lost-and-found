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
    email = data.get('email')
    report_title =   data.get('report_title')
    report_type =   data.get('report_type')
    description =  data.get('description')
    location_found =  data.get('location_found')
    image =  data.get('image')
    date = data.get('date')
    whatsapp_number =  data.get('whatsapp_number')
    phone_number =  data.get('phone_number')
    poster =  await users.find_one({'username':username, })

    if not poster:
        raise HTTPException(status_code=400, detail='invalid sender')
    
    newpost = {
            'poster_name': username,
            'report_title': report_title,
             'report_type': report_type,
            'description': description,
            'location_found': location_found,
            'image': image,
            'whatsapp_number': whatsapp_number,
            'phone_number': phone_number,
             'date': date,
             'email':  email,
            'timestamp': datetime.datetime.now()
        }

    await post_collection.insert_one(newpost)
    
    return({
        'message': 'posted successfully'
    })