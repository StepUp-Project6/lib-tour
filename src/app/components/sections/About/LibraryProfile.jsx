import React from "react";
import SubTitle from "../../elements/SubTitle";
import GoalList from "../../elements/GoalList";
import ImageCarousel from "../../layouts/ImageCarousel";

const LibraryProfile = () => {
  const images = [
    "/images/profile/lobby-1.png", 
    "/images/profile/lobby-2.png", 
    "/images/profile/lobby-3.png", 
  ];
  const goals = [
    {
      icon: "/svg/tujuan-1.svg",
      title: "Menyediakan layanan informasi dan referensi berkualitas.",
    },
    {
      icon: "/svg/tujuan-2.svg",
      title: "Meningkatkan literasi informasi sivitas akademika.",
    },
    {
      icon: "/svg/tujuan-3.svg",
      title: "Menyediakan akses ke koleksi cetak dan digital secara merata.",
    },
  ];
  return (
    <div className="px-[70px] py-20">
      <div className="grid grid-cols-2">
        <div className="container mx-auto p-4">
          <ImageCarousel images={images} />
        </div>
        <div className="grid grid-rows-2 gap-0 pl-14">
          <div className="flex flex-col">
            <SubTitle
              title={[
                { text: "Profil" },
                {
                  text: "Perpustakaan",
                  color: "text-primary",
                  underline: true,
                },
              ]}
            />
            <div className="flex flex-col pr-[60px]">
              <p className="text-black text-base font-normal mt-12 mb-7">
                NPP: 3404072D2006489
              </p>
              <p className="text-black text-base font-normal leading-6 text-justify">
                {`Perpustakaan UPN "Veteran" Yogyakarta merupakan pusat sumber
              informasi dan pembelajaran yang mendukung kegiatan akademik,
              penelitian, dan pengabdian masyarakat sivitas akademika.`}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <SubTitle
              title={[
                { text: "Tujuan" },
                {
                  text: "Perpustakaan",
                  color: "text-primary",
                  underline: true,
                },
              ]}
            />
            <div className="flex flex-col pr-[60px]">
              {goals.map((goals, index) => (
                <GoalList key={index} goals={goals} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryProfile;
