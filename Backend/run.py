from app import db
from fastapi import FastAPI,Depends
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
app = FastAPI()
from app.routes.items import router as item_router
from app.routes.user import router as users_router
from app.db import ping_db
import asyncio
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5177"],  # React frontend
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)
# app.include_router(item_router, prefix='/api/item')
app.include_router(item_router, prefix='/api')
app.include_router(users_router, prefix="/api/users")

@app.on_event('startup')
async def startup_db():
   await ping_db()

@app.on_event('shutdown')
async def shutdown():
   print('server is shutting down')

# Define a route for the root URL
@app.get("/")
async def read_root():
    return {"message": "Hello, World!"}

for route in app.routes:
    print(route.path, route.methods)

if __name__ == "__main__":
  uvicorn.run("run:app", host="0.0.0.0", port=8000, reload=True ,allow_origins=["http://localhost:5177"])