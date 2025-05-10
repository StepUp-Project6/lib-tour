// src/app/components/fragments/ContactFormFields.js
"use client";

import InputField from "../elements/InputField";
import TextAreaField from "../elements/TextAreaField";

const ContactFormFields = ({ formData, handleChange, errors = {} }) => {
  return (
    <div className="space-y-8">
      <InputField
        label="Nama :"
        name="nama"
        placeholder="Nama Anda"
        value={formData.nama}
        onChange={handleChange}
        error={errors.nama}
      />
      <InputField
        label="Email :"
        type="email"
        name="email"
        placeholder="Email Anda"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <InputField
        label="Subjek :"
        name="subjek"
        placeholder="Subjek"
        value={formData.subjek}
        onChange={handleChange}
        error={errors.subjek}
      />
      <TextAreaField
        label="Pesan :"
        name="pesan"
        placeholder="Tulis pesan Anda di sini... Silakan sampaikan pertanyaan, saran, atau permintaan informasi Anda..."
        value={formData.pesan}
        onChange={handleChange}
        error={errors.pesan}
      />
    </div>
  );
};

export default ContactFormFields;