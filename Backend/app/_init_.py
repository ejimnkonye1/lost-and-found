from motor.motor_asyncio import AsyncIOMotorClient
from config import MONGO_URI

#intialize mongo
client = AsyncIOMotorClient(MONGO_URI)

##
db = client['lost_and_found']

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)