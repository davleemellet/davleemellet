import os
from urllib.parse import quote_plus

basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    SECRET_KEY =  os.environ.get('SECRET_KEY') or 'Jeremiah 33:3'
    MONGODB_USERNAME =quote_plus('DMellet')
    MONGODB_PASSWORD = quote_plus('!sN94qXs5P2WvXS1')
    MONGODB_CLUSTER ='my-apps'
    MONGODB_DB = "tithesOffering"
    

    DB_URI= f"mongodb+srv://{MONGODB_USERNAME}:{MONGODB_PASSWORD}@{MONGODB_CLUSTER}.xkebf.mongodb.net/{MONGODB_DB}?retryWrites=true&w=majority"
    MONGODB_HOST = DB_URI