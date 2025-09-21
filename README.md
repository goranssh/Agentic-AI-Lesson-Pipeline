# AI Tutor Platform  
_An integrated FastAPI backend + React frontends for AI Tutor Chatbot and Teacher Dashboard_

---

## 📚 Overview

This repository contains:

- **Backend** – A FastAPI service (lesson pipeline) for lesson management.
- **Frontend/Chatbot** – React + Vite frontend for students to interact with the AI tutor chatbot.
- **Frontend/Teacher Dashboard** – React frontend for teachers to manage lessons, view activity, and oversee the AI tutor pipeline.

---

## 📂 Project Structure

ai-tutor-platform/
│
├── backend/ # FastAPI backend
│ └── lesson_pipeline/
│ ├── main.py
│ ├── models.py
│ ├── requirements.txt
│ └── tests/
│
├── frontend/ # React frontends
│ ├── chatbot/ # Student chatbot frontend
│ │ ├── src/
│ │ │ ├── components/
│ │ │ ├── pages/
│ │ │ └── App.jsx
│ │ ├── package.json
│ │ ├── vite.config.js
│ │ └── .gitignore
│ │
│ └── teacher-dashboard/ # Teacher dashboard frontend
│ ├── src/
│ ├── package.json
│ └── .gitignore
│
├── netlify/functions/ # Optional Netlify serverless functions
│
├── README.md # (this file)
└── .gitignore

yaml
Copy code

---

## 🛠️ Getting Started

### 1. Backend (FastAPI)

```bash
cd backend/lesson_pipeline
pip install -r requirements.txt
uvicorn main:app --reload
The backend runs at http://127.0.0.1:8000
Interactive API docs at http://127.0.0.1:8000/docs

2. Frontend: Chatbot
bash
Copy code
cd frontend/chatbot
npm install
npm run dev
The chatbot runs at http://localhost:5173

3. Frontend: Teacher Dashboard
bash
Copy code
cd frontend/teacher-dashboard
npm install
npm start
The dashboard runs at http://localhost:3000 (or the port React chooses)

🔗 Connecting Frontend to Backend
Both React frontends use Axios or Fetch to call the FastAPI backend.
For example:

javascript
Copy code
import axios from "axios";

axios.get("http://127.0.0.1:8000/lessons")
  .then(res => console.log(res.data))
  .catch(err => console.error(err));
Update the URLs if you deploy your backend to a remote host.

📦 Build for Production
Each frontend can be built separately:

bash
Copy code
cd frontend/chatbot && npm run build
cd ../teacher-dashboard && npm run build
Then deploy the dist/ folders to your hosting provider (e.g., Netlify, Vercel).

🧪 Testing
Backend tests:

bash
Copy code
cd backend/lesson_pipeline
pytest
📝 Notes
Keep backend and frontends separate for clean deployment.

Use .env files in each frontend to store API URLs securely.

Extend the FastAPI backend with authentication or a database as needed.

🤝 Contributing
Pull requests are welcome!
Please open an issue for any bugs or feature requests.
