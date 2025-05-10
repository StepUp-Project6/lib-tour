import React from "react";
import LeadershipTable from "../../layouts/LeadershipTable";
import leadersData from "../../../utils/leaders.json";
import SubTitle from "../../elements/SubTitle";
const Leader = () => {
  return (
    <div className="relative px-[70px] pt-10 pb-40 bg-gradient-to-br gradient-color">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl gradient-color"></div>
      <div className="w-96 h-[580px] rounded-[50%] bg-gray-400/65 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 blur-[200px]"></div>
      <div className="flex flex-col gap-5 ">
        <div className="flex flex-col ">
          <SubTitle
            title={[
              {
                text: "Sekilas Perkembangan UPT",
              },
            ]}
          />
          <SubTitle
            title={[
              {
                text: "Perpustakaan UPN",
                color: "text-primary",
              },
            ]}
          />
        </div>
        <p className="text-base">
          {`Perpustakaan UPN “Veteran” Yogyakarta keberadaannya dimulai sejak tahun 1964 berlokasi di kampus Ketandan Wetan nomor 22 Yogyakarta. Tahun 1976 pindah ke Kampus II Tambakbayan Tahun 1999 UPT Perpustakaan UPN ”Veteran” Yogyakarta  pindah ke Kampus Terpadu Condongcatur menempati gedung Yos Sudarso, tahun 2000 mulai menggunakan system automasi, kemudian tahun 2011 mulai merintis perpustakaan digital (Digilib).`}
        </p>
        <p className="text-base">
          {`Masa Periode Kepemimpinan Kepala Perpustakaan Pusat UPN "Veteran" Yogyakarta`}
        </p>
      </div>

      <div className="container mx-auto p-4">
        <LeadershipTable data={leadersData.leaders} />
      </div>
    </div>
  );
};

export default Leader;
