from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message":"first FastAPI route"}

@app.get("/newroute")
def _():
    print(type({"message": "this is the second FastAPI route"}))
    return {"message":"second FastAPI route"}