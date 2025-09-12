"use client"

import React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import contactImg from "../assets/contactpage.jpg"
import Swal from "sweetalert2";
import { apiFetch } from "../utils/api.js";

export default function Contact() {

    const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
    });

    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiFetch("/contact", {
        method: "POST",
        body: formData,
      });
      // console.log("Contact saved:", res);
      // alert("Message sent!");
    } catch (err) {
      // console.error("Contact error:", err.message);
      // alert("Error sending message!");
    Swal.fire({
    title: "Fail!",
    text: "Your form has not been submitted successfully.",
    icon: "error",
    confirmButtonText: "OK",
    });
    }
    console.log("Form submitted:", formData);
    // here you can send data to API route (Next.js backend)
    // alert("Thank you for contacting us!");
    Swal.fire({
    title: "Success!",
    text: "Your form has been submitted successfully.",
    icon: "success",
    confirmButtonText: "OK",
    });
  };

    return(
        <>
        {/* adding contact us section */}
    <div className="min-h-screen w-full bg-white flex flex-col lg:flex-row justify-center items-center gap-10 px-4 select-none">
    
  {/* pahse-1 about us sec */}
  <div className="w-full max-w-[700px]">
    <h2 className="text-3xl text-[#0A3D62] font-bold mb-4 tracking-wider">Contact Us</h2>
    <p className="text-lg text-[#2C3E50]">
      We are always here to help you. If you have any questions, need support, or want to know more about MedVault, feel free to reach out to us.
    </p>
    <br />
    <p className="text-lg text-[#2C3E50]">
      You can connect with us by email or phone, and our team will be happy to assist you.
    </p>
    <br />
    <p className="text-lg">
      📧 Email: <Link href="mailto:akshayraj3435@gmail.com" className="text-[#2C3E50]">akshayraj3435@gmail.com</Link>
      <br />
      📞 Phone: <Link href="tel:+91 9142158588" className="text-[#2C3E50]">+91 91421 58588</Link>
      <br />
      📌 Address: <span className="text-[#2C3E50]">MedVault HQ, MG Road, Bengaluru</span>
    </p>

    {/* <br /> */}
    {/* add contact link */}
    {/* <div className="h-[40px] w-[250px] rounded-full bg-green-800 border-0 border-green-800 flex justify-center items-center hover:scale-105 transition-all ease-in-out duration-200">
      <Link href="/contact" className="h-full w-full flex justify-center items-center text-slate-100 tracking-wider font-normal hover:text-white hover:tracking-widest transition-all ease-in-out duration-200">
        𝓔𝔁𝓹𝓵𝓸𝓻𝓮 𝓜𝓸𝓻𝓮
      </Link>
    </div> */}
  </div>

  {/* pahse-2 image */}
  <div id="box" className="w-full max-w-[600px] h-auto flex justify-center items-center">
    <Image src={contactImg} alt="contact image" width={580} height={400} className="w-full max-w-[580px] h-auto border-0 border-slate-500" />
  </div>
</div>

  {/* contact form  */}
  <div className="h-screen w-full bg-white select-none">
       {/* adding heading */}
       <div>
        <h2 className="text-3xl text-[#0A3D62] font-bold mb-4 tracking-wider text-center">Contact Form</h2>
       </div>
       {/* adding headline */}
       <div className="w-full flex justify-center items-center">
        <p className="w-[800px] text-lg text-[#2C3E50] text-center">
           Have a question or need support? Our MedVault team is always here to assist you. 
           Whether it’s about appointments, services, or general inquiries — feel free to connect with us anytime.
        </p>
       </div>
       {/* adding form */}
        <div className="w-full flex justify-center items-center pt-[50px]">
            <div id="formback" className="h-[500px] w-[600px] border-0 rounded-2xl border-black flex justify-center items-center">
                <div className="h-[450px] w-[380px] border-0 border-red-400 grid place-content-center">
                       <form
         onSubmit={handleSubmit}
         className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-2xl flex flex-col gap-4"
     >
        <label className="text-sm font-medium text-gray-700" id="fullname">
        Full Name
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          required
          className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </label>

        <label className="text-sm font-medium text-gray-700" id="email">
        Email Address
         <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
         </label>

        <label className="text-sm font-medium text-gray-700" id="message">
         Message
        <textarea
          name="message"
          value={formData.message}
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
    )
}