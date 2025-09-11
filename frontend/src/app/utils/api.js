"use client"; 

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "https://medvaultservice.onrender.com/api"; // backend base url

// ✅ Generic fetch utility
export async function apiFetch(path, options = {}) {
  const body = options.body ? JSON.stringify(options.body) : undefined;

  const res = await fetch(`${API_BASE}${path}`, {
    method: options.method || "POST",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    credentials: "include",
    body,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || errorData.message || "API error");
  }

  return res.json();
}


// ✅ Auth APIs
export const registerUser = (formData) =>
  apiFetch("/register", { method: "POST", body: formData });

export const loginUser = (formData) =>
  apiFetch("/login", { method: "POST", body: formData });

// ✅ Protected APIs (token auto handled by cookie/session)
export const getAppointments = () =>
  apiFetch("/appointments", { method: "GET" });

export const createAppointment = (formData) =>
  apiFetch("/appointments", { method: "POST", body: formData });
