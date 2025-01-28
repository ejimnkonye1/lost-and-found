from fastapi import APIRouter, Request, Depends,HTTPException,Cookie,Response
import bcrypt
router = APIRouter()
from app import db
from app.utilis import emailh
users = db['users']

@router.get('/register', method=["POST"])
async def register(request: Request):
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return ({'error':'username , email and password is required'})

    if not email:
        return({
            "error":'email cannot be empty'
        })
    if not emailh(email):
        return({
            "error":"invalid email format"
        })
    if email in users:
        return({
            "error":"email is already taken"
        })
    if username in user:
        return({
          'error':  'User name is already taken'
        })
    if len(password) < 8:
        return({'error':'password should be more 8 or more'})
    salt = bcrypt.gensalt
    hased_password =  bcrypt.hashpw(password,salt)
    
    users.insert_one({
        "username":username,
        "email": email,
        "password": hased_password,
    })
    user = users.find_one({
        'username':username
    })
    session_Id = str()
    # session[session_Id] = user['usersname']
    # session[session_Id] = user['email']
    # session[session_Id] = user['password']
    return({
        "message": "Logged in successfully"
    })

