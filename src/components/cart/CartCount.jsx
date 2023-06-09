/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";
import { HiChevronDoubleRight } from "react-icons/hi";
const CartCount = ({ totalQTY, onCartToggle, ocClearCartItems }) => {
  return (
    <>
      <div className="bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full">
        <div className="flex items-center gap-3">
          <div
            className="grid items-center cursor-pointer "
            onClick={onCartToggle}
          >
            <HiChevronDoubleRight className="w-5 h-5 text-slate-900 hover:text-gray-500 stroke-[2] transition-all duration-150" />
          </div>
          <div className="grid items-center">
            <h1 className="text-base font-medium text-slate-900">
              سبد خرید
              <span className="bg-theme-cart rounded mx-2 px-1 py-0.5 text-slate-100 font-normal text-xs">
                ({totalQTY} محصول)
              </span>
            </h1>
          </div>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className="rounded bg-theme-cart active:scale-90 p-0.5"
            onClick={ocClearCartItems}
          >
            <AiOutlineClose className="w-5 h-5  text-white hover:bg-red-900  transition-all duration-150" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
