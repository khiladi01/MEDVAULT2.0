import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";

// Helper: sign JWT
const generateToken = (userId, email) => {
  return jwt.sign({ id: userId, email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};



// @route   POST /auth/login
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log("Login attempt for email:", email);

    const user = await User.findOne({ email }).select("+password");
    console.log("User found:", user ? "Yes" : "No");

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = generateToken(user._id, user.email);
    console.log("Token generated successfully");

    // Set JWT in HttpOnly cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // only HTTPS in prod
      sameSite: "lax",
      maxAge: 60 * 60 * 1000, // 1h
    });

    // Return user data (exclude password)
    const userData = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      age: user.age,
      gender: user.gender,
      phone: user.phone,
      address: user.address,
      city: user.city,
      postalcode: user.postalcode,
      bloodgroup: user.bloodgroup,
      weight: user.weight,
      allergies: user.allergies,
      medicalhistory: user.medicalhistory,
      medications: user.medications,
      surgeries: user.surgeries,
      familyhistory: user.familyhistory,
      lifestyle: user.lifestyle,
      idproof: user.idproof,
      prescription: user.prescription,
      emergencycontactname: user.emergencycontactname,
      relationship: user.relationship,
      emergencycontactphone: user.emergencycontactphone,
    };

    res.json({ message: "Login successful", user: userData });
  } catch (error) {
    console.error("Login error:", error.message);
    next(error);
  }
};

// @route   GET /auth/logout
const logoutUser = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
};

// Middleware: protect routes
const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token invalid or expired" });
  }
};

export { loginUser, logoutUser, authMiddleware };
