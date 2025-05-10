import React from "react";
import SubTitle from "../../elements/SubTitle";
import Profile from "../../fragments/Profile";

const WriterProfile = () => {
    const profile = [
        {
            key : "Nama",
            value : "Assyfa Wirdya Kuswoyo"
        },
        {
            key : "NIM",
            value : "117210009"
        },
        {
            key : "Fakultas",
            value : "Teknologi Mineral"
        },
        {
            key : "Prodi",
            value : "Teknik Geomatika"
        }
    ];
  return (
    <div className="relative px-[70px] py-20 bg-gradient-to-bl gradient-color">
      <div className="absolute right-0">
        <img src="/images/lamp-grafity.png" alt="" className="w-[300px]" />
      </div>
      <div className="grid grid-cols-2">
        <div className="">
          <img
            src="/images/profile/dummy.png"
            className="w-[634px] h-[494px]"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <SubTitle
            title={[
              {
                text: "Profil",
              },
              {
                text: "Penulis",
                color: "text-primary",
                underline: true,
              },
            ]}
          />
          <Profile profile={profile} classname="mt-14" />
        </div>
      </div>
    </div>
  );
};

export default WriterProfile;
