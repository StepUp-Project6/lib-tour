// src/app/components/fragments/LayoutGrid.js

import LayoutImageCard from "../elements/LayoutImageCard";

const LayoutGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {images.map((img) => (
        <LayoutImageCard
          key={img.id}
          image={img.image}
          description={img.desc}
        />
      ))}
    </div>
  );
};

export default LayoutGrid;