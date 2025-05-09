import React from "react";
import TitleHeader from "../../elements/TitleHeader";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col px-[60px] 2xl:px-[70px] pt-[254px] gap-8">
      <h1 className="text-[40px] font-extrabold text-black leading-tight">
        Selamat Datang di{" "}
        <span className="text-primary">Virtual Tour Perpustakaan</span> UPN
        Veteran Yogyakarta
      </h1>
      <p className="text-lg font-medium text-left text-black pr-20">
        Jelajahi fasilitas perpustakaan kami secara online, di mana saja dan
        kapan saja.
      </p>
      <Link
        href="/profile"
        type="button"
        className="w-fit bg-primary text-white hover:border hover:border-white rounded-lg py-3 px-[26px] hover:shadow-lg hover:shadow-primary hover:text-shadow-lg transition-all duration-300"
      >
        Explore
      </Link>
    </div>
  );
};

export default HeroSection;
