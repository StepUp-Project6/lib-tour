// src/app/components/elements/LayoutImageCard.js
import Image from "next/image";

const LayoutImageCard = ({ image, description }) => {
  return (
    <div className="flex flex-col">
      <div className="rounded-lg">
        <Image
          src={image}
          alt={description}
          className="object-cover w-[413px] h-[309px]"
          width={413}
          height={309}
        />
      </div>
      <p className="text-base font-normal mt-4 text-center">{description}</p>
    </div>
  );
};

export default LayoutImageCard;