import { BsStarFill } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";

const Item = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  return (
    <div
      className={`relative bg-gradient-to-b ${color}   grid items-center ${
        ifExists ? "justify-items-start" : "justify-items-center"
      }   rounded-xl py-4 px-5 transition-all duration-300 ease-in-out w-full shadow-md shadow-slate-400 hover:shadow-lg hover:shadow-slate-500 `}
    >
      <div
        className={`grid items-center  ${
          ifExists ? "justify-items-start" : "justify-items-center"
        } `}
      >
        <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow ">
          {title}
        </h1>
        <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
          {text}
        </p>
        <div className="flex items-center  justify-between w-28 my-2">
          <div className="flex items-center  px-1 rounded ">
            <h1 className=" text-lg text-white font-medium ">${price}</h1>
          </div>
          <div className="flex items-center gap-1 ">
            <BsStarFill className="icon-style  w-5 h-5 md:w-4 md:h-4" />
            <h1 className="md:text-sm font-normal text-slate-200 ">{rating}</h1>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <button
            type="button"
            className="bg-white/90  border-4 border-[#1B5E20] button-theme p-0.5 shadow "
          >
            <FaShoppingBag className="icon-style text-[#1B5E20]" />
          </button>
          <button
            type="button"
            className="bg-white/90 text-[#5C2751] border-4 border-[#5C2751] blur-effect-theme button-theme px-2 py-1 shadow text-sm font-medium"
          >
            {btn}
          </button>
        </div>
      </div>
      <div
        className={`flex items-center 
      ${ifExists ? "absolute top-5 left-1" : "justify-center"} 
      `}
      >
        <img
          src={img}
          alt={`img/item-img/${id}`}
          className={`mt-3 
        ${
          ifExists
            ? "h-auto w-64 lg:w-56 md:w-48 sm:w-40 xsm:w-32 -rotate-[25deg]"
            : "h-36 w-64 "
        } 
        `}
        />
      </div>
    </div>
  );
};

export default Item;
