import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Footer = ({ footerAPI: { titles, links } }) => {
  const [Year, setYear] = useState();
  useEffect(() => {
    const getYear = () => setYear(new Date().getFullYear());
    getYear();
  }, []);
  return (
    <footer className="bg-theme pt-7 pb-5">
      <div className=" nike-container text-slate-200">
        <div className=" grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5">
          {titles.map((val, i) => (
            <div key={i} className="grid items-center ">
              <h1 className=" text-lg lg:text-base md:text-sm font-semibold">
                {val.title}
              </h1>
            </div>
          ))}
          {links.map((list, i) => (
            <ul key={i} className="grid items-center gap-1 ">
              {list.map((link, i) => (
                <li key={i} className="text-sm sm:text-xs ">
                  {link.link}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-5 text-center  ">
          <p className="text-sm md:text-center  bg-[#0D47A1] py-2 rounded">
            <span className="font-semibold "> Ali Soveizi {Year}</span>
            <span className="text-base font-bold mx-2">&copy;</span>
            تمامی حقوق مادی و معنوی این سایت محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
