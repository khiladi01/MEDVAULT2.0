"use client"
import React from "react";
import { useState } from "react";
import Image from "next/image";
import appointImg from "../assets/appointimg.jpg"
import Swal from "sweetalert2";
import { apiFetch } from "../utils/api.js";
import { useRouter } from "next/navigation";

export default function BookPage(){

    const router = useRouter();
    const[formData , setFormData] = useState({
         doctorName : "",
         date : "",
         time : "",
         reason : ""
    })

    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if user is logged in
        const user = localStorage.getItem("medvault-user");
        if (!user) {
          Swal.fire({
            title: "Not Logged In",
            text: "Please log in to book an appointment.",
            icon: "warning",
            confirmButtonText: "OK",
          });
          router.push("/auth/login");
          return;
        }

        try {
          const res = await apiFetch("/appointments", {
            method: "POST",
            body: formData,
          });
          console.log("Appointment saved:", res);
          Swal.fire({
          title: "Success!",
          text: "Your Appointment Has Been Submitted.",
          icon: "success",
          confirmButtonText: "OK",
          });
        } catch (err) {
          console.error("Appointment error:", err.message);
          Swal.fire({
          title: "Fail!",
          text: err.message || "Your Appointment Has Been Failed.",
          icon: "error",
          confirmButtonText: "OK",
        });
        }
      };

    return(
        <>
        {/* appointment sec */}
    <div className="min-h-screen w-full bg-white flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16 select-none px-4 sm:px-6 lg:px-12 py-10">
  {/* phase 1 image sec */}
  <div
    id="box"
    className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] flex justify-center items-center mb-8 lg:mb-0"
  >
    <Image
      src={appointImg}
      alt="about image"
      width={580}
      height={580}
      className="h-[260px] w-[260px] sm:h-[380px] sm:w-[380px] md:h-[480px] md:w-[480px] lg:h-[580px] lg:w-[580px] border-0 border-slate-500"
    />
  </div>

  {/* phase 2 text sec */}
  <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[700px] text-center lg:text-left">
    <h2 className="text-2xl sm:text-3xl text-[#0A3D62] font-bold mb-4">
      Book an Appointment
    </h2>
    <p className="text-base sm:text-lg text-[#2C3E50]">
      Scheduling an appointment with a healthcare professional is now easier than ever with MedVault. Our user-friendly platform allows you to quickly find and book appointments with trusted doctors in your area.
    </p>
    <br />
    <p className="text-base sm:text-lg text-[#2C3E50]">
      Simply browse through our list of qualified healthcare providers, select a convenient time slot, and confirm your appointment in just a few clicks. Whether you need a routine check-up or specialized care, MedVault connects you with the right medical professionals to meet your needs.
    </p>
    <br />
    <p className="text-base sm:text-lg text-[#2C3E50]">
      Experience hassle-free healthcare scheduling with MedVault and take the first step towards better health today.
    </p>
  </div>
</div>

{/* contact form  */}
  <div className="h-[800px] w-full bg-white select-none">
       {/* adding heading */}
       <div>
        <h2 className="text-3xl text-[#0A3D62] font-bold mb-4 tracking-wider text-center">Appointment Form</h2>
       </div>
       {/* adding headline */}
       <div className="w-full flex justify-center items-center">
        <p className="w-[800px] text-lg text-[#2C3E50] text-center">
           Ready to book your consultation? Use our appointment form to choose your doctor, 
           select a convenient time, and share your details. The MedVault team will confirm 
           your booking and ensure you receive the care you need without delay.
        </p>

       </div>
       {/* adding form */}
        <div className="h-[650px] w-full flex justify-center items-center pt-[50px]">
            <div id="formback" className="h-[500px] w-[600px] border-0 rounded-2xl border-black flex justify-center items-center">
                <div className="h-[450px] w-[380px] border-0 border-red-400 grid place-content-center">
                       <form
         onSubmit={handleSubmit}
         className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-2xl flex flex-col gap-4"
     >
        <label className="text-sm font-medium text-gray-700">
        Doctor Name
        <input
          type="text"
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
          required
          className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </label>

        <label className="text-sm font-medium text-gray-700">
        Date
         <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
         </label>

         <label className="text-sm font-medium text-gray-700">
        Time
         <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
         </label>

        <label className="text-sm font-medium text-gray-700">
         Reason
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          rows="4"
          required
          className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
       </label>

       <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
       >
        Send Message
       </button>
       </form>
                </div>
            </div>
       </div>

       {/* main div end */}
  </div>

  {/* adding emergency sec */}
   <div className="w-full bg-[#0A3D62] text-white py-4 px-6 rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-center gap-4 select-none">
  <div className="flex items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-red-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405M19 13V7a2 2 0 00-2-2h-3V3H10v2H7a2 2 0 00-2 2v6l-2 2v1h16v-1l-2-2z" />
    </svg>
    <p className="text-lg font-semibold tracking-wide">
      In Case of Emergency Call:
    </p>
  </div>

  <div className="flex gap-6">
    <span className="text-2xl font-bold text-red-400">108</span>
    <span className="text-2xl font-bold text-red-400">112</span>
  </div>
</div>

{/* styling space */}
      <div className="h-[1px] w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-red-500"></div>
        </>
    );
}