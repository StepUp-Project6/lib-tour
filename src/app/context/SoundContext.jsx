// src/app/context/SoundContext.js
"use client";

import { createContext, useContext, useRef } from "react";

const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
  const audioRef = useRef(null);

  const playClickSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
  };

  return (
    <SoundContext.Provider value={{ playClickSound }}>
      {children}
      <audio ref={audioRef} src="/sounds/click-sound-4.mp3" preload="auto" />
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
};