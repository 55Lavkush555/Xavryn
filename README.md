# 🚀 Xavryn – Modern Real-time Chat App

A modern real-time chat application built with **Next.js + Firebase**, designed for smooth communication with a clean and premium UI experience.

---

## 📌 Overview

Xavryn is a collaborative chat platform inspired by modern messaging apps like WhatsApp and Instagram.  
It focuses on real-time communication, clean UI, and scalable architecture.

This project is currently under active development and being built in phases.

---

## ⚡ Current Status

- ✔ Authentication system setup (Firebase Auth)
- ✔ Basic project structure ready
- ✔ Firestore database design planned
- ✔ Real-time messaging architecture decided
- ✔ UI/UX direction finalized

---

## 🧠 Tech Stack

### Frontend
- Next.js (App Router)
- JavaScript
- Tailwind CSS / Custom CSS

### Backend & Database
- Firebase Authentication
- Firestore Database
- Firebase Storage (planned)

### Real-time System
- Firestore `onSnapshot` listeners

---

## 🔐 Authentication

- Google Login (primary)
- Email/Password (optional future support)
- Firebase Auth handles sessions securely
- No localStorage-based authentication

---

## 📂 Database Structure (Firestore)

### users
```js
{
  uid,
  name,
  email,
  profileImage,
  status
}
```

### chats
```js
{
  participants: [],
  lastMessage,
  updatedAt
}
```

### messages
```js
{
  chatId,
  senderId,
  text,
  createdAt,
  edited
}
```

---

## 📁 Project Structure

```bash
app/
  (auth)/
    login/
    signup/

  (protected)/
    chat/
      page.js
      [chatId]/
    settings/

components/
lib/
hooks/
```

---

## 🎨 UI / UX Direction

- Dark mode first design
- Clean and minimal interface
- Glassmorphism effects
- Smooth gradients
- Modern premium feel

---

## ⚙️ Features

### Phase 1 (MVP)
- Authentication system
- Real-time messaging
- Chat interface
- Protected routes

### Phase 2
- Online/offline status
- Typing indicators
- Last seen system
- Better UI interactions

### Phase 3
- Message edit & delete
- Read receipts (seen/delivered)
- UI improvements

### Phase 4 (Advanced)
- Media sharing
- AI assistant features
- Smart reply suggestions
- Enhanced UX improvements

---

## 🤝 Collaboration

- main → Stable production code
- feature branches → Development work
- Pull Requests → Code merging

---

## 💻 Development Philosophy

- Build step-by-step (phase-wise)
- Focus on core functionality first
- Avoid feature overload
- Prioritize stability + UX

---

## 🚀 Future Vision

- Production-ready chat platform
- Portfolio-grade project
- Scalable SaaS product
- Hackathon-ready application

---

## 🔥 Author

Built with passion for learning full-stack development 🚀
