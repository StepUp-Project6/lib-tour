// src/app/components/elements/Background.js
"use client";

const Background = ({
  src,
  alt = "",
  className = "",
  overlay = false,
  children,
}) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {src && (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {overlay && <div className="absolute inset-0 bg-black/20" />}

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;
