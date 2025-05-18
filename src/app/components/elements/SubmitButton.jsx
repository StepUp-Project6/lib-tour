import { useSound } from "@/app/context/SoundContext";

const SubmitButton = ({ disabled = false , text = "Kirim Pesan"}) => {
  const { playClickSound } = useSound();

  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={playClickSound}
      className="w-fit py-3 px-[18px] bg-primary text-white rounded-lg text-lg font-medium hover:border hover:border-white hover:shadow-lg  hover:shadow-primary hover:text-shadow-lg transition-all duration-500 ease-in-out"
    >
      {text}
    </button>
  );
};

export default SubmitButton;