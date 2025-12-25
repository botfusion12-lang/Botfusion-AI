# 🤖 BotFusion AI

BotFusion AI is an intelligent, modern AI assistant designed to help users chat, create images, translate languages, summarize content, and more — all inside a clean, mobile-first UI.

It is inspired by professional AI tools but built step-by-step for learning, experimenting, and launching publicly.

---

## 🚀 Live Demo

https://botfusion-ai.github.io/Botfusion-AI 
```

---

## ✨ Features

### 🧠 Chat & AI Tools
- Smart conversational chat
- Summarize, explain, rewrite, analyze text
- Coding help & problem solving
- Web-style prompts like **“make a list”**, **“write email”**, etc.

### 🎨 Image Generation
- Create AI images from text prompts
- Download / view generated images

### 🌍 Languages
- 100+ language support
- Auto-detect user language
- Manual language switcher

### 👤 Accounts (Planned / In Progress)
- Google login
- Real user profiles
- Save chats per user
- Profile picture + settings

### 💾 Chat History
- Save previous conversations
- Rename chats
- Continue conversations anytime

### 📱 PWA – Installable Like an App
- Works offline for UI
- “Add to Home Screen”
- Mobile-friendly layout

### 🔒 Security
- API keys are stored **only in backend**
- `.env` protected
- No secrets in GitHub repository

---

## 🏗️ Project Structure

Your project may look like this:

```
botfusion-ai/
│
├── docs/
│   └── index.html         # Frontend (UI)
│
├── backend/
│   ├── api/
│   │   ├── chat.js        # Chat endpoint
│   │   ├── image.js       # Image endpoint
│   │   └── index.js       # API router
│   ├── package.json
│   ├── .env               # Secret keys (NOT committed)
│   └── README.md
│
├── README.md
└── .gitignore
```

> If you are using **GitHub Pages**, your frontend lives in **docs/**.  
> If you are using **Vercel**, backend is inside **backend/api/**.

---

## 🔧 Tech Stack

- **HTML / CSS / JavaScript**
- **Node.js (API)**
- **OpenAI API**
- **Firebase (optional – for login + storage)**
- **PWA Service Worker**
- **GitHub Pages / Vercel**

---

## ⚙️ Environment Variables

Create a file:

```
backend/.env
```

Add:

```
OPENAI_API_KEY=your-key-here
```

> ❗ Never push `.env` to GitHub.  
> Keep your API key secret.

---

## ▶️ Running Locally

### 1️⃣ Install backend

```
cd backend
npm install
```

### 2️⃣ Run server

```
npm start
```

Backend runs at:

```
http://localhost:3000
```

---

## 🌐 Deploy

### 🎯 Frontend → GitHub Pages

Branch: `main`  
Folder: `/docs`

Enable Pages in repo settings.

---

### ⚡ Backend → Vercel

Deploy folder:

```
backend
```

API auto-lives at:

```
https://your-app.vercel.app/api/chat
https://your-app.vercel.app/api/image
```

Add environment variable in Vercel dashboard:

```
OPENAI_API_KEY
```

---

## 🔌 API Endpoints

### Chat
```
POST /api/chat
```

Body:
```json
{ "message": "Hello BotFusion!" }
```

### Image
```
POST /api/image
```

Body:
```json
{ "prompt": "cute robot sitting under the stars" }
```

---

## 🗺️ Roadmap

- [x] Chat UI
- [x] Image generation
- [x] Language switch
- [x] PWA
- [ ] Login & Google Auth
- [ ] Saved profiles
- [ ] Cloud chat history
- [ ] Voice input + TTS
- [ ] Advanced tools (search + deep research)

---

## 🤝 Contributing

Ideas or fixes welcome!  
Open an issue or PR any time.

---

## 🛡️ License

#APACHE 2.0 LICENSE
---

### ⭐ If you like BotFusion AI — give the repo a star!
