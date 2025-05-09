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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will go here
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <ContactFormFields formData={formData} handleChange={handleChange} />
      <div className="mt-20 flex justify-center">
        <SubmitButton />
      </div>
    </form>
  );
};

export default ContactForm;