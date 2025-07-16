# MERN Task Manager

A full-stack Task Manager application built with MongoDB, Express, React, and Node.js. Includes authentication, task CRUD, user profile, and is ready for production deployment with CI/CD and monitoring.

---

## Features
- User registration and login (JWT authentication)
- Create, read, update, and delete tasks
- Mark tasks as completed
- Edit/delete tasks
- User profile (view/update name, email, password)
- Protected routes (frontend and backend)
- Responsive UI with Tailwind CSS
- Error handling and user feedback
- Ready for deployment to Render (backend) and Vercel (frontend)
- CI/CD with GitHub Actions
- Health check and monitoring endpoints

---

## Folder Structure
```
week-7-devops-deployment-assignment-Mbitajeff/
  client/      # React frontend
  server/      # Express backend
  .github/     # GitHub Actions workflows
  .env.example # Environment variable templates
  README.md    # This file
```

---

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- pnpm or npm
- MongoDB Atlas account
- GitHub account

### 1. Clone the Repository
```
git clone <your-repo-url>
cd week-7-devops-deployment-assignment-Mbitajeff
```

### 2. Setup Environment Variables
- Copy `.env.example` to `.env` in both `client/` and `server/` folders.
- Fill in your MongoDB URI and JWT secret in `server/.env`.
- Set `REACT_APP_API_URL` in `client/.env` to your backend URL (e.g., `http://localhost:5000/api`).

### 3. Install Dependencies
```
cd server
pnpm install
cd ../client
pnpm install
```

### 4. Run Locally
- **Backend:**
  ```
  cd server
  pnpm start
  ```
- **Frontend:**
  ```
  cd client
  pnpm start
  ```
- Visit [http://localhost:3000](http://localhost:3000)

---

## Deployment

### Backend (Render)
1. Push your code to your own GitHub repo.
2. Create a new Web Service on [Render](https://render.com/).
3. Connect your repo, set root to `server/`.
4. Set environment variables: `PORT`, `MONGO_URI`, `JWT_SECRET`.
5. Set start command: `npm start`.
6. Deploy and copy your backend URL.

### Frontend (Vercel)
1. Import your repo on [Vercel](https://vercel.com/).
2. Set root to `client/`.
3. Set environment variable: `REACT_APP_API_URL` to your Render backend URL + `/api`.
4. Deploy.

---

## CI/CD (GitHub Actions)
- Workflows in `.github/workflows/` run tests, lint, and deploy on push.
- Example files:
  - `frontend-ci.yml` / `backend-ci.yml`: Lint/test/build
  - `frontend-cd.yml` / `backend-cd.yml`: Deploy

---

## Monitoring & Maintenance
- Health check endpoint: `GET /api/health`
- Use UptimeRobot, Render/Vercel monitoring, or similar
- Error tracking: Add Sentry or similar if desired
- Regularly update dependencies and backup your database

---

## Screenshots
- ![Login Page](./screenshots/login.png)
- ![Dashboard](./screenshots/dashboard.png)
- ![CI/CD Pipeline](./screenshots/cicd.png)

---

## Live Demo
- **Frontend:** [your-frontend-url]
- **Backend API:** [your-backend-url]

---

## License
MIT 