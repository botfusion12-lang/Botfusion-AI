from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import openai
import os

# ---------------- APP SETUP ----------------

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # later you can restrict
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- OPENAI KEY ----------------
# IMPORTANT: DO NOT HARD-CODE YOUR KEY
# On Vercel / Render → set OPENAI_API_KEY in ENV

openai.api_key = os.getenv("OPENAI_API_KEY")

# ---------------- MODELS ----------------

class ChatRequest(BaseModel):
    message: str

class ImageRequest(BaseModel):
    prompt: str

# ---------------- ROUTES ----------------

@app.get("/")
def home():
    return {"status": "BotFusion backend running 🚀"}

# -------- CHAT API --------
@app.post("/api/chat")
def chat(req: ChatRequest):
    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are BotFusion, a helpful AI assistant."},
            {"role": "user", "content": req.message}
        ]
    )

    return {
        "reply": response.choices[0].message.content
    }

# -------- IMAGE API --------
@app.post("/api/image")
def image(req: ImageRequest):
    img = openai.Image.create(
        prompt=req.prompt,
        n=1,
        size="1024x1024"
    )

    return {
        "image_url": img["data"][0]["url"]
    }
