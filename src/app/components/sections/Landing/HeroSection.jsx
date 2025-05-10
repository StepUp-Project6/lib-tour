import React from "react";
import TitleHeader from "../../elements/TitleHeader";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col px-[60px] 2xl:px-[70px] pt-[201px] gap-8">
      <div className="w-96 h-96 rounded-full bg-primary absolute blur-[200px] left-[100px] top-1/3"></div>
      <h1 className="text-[40px] font-extrabold text-black leading-tight text-shadow-xl">
        Selamat Datang di{" "}
        <span className="text-primary">Virtual Tour Perpustakaan</span> UPN
        Veteran Yogyakarta
      </h1>
      <p className="text-lg font-medium text-left text-black pr-20">
        Jelajahi fasilitas perpustakaan kami secara online, di mana saja dan
        kapan saja.
      </p>
      <Link
        href="/about/library"
        type="button"
        className="w-fit bg-primary text-white  rounded-lg py-3 px-[26px] hover:border hover:border-white hover:shadow-lg  hover:shadow-primary hover:text-shadow-lg transition-all duration-500 ease-in-out"
      >
        Explore
      </Link>
    </div>
  );
};

export default HeroSection;
