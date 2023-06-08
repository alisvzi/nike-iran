import { HiArrowNarrowRight } from "react-icons/hi";
import emptybag from "../../assets/emptybag.png";

const CartEmpty = ({ onCartToggle }) => {
  return (
    <>
      <div className="flex items-center justify-center flex-col h-screen px-11 text-center gap-7">
        <img
          src={emptybag}
          alt="emptybag/img"
          className="w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110"
        />
        <button
          type="button"
          className="button-theme bg-[#5C2751] text-white shadow-lg shadow-[#5C2751] duration-200 ease-in-out hover:bg-[#883978]
           flex items-center justify-center  py-2 gap-3 text-sm px-5 font-semibold active:scale-110"
          onClick={onCartToggle}
        >
          <HiArrowNarrowRight className="w-5 h-5 " />
          <span className=""> برگشت به فروشگاه نایکی </span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
