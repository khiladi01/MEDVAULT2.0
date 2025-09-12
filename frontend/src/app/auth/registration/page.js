"use client";
import React, { useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { apiFetch } from "@/app/utils/api";

export default function RegistrationPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
  fullname: "",
  age: "",
  gender: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  postalcode: "",
  password: "",
  bloodgroup: "",
  weight: "",
  allergies: "",
  medicalhistory: "",
  medications: "",
  surgeries: "",
  familyhistory: "",
  lifestyle: "",
  idproof: "",
  prescription: "",
  emergencycontactname: "",
  relationship: "",
  emergencycontactphone: ""
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Prepare data with correct types
    const dataToSend = {
      ...formData,
      age: parseInt(formData.age, 10), // Convert age to number
      phone: formData.phone.toString(), // Convert phone to string
      emergencycontactphone: formData.emergencycontactphone.toString(), // Convert emergency phone to string
      weight: parseFloat(formData.weight), // Convert weight to number
      idproof: formData.idproof ? [formData.idproof] : [], // Convert to array
      prescription: formData.prescription ? [formData.prescription] : [], // Convert to array
    };

    const res = await apiFetch("/register", {
      method: "POST",
      body: dataToSend,
    });
    Swal.fire({
    title: "User Registration Success!",
    icon: "success",
    draggable: true
    });
    // console.log("✅ Register success:", res);
  } catch (err) {
    console.error("❌ Registration error:", err.message);
    Swal.fire({
    title: "User Registration Failed!",
    text: err.message || "An error occurred during registration",
    icon: "error",
    draggable: true
    });
  }
};

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8 select-none">
        <div className="w-full max-w-lg sm:max-w-2xl lg:max-w-3xl bg-white shadow-lg rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0A3D62] mb-6">
            Create Your MedVault Account
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="col-span-2">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3">
                Personal Information
              </h3>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Full Name *"
                className="border p-3 rounded-lg w-full"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Date of Birth *</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age *"
                className="border p-3 rounded-lg w-full"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Gender *</label>
              <select className="border p-3 rounded-lg w-full" name="gender" value={formData.gender}
                onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Phone *</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone *"
                pattern="[0-9]{10}"
                maxLength={10}
                className="border p-3 rounded-lg w-full"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                className="border p-3 rounded-lg w-full"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address *"
                className="border p-3 rounded-lg w-full"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City *"
                className="border p-3 rounded-lg w-full"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Postal Code *</label>
              <input
                type="text"
                name="postalcode"
                value={formData.postalcode}
                onChange={handleChange}
                placeholder="Postal Code *"
                className="border p-3 rounded-lg w-full"
                required
              />
            </div>

            {/* Password with show/hide */}
            <div className="relative">
              <label className="block text-gray-700 mb-1">Password *</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password *"
                className="border p-3 rounded-lg w-full pr-10"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-10 text-red-400 font-medium tracking-wide cursor-pointer select-none"
              >
                {showPassword ? "SHOW" : "HIDE"}
              </span>
            </div>

            {/* Medical Information */}
            <div className="col-span-2">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3">
                Medical Information
              </h3>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Blood Group *</label>
              <select className="border p-3 rounded-lg w-full" name="bloodgroup" value={formData.bloodgroup}
                onChange={handleChange} required>
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Weight *</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="Weight *"
                className="border p-3 rounded-lg w-full"
                required
              />
            </div>

            <div>
  <label className="block text-gray-700 mb-1">Prescription (URL)</label>
  <input
    type="text"
    name="prescription"
    value={formData.prescription}
    onChange={handleChange}
    placeholder="Enter prescription file URL"
    className="border p-3 rounded-lg w-full"
  />
</div>

            <div>
              <label className="block text-gray-700 mb-1">Allergies</label>
              <input
                type="text"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                placeholder="Allergies"
                className="border p-3 rounded-lg w-full"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Medical History</label>
              <input
                type="text"
                name="medicalhistory"
                value={formData.medicalhistory}
                onChange={handleChange}
                placeholder="Medical History"
                className="border p-3 rounded-lg w-full"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Medications</label>
              <input
                type="text"
                name="medications"
                value={formData.medications}
                onChange={handleChange}
                placeholder="Medications"
                className="border p-3 rounded-lg w-full"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Surgeries</label>
              <input
                type="text"
                name="surgeries"
                value={formData.surgeries}
                onChange={handleChange}
                placeholder="Surgeries"
                className="border p-3 rounded-lg w-full"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Family History</label>
              <input
                type="text"
                name="familyhistory"
                value={formData.familyhistory}
                onChange={handleChange}
                placeholder="Family History"
                className="border p-3 rounded-lg w-full"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Lifestyle</label>
              <input
                type="text"
                name="lifestyle"
                value={formData.lifestyle}
                onChange={handleChange}
                placeholder="Lifestyle"
                className="border p-3 rounded-lg w-full"
              />
            </div>

            <div>
  <label className="block text-gray-700 mb-1">ID Proof (URL) *</label>
  <input
    type="text"
    name="idproof"
    value={formData.idproof}
    onChange={handleChange}
    placeholder="Enter ID proof file URL"
    required
    className="border p-3 rounded-lg w-full"
  />
</div>

            {/* Emergency Contact */}
            <div className="col-span-2">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3">
                Emergency Contact
              </h3>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                Emergency Contact Name *
              </label>
              <input
                type="text"
                name="emergencycontactname"
                value={formData.emergencycontactname}
                onChange={handleChange}
                placeholder="Emergency Contact Name *"
                className="border p-3 rounded-lg w-full"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Relationship *</label>
              <input
                type="text"
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
                placeholder="Relationship *"
                className="border p-3 rounded-lg w-full"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                Emergency Contact Phone *
              </label>
              <input
                type="text"
                name="emergencycontactphone"
                value={formData.emergencycontactphone}
                onChange={handleChange}
                placeholder="Emergency Contact Phone *"
                pattern="[0-9]{10}"
                maxLength={10}
                className="border p-3 rounded-lg w-full"
                required
              />
            </div>

            {/* Footer */}
            <div className="col-span-2 flex items-center space-x-2 mt-4">
              <input type="checkbox" id="terms" required className="w-4 h-4" />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the Terms and Conditions *
              </label>
            </div>

            {/* Action */}
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full bg-[#0A3D62] text-white py-3 rounded-lg font-semibold hover:bg-[#052941] transition"
              >
                Sign Up
              </button>
            </div>

            {/* Login */}
            <div className="col-span-2 text-center mt-3">
              <p className="text-sm text-gray-600">
                Already a user of MedVault?{" "}
                <Link
                  href="/auth/login"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* styling space */}
      <div className="h-[1px] w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-red-500"></div>
      <div className="h-[1px] w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-red-500"></div>
    </>
  );
}
