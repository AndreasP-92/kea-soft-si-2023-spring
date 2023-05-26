from fastapi import FastAPI, Request, Response

app = FastAPI()

@app.post("/github")
async def github_webhook(request: Request, response: Response):
    if request.headers.get("content-type") == "application/x-www-form-urlencoded":
        formdata = await request.form()
        payload = formdata['payload']
        print(payload)
        response.status_code = 200
    else:
        response.status_code = 404
    