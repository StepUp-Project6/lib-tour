import React from "react";
import PageHeader from "../components/fragments/PageHeader";
import LocationAndAccess from "../components/sections/Location/LocationAndAccess";
import LayoutList from "../components/sections/Layout/LayoutList";

const page = () => {
  return (
    <>
      <PageHeader title="Denah" />
      <LayoutList />
    </>
  );
};

export default page;
