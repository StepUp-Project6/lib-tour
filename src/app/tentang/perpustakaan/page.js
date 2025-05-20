import PageHeader from "@/app/components/fragments/PageHeader";
import Leader from "@/app/components/sections/About/Leader";
import LibraryProfile from "@/app/components/sections/About/LibraryProfile";
import React from "react";

const page = () => {
  return (
    <div>
      <PageHeader title="Tentang " />
      <LibraryProfile />
      <Leader />
    </div>
  );
};

export default page;
