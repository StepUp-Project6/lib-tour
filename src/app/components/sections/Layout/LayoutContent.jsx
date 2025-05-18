"use client"

import Link from "next/link";
import SubTitle from "../../elements/SubTitle";
import LayoutGrid from "../../fragments/LayoutGrid";
import PageHeader from "../../fragments/PageHeader";
import { useSound } from "@/app/context/SoundContext";

const LayoutContent = ({ title, images }) => {
  const newTitle = title.replace(" ", "|").split("|");
  const { playClickSound } = useSound();
  return (
    <div className="pb-20 bg-gradient-to-bl gradient-color-xl">
      <PageHeader title="Layout" />
      <div className="flex items-center gap-2 px-[70px] pt-16">
        <Link href="/layout" type="button" onClick={playClickSound}>
          <img src="/svg/icon-back.svg" alt="" />
        </Link>
      </div>
      <div className="px-[70px]">
        <div className="flex justify-center py-10 mb-5">
          <h2 className="text-[36px] ">
            {newTitle[0]}{" "}
            <span className="text-primary font-bold">{newTitle[1]}</span>
          </h2>
        </div>
        <LayoutGrid images={images} />
      </div>
    </div>
  );
};

export default LayoutContent;
