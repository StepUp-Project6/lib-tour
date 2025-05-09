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
    <div className="px-[70px] py-20">
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
                color: "text-primary",
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
