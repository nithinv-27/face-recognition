from fastapi import FastAPI 
from recognize import main

app = FastAPI()

@app.get("/")
def home(num: int = None):
    if(num == 1):
        main()
    else:
        return {"dwd":"ihnnm"}