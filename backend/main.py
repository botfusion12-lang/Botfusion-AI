from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import openai
import os

app = FastAPI()

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# OpenAI API Key from environment
openai.api_key = os.getenv("OPENAI_API_KEY")

class ChatRequest(BaseModel):
    message: str

class ImageRequest(BaseModel):
    prompt: str

@app.get("/")
def root():
    return {"message": "BotFusion backend running 🚀"}

@app.post("/api/chat")
def chat(req: ChatRequest):
    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are BotFusion, an AI assistant."},
            {"role": "user", "content": req.message}
        ]
    )
    return {"reply": response.choices[0].message.content}

@app.post("/api/image")
def generate_image(req: ImageRequest):
    image = openai.Image.create(
        prompt=req.prompt,
        size="1024x1024"
    )
    return {"image_url": image["data"][0]["url"]}
