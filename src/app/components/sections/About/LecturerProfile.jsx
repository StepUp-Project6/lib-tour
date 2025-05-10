import React from "react";
import Profile from "../../fragments/Profile";
import SubTitle from "../../elements/SubTitle";

const LecturerProfile = () => {
  const profile = [
    {
      key: "Nama",
      value: "Assyfa Wirdya Kuswoyo",
    },
    {
      key: "NIM",
      value: "117210009",
    },
    {
      key: "Fakultas",
      value: "Teknologi Mineral",
    },
    {
      key: "Prodi",
      value: "Teknik Geomatika",
    },
  ];
  return (
    <div className="px-[70px] py-20 bg-gradient-to-br gradient-color">
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <SubTitle
            title={[
              {
                text: "Profil",
              },
              {
                text: "Dosen",
                color: "text-primary",
                underline: true,
              },
            ]}
          />
          <Profile profile={profile} classname="mt-14" />
        </div>
        <div className="">
          <img
            src="/images/profile/dummy.png"
            className="w-[634px] h-[494px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LecturerProfile;
