import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { truncate } from "lodash";
import { BsClock, BsFillHeartFill } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import Title from "./utils/Title";
const Stories = ({ story: { title, news } }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  return (
    <div className="mt-7 nike-container mb-11">
      <Title title={title} />
      <div className="mt-7">
        <Splide dir="ltr" options={splideOptions}>
          {news.map((val, i) => (
            <SplideSlide key={i} className="mb-0.5">
              <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200 h-full">
                <div className="flex items-center justify-center ">
                  <img
                    src={val.img}
                    alt={`img/story/${i}`}
                    className="w-full h-[300px] object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg "
                  />
                </div>

                <div
                  dir="rtl"
                  className="flex items-center justify-between w-full px-4"
                >
                  <div className=" flex items-center gap-0.5 ">
                    <BsFillHeartFill className="icon-style text-[#B71C1C] w-5 h-5 " />
                    <span className="text-xs font-bold ">{val.like}</span>
                  </div>
                  <div className=" flex items-center gap-0.5 ">
                    <BsClock className="icon-style w-5 h-5 text-black" />
                    <span className="text-xs font-bold ">{val.time}</span>
                  </div>
                  <div className=" flex items-center gap-0.5 ">
                    <FaHashtag className="icon-style h-4 w-4 text-blue-600 " />
                    <span className="text-xs font-bold text-blue-600 ">
                      {val.by}
                    </span>
                  </div>
                </div>
                <div
                  dir="rtl"
                  className="grid items-center justify-items-start px-4"
                >
                  <h1 className="text-base font-semibold lg:text-sm ">
                    {val.title}
                  </h1>
                  <p className="text-sm text-justify  lg:text-xs">
                    {truncate(val.text, { length: 175 })}
                  </p>
                </div>
                <div className="flex items-center justify-center px-4 w-full">
                  <a
                    href={val.url}
                    role="button"
                    target="_blank"
                    className="w-full bg-[#5C2751]  transition-all duration-200 ease-in-out hover:bg-[#883978] shadow-md shadow-black text-center  text-slate-100 py-1.5 button-theme"
                    rel="noreferrer"
                  >
                    {val.btn}
                  </a>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Stories;
