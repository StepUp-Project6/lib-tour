"use client"

import React from "react";
import PageHeader from "../components/fragments/PageHeader";
import ContactForm from "../components/sections/Contact/ContactSection";
import { FormspreeProvider } from "@formspree/react";

const page = () => {
  return (
    <>
      <FormspreeProvider>
        <PageHeader title="Kontak" />
        <ContactForm />
      </FormspreeProvider>
    </>
  );
};

export default page;
