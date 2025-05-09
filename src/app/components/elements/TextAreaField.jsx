// src/app/components/elements/TextAreaField.js
"use client";

const TextAreaField = ({ label, name, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="text-xl font-medium mb-3">{label}</label>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-[856px] h-[200px] px-4 py-3 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder-[#606060]"
        rows={5}
      />
    </div>
  );
};

export default TextAreaField;