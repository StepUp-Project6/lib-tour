// src/app/components/fragments/CarouselControls.js
import CarouselDot from '../elements/CarouselDot';

const CarouselControls = ({ count, activeIndex, setActiveIndex }) => {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-10 z-10">
      {Array.from({ length: count }).map((_, index) => (
        <CarouselDot
          key={index}
          active={index === activeIndex}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

export default CarouselControls;