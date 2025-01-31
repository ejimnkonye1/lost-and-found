from dotenv import load_dotenv
import os

load_dotenv()
MONGO_URI = os.getenv("MONGO_URI")
# Add a validation step to ensure MONGO_URI is set
if not MONGO_URI:
    raise ValueError("MONGO_URI is not set in the .env file")