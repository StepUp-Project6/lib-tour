// src/app/components/elements/CarouselDot.js
const CarouselDot = ({ active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-3 h-3 rounded-full transition-all duration-300 ${
        active ? 'bg-white scale-150' : 'bg-white/40 scale-100'
      }`}
    />
  );
};

export default CarouselDot;