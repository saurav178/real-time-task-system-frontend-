# 🚀 Real-Time Task Processing System

A production-ready **Real-Time Task Processing System** built with **React, Node.js, Express, MongoDB, Redis, BullMQ, and Socket.IO**.

This project demonstrates asynchronous background job processing, real-time updates, Redis caching, retry mechanisms, idempotency, and clean architecture.

---

# 📸 Demo

Frontend:
https://your-frontend-url

Backend:
https://your-backend-url

---

# ✨ Features

- Create Tasks
- Real-time Task Status Updates
- Background Processing with BullMQ
- Redis Queue
- Redis Caching
- MongoDB Database
- Socket.IO Live Updates
- Retry Failed Jobs
- Idempotency Support
- REST APIs
- Service Layer Architecture
- Clean Folder Structure

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- Axios
- Socket.IO Client
- Tailwind CSS

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Redis
- BullMQ
- Socket.IO
- Zod

---

# 📂 Project Structure

## Frontend

```
frontend
│
├── src
│
├── components
│      ├── TaskForm.jsx
│      ├── TaskList.jsx
│      └── TaskItem.jsx
│
├── hooks
│      └── useSocket.js
│
├── services
│      └── api.js
│
├── App.jsx
├── main.jsx
└── package.json
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/saurav178/real-time-task-system.git
```

---

# Backend Setup

```bash
cd backend

npm install
```

Create

```
.env
```

```
PORT=5000

MONGO_URI=your_mongodb_uri

REDIS_HOST=localhost

REDIS_PORT=6379
```

Start Server

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd frontend

npm install
```

Create

```
.env
```

```
VITE_API_URL=[http://localhost:5000/api](https://real-time-task-system-frontend.onrender.com/)

VITE_SOCKET_URL=[http://localhost:5000](https://real-time-task-system-frontend.onrender.com/)
```

Run

```bash
npm run dev
```

---

# API Endpoints

## Create Task

```
POST /api/tasks
```

Body

```json
{
    "type":"Email",
    "idempotencyKey":"abc123"
}
```

---

## Get All Tasks

```
GET /api/tasks
```

---

## Get Task By ID

```
GET /api/tasks/:id
```

---

# Real-Time Events

Client listens for

```
task-update
```

Example

```json
{
    "taskId":"687....",
    "status":"processing"
}
```

Possible Status

- queued
- processing
- completed
- failed

---

# Queue Processing

BullMQ is responsible for:

- Background processing
- Retry failed jobs
- Delay simulation
- Worker execution

---

# Redis Usage

Redis is used for

- BullMQ Queue
- Task Caching
- Queue Management

---

# Idempotency

Each task contains

```
idempotencyKey
```

Duplicate requests return the existing task instead of creating a new one.

---

# Retry Mechanism

BullMQ retries failed jobs automatically.

Example

```
Attempts : 3
```

If all retries fail

```
Status = failed
```

---

# Future Improvements

- Authentication (JWT)
- Role Based Access
- Docker
- Kubernetes
- CI/CD
- Email Notifications
- Dashboard Analytics
- Unit Testing
- Rate Limiting
- Swagger Documentation

---

# Screenshots

## Home

(Add Screenshot)

---

## Processing

<img width="690" height="1242" alt="real-time-task-system-frontend onrender com_" src="https://github.com/user-attachments/assets/fdedb565-21f4-41fd-99b1-4f615f8a970f" />

---

## Completed

(Add Screenshot)

---

# Author

Smrutisaurav Ojha

GitHub

https://github.com/saurav178
---
