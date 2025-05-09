"use client";

import Image from "next/image";
import LoaderProvider from "./components/fragments/LoaderProvider";
import Background from "./components/fragments/Background";
import TitleHeader from "./components/elements/TitleHeader";
import Button from "./components/elements/Button";
import Link from "next/link";
import HeroSection from "./components/sections/Landing/HeroSection";

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen bg-white">
      <LoaderProvider>
        <HeroSection />
      </LoaderProvider>
      <div className="static mt-[181px]">
        <Image
          src="/images/gedung-perpus3.png"
          alt=""
          className="w-[602px] h-[508px] rounded-[40px] object-contain z-20"
          width={602}
          height={508}
        />
        {/* <div className="bg-primary rounded-r-[107px] w-[107px] h-[509px] absolute top-0 right-0"></div> */}
      </div>
    </main>
  );
}
