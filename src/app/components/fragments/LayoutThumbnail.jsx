"use client"

import Image from "next/image";
import Button from "../elements/Button";
import Link from "next/link";
import { useSound } from "@/app/context/SoundContext";

const LayoutThumbnail = ({ item }) => {
  const { playClickSound } = useSound();

  return (
    <div className="relative w-full h-[295px]">
      <div className="relative w-full h-full">
        <Image
          src={item.image}
          alt=""
          className="w-full h-full object-cover rounded-[40px] rounded-br-[100px]"
          width={500}
          height={295}
        />
      </div>
      <div className="absolute inset-0 bg-black/40 rounded-[40px] rounded-br-[100px]"></div>
      <div className="absolute top-0 -left-10 translate-x-1/2 translate-y-1/2 transform text-center text-[32px] font-bold text-white">
        {item.name}
      </div>
      <Link 
        href={`${item.link}`}
        onClick={playClickSound}
        target="_blank"
        passHref
      >
        <Button classname="absolute top-1/2 left-1/2 -translate-x-2/3 -translate-y-1/2 transform bg-primary p-3 rounded-lg hover:border hover:border-white hover:shadow-lg hover:shadow-primary hover:text-shadow-lg transition-all duration-500 ease-in-out">
          Lihat Sekarang
        </Button>
      </Link>
    </div>
  );
};

export default LayoutThumbnail;