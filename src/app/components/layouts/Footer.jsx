// src/app/components/layouts/Footer.js
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative pt-16 pb-20">
      <div className="w-96 h-[580px] rounded-[50%] bg-gray-400/65 absolute top-1/2 left-1/2 translate-x-1/2 -translate-y-1/2 blur-[200px]"></div>
      <div className="w-96 h-[580px] rounded-[50%] bg-orange-200 absolute top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 blur-[260px]"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-2 font-semibold text-center justify-center items-center">
          <h5 className="text-black text-xl mb-4">
            {"LinkedIn   :"}{" "}
            <span className="text-primary">{` Assyfa Wirdya Kuswoyo`}</span>
          </h5>
          <h5 className="text-black text-xl">
            {"Email   :"}{" "}
            <span className="text-primary">{` assyfawirdya123@gmail.com`}</span>
          </h5>
          <div className="pt-10 mb-8">
            <Image src="/images/upn-logo.png" width={183} height={157} alt="" />
          </div>
          <h6 className="text-xl mb-4">{`TEKNIK GEOMATIKA UPN “VETERAN” YOGYAKARTA`}</h6>
          <p className="font-normal">{`2025 LibTour. All Rights Reserved`}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
