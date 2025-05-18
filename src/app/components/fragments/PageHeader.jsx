import Image from "next/image";
import React from "react";

const PageHeader = ({ title }) => {
  return (
    <div className="relative">
      <Image
        src="/images/tentang-header.png"
        alt=""
        className="w-full h-[255px] object-cover"
        width={1440}
        height={335}
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[40px] font-extrabold text-white">
        {title}
      </h1>
    </div>
  );
};

export default PageHeader;
