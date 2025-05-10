// src/app/components/elements/InputField.js
"use client";

const InputField = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-xl font-medium mb-3">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-[856px] h-[66px] px-4 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder-[#606060] ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
