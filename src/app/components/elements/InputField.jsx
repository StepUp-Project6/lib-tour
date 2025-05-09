// src/app/components/elements/InputField.js
"use client";

const InputField = ({ label, type = "text", name, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="text-xl font-medium mb-3">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-[856px] h-[66px] px-4 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder-[#606060]"
      />
    </div>
  );
};

export default InputField;