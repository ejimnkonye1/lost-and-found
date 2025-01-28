from app import db
from fastapi import FastAPI
import uvicorn
app = FastAPI()
from app.routes.items import router as item_router

# app.include_router(item_router, prefix='/api/item')
# Define a route for the root URL
@app.get("/")
async def read_root():
    return {"message": "Hello, World!"}


if __name__ == "__main__":
  uvicorn.run("run:app", host="0.0.0.0", port=8000, )