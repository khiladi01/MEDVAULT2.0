import express from "express";
import { createContact } from "../controllers/contact.controllers.js";
import {
  loginUser,
  logoutUser,
  authMiddleware,
} from "../controllers/auth.controllers.js";
import { registerUser } from "../controllers/registration.controllers.js";
import User from "../models/user.model.js";
import Appointment from "../models/appointment.model.js";

const router = express.Router();

// ================= POST USER CONTACT FORM =================
router.post("/contact", createContact);

// ================= REGISTER =================
router.post("/register", registerUser);

// ================= LOGIN =================
router.post("/login", loginUser);

// ================= LOGOUT =================
router.post("/logout", logoutUser);

// ================= PROFILE (Protected) =================
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Error fetching profile" });
  }
});

// ================= BOOK APPOINTMENT (Protected) =================
router.post("/appointments", authMiddleware, async (req, res) => {
  try {
    const { doctorName, date, time, reason } = req.body;
    if (!doctorName || !date || !time) {
      return res
        .status(400)
        .json({ message: "Doctor name, date, and time are required" });
    }

    const appointment = await Appointment.create({
      user: req.user.id, // comes from authMiddleware
      doctorName,
      date,
      time,
      reason,
    });

    res
      .status(201)
      .json({ message: "Appointment booked successfully", appointment });
  } catch (error) {
    console.error("Appointment booking error:", error);
    console.error("Request body:", req.body);
    console.error("Stack trace:", error.stack);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// ================= GET USER APPOINTMENTS (Protected) =================
router.get("/appointments", authMiddleware, async (req, res) => {
  try {
    const appointments = await Appointment.find({ user: req.user.id });
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export { router };
