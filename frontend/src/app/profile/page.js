"use client";

import { useState, useEffect } from "react";
import { apiFetch } from "@/app/utils/api";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await apiFetch("/profile", { method: "GET" });
        setUser(res);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
        // If not authenticated, redirect to login
        router.push("/auth/login");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  const handleLogout = async () => {
    try {
      await apiFetch("/logout", { method: "POST" });
      localStorage.removeItem("medvault-user");
      window.dispatchEvent(new Event('userLogout'));
      router.push("/");
    } catch (err) {
      console.error("Logout failed:", err);
      // Still clear localStorage and redirect
      localStorage.removeItem("medvault-user");
      window.dispatchEvent(new Event('userLogout'));
      router.push("/");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-100 text-lg font-medium">Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-lg font-medium">Unable to load profile. Please log in.</p>
      </div>
    );
  }

  // id="bigborder"
  return (
    <div id="bigborder" className="min-h-screen bg-gray-100 py-10 select-none">
      {/* editing on second div */}
      <div className="max-w-4xl mx-auto backdrop-blur-md border-0 border-slate-500 shadow-lg rounded-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-[#6FCFCB] text-3xl font-bold">Patient Profile</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl text-[#6FCFCB] font-semibold mb-4">Personal Information</h2>
            <div className="space-y-2 text-[#fff]">
              <p><strong>Full Name :</strong> {user.fullname}</p>
              <p><strong>Email :</strong> {user.email}</p>
              <p><strong>Age :</strong> {user.age}</p>
              <p><strong>Gender :</strong> {user.gender}</p>
              <p><strong>Phone :</strong> {user.phone}</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl text-[#6FCFCB] font-semibold mb-4">Address</h2>
            <div className="space-y-2 text-[#fff]">
              <p><strong>Address :</strong> {user.address}</p>
              <p><strong>City :</strong> {user.city}</p>
              <p><strong>Postal Code/Zip :</strong> {user.postalcode}</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl text-[#6FCFCB] font-semibold mb-4">Medical Information</h2>
            <div className="space-y-2 text-[#fff]">
              <p><strong>Blood Group :</strong> {user.bloodgroup}</p>
              <p><strong>Weight :</strong> {user.weight} kg</p>
              <p><strong>Allergies :</strong> {user.allergies || "None"}</p>
              <p><strong>Medical History :</strong> {user.medicalhistory || "None"}</p>
              <p><strong>Medications :</strong> {user.medications || "None"}</p>
              <p><strong>Surgeries :</strong> {user.surgeries || "None"}</p>
              <p><strong>Family History :</strong> {user.familyhistory || "None"}</p>
              <p><strong>Lifestyle :</strong> {user.lifestyle || "None"}</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl text-[#6FCFCB] font-semibold mb-4">Emergency Contact</h2>
            <div className="space-y-2 text-[#fff]">
              <p><strong>Name :</strong> {user.emergencycontactname}</p>
              <p><strong>Relationship :</strong> {user.relationship}</p>
              <p><strong>Phone :</strong> {user.emergencycontactphone}</p>
            </div>
          </div>
        </div>

        {user.idproof && user.idproof.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl text-[#6FCFCB] font-semibold mb-4">ID Proofs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {user.idproof.map((proof, index) => (
                <img key={index} src={proof} alt={`ID Proof ${index + 1}`} className="w-full h-32 text-[#fff] object-cover rounded" />
              ))}
            </div>
          </div>
        )}

        {user.prescription && user.prescription.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Prescriptions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {user.prescription.map((pres, index) => (
                <img key={index} src={pres} alt={`Prescription ${index + 1}`} className="w-full h-32 text-[#fff] object-cover rounded" />
              ))}
            </div>
          </div>
        )}
        <div>
          <button
            onClick={handleLogout}
            className="mt-[25px] bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
