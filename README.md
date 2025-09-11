# 🏥 MedVault

**MedVault** is a fully responsive full-stack medical web application designed to provide users with a seamless healthcare experience.  
Users can easily **sign up, log in, book appointments, and contact medical experts** through the platform.  

This project is built using the **MERN stack** with **Next.js** on the frontend for enhanced performance, security, and server-side rendering (SSR).  

---

## ✨ Features

- 🔐 **Authentication** – Secure Sign Up and Login with hashed passwords (bcrypt) and JWT-based session handling.  
- 📅 **Appointment Booking** – Users must log in before booking, ensuring verified and safe scheduling.  
- 🧑‍⚕️ **Doctor Profiles** – Browse expert doctors (Cardiologist, Neurologist, etc.) and book based on specialization.  
- 📞 **Contact Form** – Users can send queries, and the team responds within 10 minutes.  
- 📍 **Responsive UI** – Optimized for all devices with a user-friendly interface.  
- 🔍 **Search Functionality** – Search doctors by name or specialization.  
- ⚡ **Fast Performance** – Powered by Next.js with inbuilt router and SSR for smooth backend integration.  

---

## 🖥️ Frontend (Next.js)

- **Home Page** – Overview with sections: About, Video, Doctors, Appointments, Trust, Contact, and Emergency.  
- **About Page** – Displays details about expert doctors to help users choose the right specialist.  
- **Contact Page** – Form for users to reach out directly. Support available via **WhatsApp, Email, and Call**.  
- **Appointment Page** – Secure booking system (requires login).  
- **Sign In / Sign Up** – Easy authentication flow for new and existing users.  
- **Navbar** – Fully responsive navigation with search functionality.  
- **Footer** – Contains site logo, About, and Contact links with direct communication options.  

---

## ⚙️ Backend (Express.js + MongoDB + Node.js)

1. **User Registration** – Passwords are hashed using `bcrypt` for security.  
2. **User Login** – A JWT token is generated to manage sessions and authenticate users.  
3. **Appointment Booking** – Uses reference to the registered user to confirm authenticity.  
   - ⚠️ *Note: Users must log in before booking appointments.*  
4. **Contact Form** – Submissions are stored securely in the MongoDB database.  

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT, Bcrypt  
- **Deployment:** *(Add Vercel/Render/MongoDB Atlas details here if used)*  

---

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/khiladi01/MEDVAULT2.0.git
cd MEDVAULT2.0
npm install
