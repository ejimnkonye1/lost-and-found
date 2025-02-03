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
async def post_item(request: Request):
    data = await request.json()

    # Check if required fields are present
    required_fields = ['username', 'founder_email', 'report_title', 'report_type', 'description', 'location_found', 'whatsapp_number', 'phone_number']
    for field in required_fields:
        if field not in data:
            raise HTTPException(status_code=400, detail=f"Missing field: {field}")
    
    username = data.get('username').lower()
    email = data.get('founder_email')
    report_title = data.get('report_title')
    report_type = data.get('report_type')
    description = data.get('description')
    location_found = data.get('location_found')
    image = data.get('image')
    date = data.get('date')
    whatsapp_number = data.get('whatsapp_number')
    phone_number = data.get('phone_number')

    # Validate the user (poster)
    poster = await users.find_one({'username': username})

    if not poster:
        raise HTTPException(status_code=400, detail='Invalid sender')

    new_post = {
        'poster_name': username,
        'report_title': report_title,
        'report_type': report_type,
        'description': description,
        'location_found': location_found,
        'image': image,
        'whatsapp_number': whatsapp_number,
        'phone_number': phone_number,
        'date': date,
        'founder_email': email,
       
    }

    # Insert the new post into the database
    try:
        await post_collection.insert_one(new_post)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error inserting post: {str(e)}")
    
    return {'message': 'Post successfully created'}
