"use client";
import Image from "next/image";
import logo from "../../assets/medvaultlogo.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faFacebook, faInstagram, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function FooterBar() {
  return (
    <>
      <div className="w-full bg-[#000] flex flex-col md:flex-row justify-between items-center p-6 md:p-[25px] gap-8 md:gap-0 select-none">
        {/* first row */}
        <div className="w-full sm:w-[350px] grid gap-4">
          {/* logo */}
          <div className="flex justify-center items-center">
            <div className="h-[50px] w-[50px]">
              <Image
                src={logo}
                alt="MedVault Logo"
                className="h-full w-full rounded-full"
              />
            </div>
          </div>
          {/* brand */}
          <div className="text-center">
            <p className="text-2xl text-gray-300 font-medium tracking-widest">
              MedVault
            </p>
          </div>
          {/* brand-summary */}
          <div className="text-center">
            <p className="text-md text-gray-400 font-normal tracking-wide">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-500">
                ➤
              </span>{" "}
              MedVault is a modern healthcare web application that makes booking
              medical appointments simple and secure.
            </p>
          </div>
          <div className="text-center">
            <p className="text-md text-gray-400 font-normal tracking-wide">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-500">
                ➤
              </span>{" "}
              Users can easily register, log in, and schedule consultations with
              trusted doctors across different specialties like cardiology,
              neurology, and orthopedics.
            </p>
          </div>
        </div>

        {/* second row */}
        <div className="w-full sm:w-[350px] grid gap-4">
          {/* logo */}
          <div className="flex justify-center items-center">
            <div className="h-[50px] w-[50px]">
              <Image
                src={logo}
                alt="MedVault Logo"
                className="h-full w-full rounded-full"
              />
            </div>
          </div>
          {/* about */}
          <div className="text-center">
            <p className="text-2xl text-gray-300 font-medium tracking-widest">
              About
            </p>
          </div>
          {/* about-summary */}
          <div className="text-center">
            <p className="text-md text-gray-400 font-normal tracking-wide">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-500">
                ➤
              </span>{" "}
              A futuristic medical records & management platform.
            </p>
          </div>
          <div className="text-center">
            <p className="text-md text-gray-400 font-normal tracking-wide">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-500">
                ➤
              </span>{" "}
              Secure, simple, and smart healthcare data handling
            </p>
          </div>
          <div className="text-center">
            <p className="text-md text-gray-400 font-normal tracking-wide">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-500">
                ➤
              </span>{" "}
              Built for patients and doctors, with privacy at the core.
            </p>
          </div>
        </div>

        {/* third row */}
        <div className="w-full sm:w-[350px] grid text-center gap-6">
          {/* logo */}
          <div className="flex justify-center items-center">
            <div className="h-[50px] w-[50px]">
              <Image
                src={logo}
                alt="MedVault Logo"
                className="h-full w-full rounded-full"
              />
            </div>
          </div>
          {/* contact */}
          <div>
            <p className="text-2xl text-gray-300 text-center font-medium tracking-widest">
              Contact
            </p>
          </div>
          {/* contact-phone */}
          <div>
            <Link
              href="tel:+9142158588"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-300 hover:text-rose-400 hover:underline hover:underline-offset-8 decoration-rose-400 transition-colors ease-in-out duration-200"
            >
              <span className="text-gray-400">
                <span className="bg-gradient-to-r from-teal-400 to-cyan-500">
                  ➤
                </span>{" "}
              </span>
              Call us on{" "}
              <FontAwesomeIcon
                icon={faPhone}
                className="text-sm sm:text-base md:text-lg text-rose-500 hover:text-rose-600 cursor-pointer transition-colors duration-200"
              />
            </Link>
          </div>
          {/* contact-email */}
          <div>
            <Link
              href="mailto:akshayraj3435@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-300 hover:text-rose-400 hover:underline hover:underline-offset-8 decoration-rose-400 transition-colors ease-in-out duration-200"
            >
              <span className="text-gray-400">
                <span className="bg-gradient-to-r from-teal-400 to-cyan-500">
                  ➤
                </span>{" "}
              </span>
              Email us on{" "}
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-sm sm:text-base md:text-lg text-rose-500 hover:text-rose-600 cursor-pointer transition-colors duration-200"
              />
            </Link>
          </div>
          {/* contact-summary */}
          <div>
            <Link
              href="https://wa.me/9142158588"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-300 hover:text-rose-400 hover:underline hover:underline-offset-8 decoration-rose-400 transition-colors ease-in-out duration-200"
            >
              <span className="text-gray-400">
                <span className="bg-gradient-to-r from-teal-400 to-cyan-500">
                  ➤
                </span>{" "}
              </span>
              Chat with us on{" "}
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-sm sm:text-base md:text-lg text-rose-500 hover:text-rose-600 cursor-pointer transition-colors duration-200"
              />
            </Link>
          </div>
          {/* contact-summary */}
          <div>
              <span className="text-gray-400">
                <span className="bg-gradient-to-r from-teal-400 to-cyan-500">
                  ➤
                </span>{" "}
              Follow us on{" "}
              </span>
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-sm sm:text-base md:text-lg text-teal-400 hover:text-teal-600 cursor-pointer transition-colors duration-200"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-sm sm:text-base md:text-lg text-teal-400 hover:text-teal-600 cursor-pointer transition-colors duration-200"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-sm sm:text-base md:text-lg text-teal-400 hover:text-teal-600 cursor-pointer transition-colors duration-200"
              />
              <FontAwesomeIcon
                icon={faGithub}
                className="text-sm sm:text-base md:text-lg text-teal-400 hover:text-teal-600 cursor-pointer transition-colors duration-200"
              />
          </div>
        </div>
      </div>

      {/* styling space */}
      <div className="h-[0.1px] w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-red-500"></div>

      {/* end */}
      <div className="h-[50px] w-full bg-[#0A3D62] flex justify-center items-center p-[25px]">
        <p className="text-gray-400 text-sm select-none">© {new Date().getFullYear()} MedVault</p>
      </div>
    </>
  );
}