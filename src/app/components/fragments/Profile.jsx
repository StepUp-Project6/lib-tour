import React from "react";

const Profile = ({ profile, classname }) => {
  return (
    <div className={`${classname}`}>
      <div className="grid grid-rows-4">
        {profile.map((item, index) => (
          <div key={index} className="flex flex-row">
            <div className="flex justify-between w-[122px]">
              <p>{item.key}</p>
              <p>:</p>
            </div>
            <div className="flex justify-start w-fit ps-4">
              <p className="text-left">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
