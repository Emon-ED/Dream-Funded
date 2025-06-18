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

## 📸 Screenshots

### 🧍‍♂️ Student Verification Form
![Student Form](https://i.ibb.co/3QhwQyS/1.png)

### 🏫 Provider Registration Form
![Provider Form](https://i.ibb.co/HDFGKyzM/2.png)

### 📋 Submission Review Page
![Submission Page](https://i.ibb.co/FbZQfwXL/3.png)

### ✅ Form Confirmation & Validation
![Confirmation](https://i.ibb.co/Fkc9rvLJ/4.png)

### 🖥️ Responsive UI Design
![Responsive UI](https://i.ibb.co/RGCQCbxD/5.png)

---

## Getting Started (For Developers)

### Client (React)
```bash
cd client
npm install
npm run dev
