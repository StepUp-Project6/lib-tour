
import React from "react";
import SubTitle from "../../elements/SubTitle";
import ContactForm from "../../layouts/ContactForm";

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center px-[70px] py-20 bg-gradient-to-bl gradient-color-2xl">
      <SubTitle
        title={[
          {
            text: "Hubungi",
            color: "text-primary",
            underline: true,
            first: true,
          },
          { text: "Kami" },
        ]}
      />
      <div className="flex flex-col w-[718px] mt-12">
        <p className="text-base font-normal text-center">
          {`Terima kasih telah mengunjungi halaman kontak kami.`}
        </p>
        <p className="text-base font-normal  text-center">
          {`Kami menghargai setiap pertanyaan, masukan, atau saran yang Anda sampaikan.`}
        </p>
        <p className="text-base font-normal  text-center">
          {`Jangan ragu untuk menghubungi kami — tim kami siap membantu Anda!`}
        </p>
      </div>
      <div className="mt-[60px]">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
