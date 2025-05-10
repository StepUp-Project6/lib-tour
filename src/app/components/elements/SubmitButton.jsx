// src/app/components/elements/SubmitButton.js
const SubmitButton = ({ disabled = false , text = "Kirim Pesan"}) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="w-fit py-3 px-[18px] bg-primary text-white rounded-lg text-lg font-medium hover:border hover:border-white hover:shadow-lg  hover:shadow-primary hover:text-shadow-lg transition-all duration-500 ease-in-out"
    >
      {text}
    </button>
  );
};

export default SubmitButton;