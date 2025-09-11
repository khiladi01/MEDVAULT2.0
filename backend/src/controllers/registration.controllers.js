// controllers/auth.controllers.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const registerUser = async (req, res) => {
  try {
    const {
      fullname,
      age,
      gender,
      phone,
      email,
      address,
      city,
      postalcode,
      password,
      bloodgroup,
      weight,
      allergies,
      medicalhistory,
      medications,
      surgeries,
      familyhistory,
      lifestyle,
      idproof,
      prescription,
      emergencycontactname,
      relationship,
      emergencycontactphone,
    } = req.body;

    // ✅ Basic validation
    if (!fullname || !age || !gender || !phone || !email || !address || !city || !postalcode || !password || !bloodgroup || !weight || !idproof || !emergencycontactname || !relationship || !emergencycontactphone) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    // ✅ Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ✅ Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // ✅ Create new user
    const newUser = await User.create({
      fullname,
      age,
      gender,
      phone,
      email,
      address,
      city,
      postalcode,
      password: hashedPassword,
      bloodgroup,
      weight,
      allergies,
      medicalhistory,
      medications,
      surgeries,
      familyhistory,
      lifestyle,
      idproof,
      prescription,
      emergencycontactname,
      relationship,
      emergencycontactphone,
    });

    // ✅ JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("❌ Registration error:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
