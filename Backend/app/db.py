from motor.motor_asyncio import AsyncIOMotorClient
from config import MONGO_URI
import asyncio

async def initialize_mongo():
    # Initialize MongoDB client
    client = AsyncIOMotorClient(MONGO_URI)

    # Access the database
    db = client['lost_and_found']

    # Ping the server to confirm connection
    try:
        await client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(f"An error occurred while connecting to MongoDB: {e}")

    return db  # Return the database object for further use

# Run the async function
if __name__ == "__main__":
    asyncio.run(initialize_mongo())
