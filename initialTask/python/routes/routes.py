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


@routes.get("/csv")
async def read_csv(response: Response):
    with open("files/me.csv", newline='') as csvfile:
        csvreader = csv.reader(csvfile, delimiter=',', quotechar='"')
        data = []
        for row in csvreader:
            data.append(row)
    response.headers["Content-Disposition"] = "attachment; filename=data.csv"
    return {"data": data}
