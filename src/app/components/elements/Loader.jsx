import React from "react";
import TitleHeader from "./TitleHeader";
import Image from "next/image";
import Background from "../fragments/Background";

const Loader = () => {
  return (
    <>
      <div className="relative h-full w-full flex items-center justify-start pl-[72px]">
      <div className="w-96 h-96 rounded-full bg-primary absolute blur-[200px] left-[100px] top-1/3"></div>
        <div className="inset-0 z-50 flex flex-col items-start justify-center">
          <p className="text-[40px] text-black font-extrabold">Memuat <span className="text-primary"> Virtual Tour...</span></p>
          <div className="loader"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
