"use client";

import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import Link from "next/link";
import Image from "next/image";
import aboutImg from "./assets/aboutpageimg.webp";
import contactImg from "./assets/contactpage.jpg";
import appointImg from "./assets/appointimg.jpg";
import cardioImg from "./assets/cardiologist.jpg";
import neuroImg from "./assets/neurologist.jpg";
import orthoImg from "./assets/orthopady.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import "./globals.css";

export default function Home() {
  const [isTrustSectionVisible, setIsTrustSectionVisible] = useState(false);
  const trustSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTrustSectionVisible(true);
          // Disconnect observer after first trigger to prevent multiple triggers
          observer.disconnect();
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "0px 0px -100px 0px", // Adjust trigger point slightly earlier
      }
    );

    if (trustSectionRef.current) {
      observer.observe(trustSectionRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      Swal.fire({
        title: "🔐 Welcome to MedVault",
        text: "Your health, securely stored. Explore and manage with ease.",
        icon: "success",
        confirmButtonText: "Let’s Go 🚀",
        background: "#fff url(/images/trees.png)",
        backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `,
      });
    }, 10000);

    return () => clearTimeout(timer); // cleanup if user navigates away
  });

  return (
    <>
      {/* adding box images and link */}
      <div
        id="hero"
        className="h-screen w-full grid place-content-center select-none px-4 text-center sm:px-6 lg:px-8"
      >
        {/* phase one */}
        <div>
          <p className="text-slate-200 font-normal text-base sm:text-lg md:text-xl tracking-wide">
            𝒲𝑒 𝒞𝒶𝓇𝑒 𝐹𝑜𝓇 𝒴𝑜𝓊
          </p>
        </div>

        {/* phase two */}
        <div className="mt-6">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 tracking-wide">
            Medvault Health Care
          </p>
        </div>

        {/* phase three */}
        <div className="mt-6">
          <p className="text-sm sm:text-base md:text-lg text-slate-200 tracking-wide">
            𝒟𝒾𝓇𝑒𝒸𝓉 𝒫𝓇𝒾𝓋𝒶𝓉𝑒 𝒞𝒶𝓇𝑒
          </p>
        </div>

        {/* phase four - link */}
        <div>
          <Link
            href="/about"
            className="mt-8 h-[45px] w-[160px] sm:h-[50px] sm:w-[200px] rounded-full bg-[#008080] border-2 border-white flex justify-center items-center hover:scale-105 hover:tracking-widest transition-all ease-in-out duration-200 mx-auto"
          >
            <p className="text-white font-normal text-sm sm:text-base tracking-wide transition-all ease-in-out duration-200">
              Get Started
            </p>
          </Link>
        </div>
      </div>

      {/* adding about us section */}
      <div className="min-h-screen w-full bg-white flex flex-col lg:flex-row justify-center items-center gap-10 select-none px-4 sm:px-6 lg:px-12 py-10">
        {/* phase-1 image */}
        <div
          id="box"
          className="w-full max-w-[600px] h-auto flex justify-center items-center"
        >
          <Image
            src={aboutImg}
            alt="contact image"
            width={580}
            height={400}
            className="w-full max-w-[580px] h-auto border-0 border-slate-500"
          />
        </div>

        {/* phase-2 about us sec */}
        <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[700px] text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl text-[#0A3D62] font-bold mb-4">
            About Us
          </h2>
          <p className="text-base sm:text-lg text-[#2C3E50]">
            MedVault is a simple and secure healthcare platform made to bring
            patients and doctors closer.
          </p>
          <br />
          <p className="text-base sm:text-lg text-[#2C3E50]">
            We want to make medical care easy for everyone by helping people
            connect with trusted doctors, book appointments without stress, and
            keep their health records safe in one place.
          </p>
          <br />
          <p className="text-base sm:text-lg text-[#2C3E50]">
            Our aim is to remove the confusion around healthcare and give
            patients a clear, reliable, and caring experience. At MedVault, we
            believe good health starts with trust, and we are here to make sure
            you get the care you need at the right time.
          </p>
          <br />
          {/* add about link */}
          <div className="h-[40px] w-[200px] sm:w-[250px] rounded-full bg-green-800 border-0 border-green-800 flex justify-center items-center hover:scale-105 transition-all ease-in-out duration-200 mx-auto lg:mx-0">
            <Link
              href="/about"
              className="h-full w-full flex justify-center items-center text-slate-100 tracking-wider font-normal hover:text-white hover:tracking-widest transition-all ease-in-out duration-200"
            >
              𝓔𝔁𝓹𝓵𝓸𝓻𝓮 𝓜𝓸𝓻𝓮
            </Link>
          </div>
        </div>
      </div>

      {/* adding fancy video */}
      <div className="min-h-screen w-full bg-white flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 select-none px-4 sm:px-6 lg:px-12 py-10">
        {/* text sec */}
        <div className="w-full sm:w-[450px] md:w-[500px] text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-2xl sm:text-3xl text-[#0A3D62] font-bold mb-4">
            Welcome to MedVault
          </h2>
          <br />
          <p className="text-[#2C3E50] font-normal text-base sm:text-lg">
            Discover how MedVault is transforming healthcare with technology.
          </p>
          <br />
          <p className="text-[#2C3E50] font-normal text-sm sm:text-md">
            At MedVault, we believe in blending technology with healthcare. This
            video gives you a glimpse into the dedication and precision of our
            medical experts. Our goal is to make advanced healthcare simple,
            accessible, and trustworthy for everyone.
          </p>
        </div>

        {/* video sec */}
        <div
          id="led"
          className="w-full sm:w-[500px] md:w-[600px] lg:w-[700px] h-auto lg:h-[500px] overflow-hidden flex justify-center pt-6 lg:pt-[75px]"
        >
          <div className="w-full sm:w-[450px] md:w-[520px] lg:w-[570px]">
            <video
              src="/video/homevideo.mp4"
              className="w-full border-0 border-slate-500 flex justify-center items-center"
              loop
              autoPlay
              muted
            />
          </div>
        </div>
      </div>

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
            className="sm:h-[380px] sm:w-[380px] md:h-[480px] md:w-[480px] lg:h-[580px] lg:w-[580px] border-0 border-slate-500"
          />
        </div>

        {/* phase 2 text sec */}
        <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[700px] text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl text-[#0A3D62] font-bold mb-4">
            Book an Appointment
          </h2>
          <p className="text-base sm:text-lg text-[#2C3E50]">
            Scheduling an appointment with a healthcare professional is now
            easier than ever with MedVault. Our user-friendly platform allows
            you to quickly find and book appointments with trusted doctors in
            your area.
          </p>
          <br />
          <p className="text-base sm:text-lg text-[#2C3E50]">
            Simply browse through our list of qualified healthcare providers,
            select a convenient time slot, and confirm your appointment in just
            a few clicks. Whether you need a routine check-up or specialized
            care, MedVault connects you with the right medical professionals to
            meet your needs.
          </p>
          <br />
          <p className="text-base sm:text-lg text-[#2C3E50]">
            Experience hassle-free healthcare scheduling with MedVault and take
            the first step towards better health today.
          </p>
          <br />
          {/* add appointment link */}
          <div className="h-[40px] w-[200px] sm:w-[250px] rounded-full bg-green-800 border-0 border-green-800 flex justify-center items-center hover:scale-105 transition-all ease-in-out duration-200 mx-auto lg:mx-0">
            <Link
              href="/book"
              className="h-full w-full flex justify-center items-center text-slate-100 tracking-wider font-normal hover:text-white hover:tracking-widest transition-all ease-in-out duration-200"
            >
              𝓔𝔁𝓹𝓵𝓸𝓻𝓮 𝓜𝓸𝓻𝓮
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div
        ref={trustSectionRef}
        className="min-h-screen w-full bg-white select-none"
      >
        {/* phase one heading */}
        <div className="min-h-[250px] md:h-[350px] w-full grid place-content-center gap-5 px-4">
          <div>
            <h2 className="text-2xl md:text-3xl text-[#0A3D62] font-bold mb-4 text-center">
              Why Choose MedVault?
            </h2>
          </div>

          {/* phase two paragraph */}
          <div className="w-full max-w-[800px] mx-auto text-center px-2 md:px-6">
            <p className="text-base md:text-lg text-[#2C3E50]">
              At MedVault, your health and trust come first. We work with
              verified doctors and follow strict security to keep your records
              safe. Thousands of patients use MedVault every day to find the
              right doctor, book appointments quickly, and manage their health
              without stress. With us, you can be sure that your care is in safe
              hands.
            </p>
          </div>
        </div>

        {/* phase three adding countup sec */}
        <div className="min-h-[250px] md:h-[350px] w-full grid place-content-center px-4">
          <section className="bg-transparent py-12 w-full">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-teal-600">
                  {isTrustSectionVisible ? (
                    <CountUp end={10000} duration={5} suffix="+" />
                  ) : (
                    "0+"
                  )}
                </h2>
                <p className="text-gray-600">Patients Served</p>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-teal-600">
                  {isTrustSectionVisible ? (
                    <CountUp end={500} duration={5} suffix="+" />
                  ) : (
                    "0+"
                  )}
                </h2>
                <p className="text-gray-600">Doctors Onboard</p>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-teal-600">
                  {isTrustSectionVisible ? (
                    <CountUp end={99} duration={5} suffix="%" />
                  ) : (
                    "0"
                  )}
                </h2>
                <p className="text-gray-600">Data Security</p>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-teal-600">
                  {isTrustSectionVisible ? (
                    <CountUp end={24} duration={5} suffix="/7" />
                  ) : (
                    "0"
                  )}
                </h2>
                <p className="text-gray-600">Support</p>
              </div>
            </div>
          </section>
        </div>

        {/* end div of trust sec */}
      </div>

      {/* famous doctors sec */}
      <div className="min-h-screen w-full bg-white select-none px-4">
        {/* pahse one headline */}
        <div>
          <p className="text-2xl md:text-3xl text-[#0A3D62] font-bold mb-4 text-center">
            Highlighting Medical Excellence
          </p>
        </div>

        {/* doctors container */}
        <div className="h-full w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-5">
          {/* phase two image-1 */}
          <div className="h-auto md:h-[600px] w-full md:w-[450px] border-0 border-black grid place-content-center gap-5">
            {/* phase one of box */}
            <div className="h-[280px] sm:h-[320px] md:h-[360px] w-full max-w-[420px] border-0 border-rose-500 flex justify-center items-center mx-auto">
              <Image
                src={cardioImg}
                alt="Image"
                width={360}
                height={360}
                className="h-full w-[260px] sm:w-[300px] md:w-[360px] rounded-full border-[2px] border-[#0D47A1] hover:scale-110 hover:border-red-400 transition-all ease-in-out duration-500"
              />
            </div>

            {/* phase three of box */}
            <div className="h-auto md:h-[180px] w-full max-w-[420px] border-0 border-rose-500 grid place-content-center gap-2 text-center mx-auto">
              <p className="text-base md:text-lg text-[#0D47A1] font-medium tracking-wide">
                Dr Shruti Mishra
              </p>
              <p className="text-sm md:text-base text-[#0097A7] tracking-widest">
                MBBS (Cardiologist Specialist)
              </p>
              <p className="flex justify-center gap-1">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-sm sm:text-base md:text-lg text-[#FFD700]"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-sm sm:text-base md:text-lg text-[#FFD700]"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-sm sm:text-base md:text-lg text-[#FFD700]"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-sm sm:text-base md:text-lg text-[#FFD700]"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-sm sm:text-base md:text-lg text-[#FFD700]"
                />
              </p>
              <p className="text-[#37474F]">
                Serving Patients{" "}
                <span className="text-[#0D47A1] text-lg font-medium">10+</span>{" "}
                Yrs
              </p>
            </div>
          </div>

          {/* phase two image-2 */}
          <div className="h-auto md:h-[600px] w-full md:w-[450px] border-0 border-black grid place-content-center gap-5">
            <div className="h-[280px] sm:h-[320px] md:h-[360px] w-full max-w-[420px] border-0 border-rose-500 flex justify-center items-center mx-auto">
              <Image
                src={neuroImg}
                alt="Image"
                width={360}
                height={360}
                className="h-full w-[260px] sm:w-[300px] md:w-[360px] rounded-full border-[2px] border-[#0D47A1] hover:scale-110 hover:border-red-400 transition-all ease-in-out duration-500"
              />
            </div>
            <div className="h-auto md:h-[180px] w-full max-w-[420px] border-0 border-rose-500 grid place-content-center gap-2 text-center mx-auto">
              <p className="text-base md:text-lg text-[#0D47A1] font-medium tracking-wide">
                Dr Nikhil Joshi
              </p>
              <p className="text-sm md:text-base text-[#0097A7] tracking-widest">
                MBBS (Neurologist Specialist)
              </p>
              <p className="flex justify-center gap-1">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-sm sm:text-base md:text-lg text-[#FFD700]"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-sm sm:text-base md:text-lg text-[#FFD700]"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-sm sm:text-base md:text-lg text-[#FFD700]"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-sm sm:text-base md:text-lg text-[#FFD700]"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-sm sm:text-base md:text-lg text-[#FFD700]"
                />
              </p>
              <p className="text-[#37474F]">
                Serving Patients{" "}
                <span className="text-[#0D47A1] text-lg font-medium">20+</span>{" "}
                Yrs
              </p>
            </div>
          </div>

          {/* phase two image-3 */}
          <div className="h-auto md:h-[600px] w-full md:w-[450px] border-0 border-black grid place-content-center gap-5">
            <div className="h-[280px] sm:h-[320px] md:h-[360px] w-full max-w-[420px] border-0 border-rose-500 flex justify-center items-center mx-auto">
              <Image
                src={orthoImg}
                alt="Image"
                width={360}
                height={360}
                className="h-full w-[260px] sm:w-[300px] md:w-[360px] rounded-full border-[2px] border-[#0D47A1] hover:scale-110 hover:border-red-400 transition-all ease-in-out duration-500"
              />
            </div>
            <div className="h-auto md:h-[180px] w-full max-w-[420px] border-0 border-rose-500 grid place-content-center gap-2 text-center mx-auto">
              <p className="text-base md:text-lg text-[#0D47A1] font-medium tracking-wide">
                Dr Kalyani Kumari
              </p>
              <p className="text-sm md:text-base text-[#0097A7] tracking-widest">
                MBBS (Orthopedics Specialist)
              </p>
              <p className="flex justify-center gap-1">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-sm sm:text-base md:text-lg text-[#FFD700]"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-sm sm:text-base md:text-lg text-[#FFD700]"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-sm sm:text-base md:text-lg text-[#FFD700]"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-sm sm:text-base md:text-lg text-[#FFD700]"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-sm sm:text-base md:text-lg text-[#FFD700]"
                />
              </p>
              <p className="text-[#37474F]">
                Serving Patients{" "}
                <span className="text-[#0D47A1] text-lg font-medium">13+</span>{" "}
                Yrs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* adding contact us section */}
      <div className="min-h-screen w-full bg-white flex flex-col lg:flex-row justify-center items-center gap-10 selection:bg-rose-300 px-4 select-none">
        {/* pahse-1 about us sec */}
        <div className="w-full max-w-[700px]">
          <h2 className="text-3xl text-[#0A3D62] font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-[#2C3E50]">
            We are always here to help you. If you have any questions, need
            support, or want to know more about MedVault, feel free to reach out
            to us.
          </p>
          <br />
          <p className="text-lg text-[#2C3E50]">
            You can connect with us by email or phone, and our team will be
            happy to assist you.
          </p>
          <br />
          <p className="text-lg">
            📧 Email:{" "}
            <Link
              href="mailto:akshayraj3435@gmail.com"
              className="text-[#2C3E50]"
            >
              akshayraj3435@gmail.com
            </Link>
            <br />
            📞 Phone:{" "}
            <Link href="tel:+91 9142158588" className="text-[#2C3E50]">
              +91 91421 58588
            </Link>
          </p>
          <br />
          {/* add contact link */}
          <div className="h-[40px] w-[250px] rounded-full bg-green-800 border-0 border-green-800 flex justify-center items-center hover:scale-105 transition-all ease-in-out duration-200">
            <Link
              href="/contact"
              className="h-full w-full flex justify-center items-center text-slate-100 tracking-wider font-normal hover:text-white hover:tracking-widest transition-all ease-in-out duration-200"
            >
              𝓔𝔁𝓹𝓵𝓸𝓻𝓮 𝓜𝓸𝓻𝓮
            </Link>
          </div>
        </div>

        {/* pahse-2 image */}
        <div
          id="box"
          className="w-full max-w-[600px] h-auto flex justify-center items-center"
        >
          <Image
            src={contactImg}
            alt="contact image"
            width={580}
            height={400}
            className="w-full max-w-[580px] h-auto border-0 border-slate-500"
          />
        </div>
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405M19 13V7a2 2 0 00-2-2h-3V3H10v2H7a2 2 0 00-2 2v6l-2 2v1h16v-1l-2-2z"
            />
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
