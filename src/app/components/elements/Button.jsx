"use client";

const Button = ({ 
  children, 
  onClick = () => {},
  classname = "", 
  type = "button",
  disabled = false
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`text-white ${classname}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;