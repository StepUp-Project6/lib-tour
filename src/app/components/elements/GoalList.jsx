import React from "react";

const GoalList = ({ goals }) => {
  return (
    <div className="flex items-center gap-4 mt-7">
      <img src={goals.icon} alt="" />
      <p className="text-black text-base font-normal leading-6 text-justify">
        {goals.title}
      </p>
    </div>
  );
};

export default GoalList;
