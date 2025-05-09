import React from "react";
import SubTitle from "../../elements/SubTitle";

const LocationAndAccess = () => {
  return (
    <div className="flex flex-col items-center px-[70px] py-20">
      <SubTitle
        title={[
          {
            text: "Lokasi & Akses",
            color: "text-primary",
            underline: true,
            first: true,
          },
          { text: "Ke Perpustakaan" },
        ]}
      />
      <div className="flex flex-col w-[718px] mt-12">
        <p className="text-base font-normal text-center">
          {`Perpustakaan UPN "Veteran" Yogyakarta dapat diakses dari berbagai titik kampus. `}
        </p>
        <p className="text-base font-normal text-center">
          {`Jelajahi lokasi sekitar melalui virtual tour atau panduan jalan kaki dari titik-titik populer seperti parkiran luar, gedung fakultas, atau gerbang utama.`}
        </p>
      </div>
    </div>
  );
};

export default LocationAndAccess;
