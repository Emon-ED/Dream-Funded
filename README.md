# 🎓 Dream Funded - Scholarship Management Platform

**Dream Funded** is a complete web application that connects **scholarship providers** with **students in need**. It offers secure student verification, scholarship publishing, and a trustworthy communication bridge between both parties.

---

## 🚀 Features

### 👨‍🎓 Student Features
- Personal, academic & family information collection
- Document uploads (Transcript, NID/Birth Certificate)
- OTP-verified Email & Phone authentication
- Teacher recommendation letter submission
- One-time welcome intro
- Secure final submission with confirmation checkbox

### 🏢 Scholarship Provider Features
- Organization registration with official info
- OTP-verified Email & Phone authentication
- Scholarship details submission
- Fund allocation history & documents
- ID and agreement verification
- Optional bank info upload

### 🔒 Security & Verification
- OTP verification (Phone/Email)
- File upload with storage handling
- Frontend validation + submission confirmation
- Unique login for students and providers

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS, DaisyUI, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB / Firebase Firestore
- **Authentication & Storage:** Firebase Auth, Firebase Storage
- **Deployment:** Vercel (Client) & Render/Heroku (Server)

---

## 📂 Project Structure

DreamFunded/
│
├── client/ # React Frontend
│ ├── components/
│ ├── layouts/
│ ├── pages/
│ └── README.md
│
├── server/ # Express Backend
│ ├── routes/
│ ├── controllers/
│ └── .env
│
└── README.md

---


### Client (React)
```bash
cd client
npm install
npm run dev
