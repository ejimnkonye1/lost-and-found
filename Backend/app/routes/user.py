from fastapi import APIRouter, Request, Depends,HTTPException,Cookie,Response
import bcrypt
router = APIRouter()
from app.db import db
from app.utilis.emailh import is_valid_email

import uuid 
users = db['users']
sessions = db["sessions"] 

@router.post('/register', )
async def register(request: Request, response: Response):
    
    data = await request.json()
    # print("Incoming Data:", data)
    username = data.get('username').lower()
    email = data.get('email')
    password = data.get('password')

    if not username:
        raise HTTPException (status_code=400,  detail='username  is required')
    if not email:
        raise HTTPException(status_code=400, detail='email is required')
    if not password:
        raise HTTPException(status_code=400, detail='password cannot be empty')
    if not is_valid_email(email):
        raise HTTPException (status_code=400,
            detail="invalid email format"
        )
    existing_email = await users.find_one({"email": email})
    existing_user = await users.find_one({"username": username})
    print("Query Result for username:", existing_email)
    if existing_email:
        raise HTTPException (status_code=400,
           detail= "email is already taken"
        )
    if existing_user:
        raise HTTPException (status_code=400,
          detail= 'User name is already taken'
        )
    if len(password) < 8:
        raise HTTPException ( status_code=400, detail='Password should be 8 or more characters')
    salt = bcrypt.gensalt()
    # hashed_password =  bcrypt.hashpw(password.encode('utf8'),salt)
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)
    new_user = {
        "username":username,
        "email": email,
        "password": hashed_password,
    }
    users.insert_one(new_user)
    session_Id = str(uuid.uuid4())
    response.set_cookie(key='session_id', value=session_Id, httponly=True, samesite="lax")
       
    return{
        "message": "Registration  successfully"
    }

@router.post('/login')
async def login(request: Request, response:Response):
    data = await request.json()
    # username = data.get('username').lower()
    email = data.get('email')
    password = data.get('password')

    if  not email or not password:
        raise HTTPException(status_code=400, detail='field must not be empty')
    existing_email = await users.find_one({"email":email})
    
    if not existing_email  :
        raise HTTPException(status_code=400, detail='invalid email or password')
    check_password = bcrypt.checkpw(password.encode('utf-8'), existing_email['password'])

    if not check_password :
        raise HTTPException(status_code=400, detail="password is incorrect")
     
    session_Id = str(uuid.uuid4())
    #store session
    await sessions.insert_one({'session_Id':session_Id, "email":email})
    response.set_cookie(key="session_id", value=session_Id, httponly=True, samesite='lax')

    return{
            "message":"Login succesfully",
             "email": existing_email.get("email"),
             "username": existing_email.get("username")
        }

@router.post('/logout')
async def logout(request: Request,response: Response):
    session_Id = request.cookies.get("session_Id") 

    if session_Id:
        #remove from db
        await sessions.delete_one({"session_Id":session_Id})
        #clear browser
        response.delete_cookie("session_Id")

        return{
            "message":'User Logged Out Successfully'
        }
    else:
        raise HTTPException(status_code=400, detail='no session is active')