from fastapi import APIRouter, Response
import csv

routes = APIRouter()

routes.get("/")


def _():
    return {"message": "First FastAPI route"}


@routes.get("/newroute")
def _():
    print(type({"message": "This is my second route"}))
    return {"message": "This is my second route"}


@routes.post("/uploadfile/")
async def create_upload_file(file: UploadFile = File(...)):
    contents = await file.read()
    # You can then use the contents variable to read the contents of the file
    # and do something with it, such as parse it as a CSV using the csv module.
    return {"filename": file.filename}
