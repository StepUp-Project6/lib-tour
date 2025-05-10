// src/app/components/sections/ContactForm.js
"use client";

import { useState } from "react";
import ContactFormFields from "../fragments/ContactFormFields";
import SubmitButton from "../elements/SubmitButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    subjek: "",
    pesan: ""
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); // 'sending', 'success', 'error'
  const [formError, setFormError] = useState("");

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nama.trim()) {
      newErrors.nama = "Nama harus diisi";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email harus diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }
    
    if (!formData.subjek.trim()) {
      newErrors.subjek = "Subjek harus diisi";
    }
    
    if (!formData.pesan.trim()) {
      newErrors.pesan = "Pesan harus diisi";
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length > 0) {
      setFormError("Harap perbaiki kesalahan sebelum mengirim");
      return;
    }
    
    setStatus("sending");
    setFormError("");

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          nama: "",
          email: "",
          subjek: "",
          pesan: ""
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Gagal mengirim pesan");
      }
    } catch (err) {
      setStatus("error");
      setFormError(err.message || "Terjadi kesalahan saat mengirim pesan");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {formError && (
        <div className="w-[856px] p-4 mb-6 bg-red-100 text-red-700 rounded-lg">
          {formError}
        </div>
      )}
      
      {status === "success" && (
        <div className="w-[856px] p-4 mb-6 bg-green-100 text-green-700 rounded-lg">
          Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.
        </div>
      )}
      
      <ContactFormFields 
        formData={formData} 
        handleChange={handleChange}
        errors={errors}
      />
      
      <div className="mt-16 flex justify-center">
        <SubmitButton 
          disabled={status === "sending"} 
          text={status === "sending" ? "Mengirim..." : "Kirim Pesan"} 
        />
      </div>
    </form>
  );
};

export default ContactForm;