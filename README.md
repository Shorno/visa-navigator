# Visa Navigator

## Overview
Visa Navigator is a web application that provides the latest visa information, helps users track their visa applications, and ensures a seamless application process. With a focus on security and ease of use, it offers real-time updates and customer support to make the visa process smoother.

## Screenshot
![Screenshot](https://res.cloudinary.com/def3zwztt/image/upload/v1738740339/Screenshot_2025-02-05_132443_djvm9i.png)

## Key Features
🌍 **Latest Visa Information**  
Stay updated with the latest visa requirements and information for various countries.  
📌 **Visa Application Tracking**  
Track the status of your visa application in real-time.  
💬 **24/7 Support**  
Get assistance anytime with our round-the-clock customer support.  
✅ **High Approval Rate**  
Benefit from our 98% visa approval rate.  
🔒 **Secure and Safe**  
Your personal information is protected with best-in-class security measures.  

## Key Technologies Used
### Frontend
- **React.js**
- **Vite**
- **Ant Design** (UI components)
- **Tailwind CSS** (Styling)
- **React Router** (Navigation)
- **Firebase** (Authentication & storage)
- **Lottie React** (Animations)
- **React Query** (Data fetching & caching)

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** (Database)
- **JWT Authentication**
- **RESTful APIs**

## Backend Repository Overview
The backend repository powers the Visa Navigator application, handling authentication, visa application storage, and real-time status updates. It ensures a secure and efficient visa management system.

### Backend Repository URL
[Visa Navigator Backend](https://github.com/Shorno/visa-navigator-backend)

## Setup Guide

### Frontend
1. **Clone the frontend repository:**
```bash
git clone https://github.com/Shorno/visa-navigator.git
```
2. **Navigate to the project directory:**
```bash
cd visa-navigator
```
3. **Install frontend dependencies:**
```bash
npm install
```
4. **Start the frontend development server:**
```bash
npm run dev
```

### Backend
1. **Clone the backend repository:**
```bash
git clone https://github.com/Shorno/visa-navigator-backend.git
```
2. **Navigate to the backend project directory:**
```bash
cd visa-navigator-backend
```
3. **Install backend dependencies:**
```bash
npm install
```
4. **Start the backend server:**
```bash
npm start
```

## Environment Variables

### Frontend
Create a `.env` file in the root directory of the frontend repository and add the following environment variables:

```plaintext
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
```

### Backend
Create a `.env` file in the root directory of the backend repository and add the following environment variables:

```plaintext
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

## Live Project Link
[Visa Navigator](https://visa-navigator.vercel.app)

## Relevant Resources
- [Visa Navigator GitHub Repository](https://github.com/Shorno/visa-navigator)
- [Visa Navigator Backend GitHub Repository](https://github.com/Shorno/visa-navigator-backend)

