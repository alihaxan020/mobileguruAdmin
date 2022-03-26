import React from "react";
import { useNavigate } from "react-router";
const FilterCard = (props) => {
  const { children, title } = props;
  const navigate = useNavigate();
  return (
    <div>
      <div className="right text-white rounded-2xl pt-3 bg-backgroundGreenColor search card mt-5 bg-[url('assets/images/footerimage.png')] text-center w-full sm:w-[50%] md:w-[60%] lg:w-full mx-auto">
        <h1>Search by {title}</h1>

        <div className="w-full text-white text-sm text-left space-y-3 mt-3 pb-5 pl-2 flex flex-col">
          <div className="space-y-3 mt-3 pb-5 pl-2">{children}</div>
          <div className="w-full text-center text-xs text-white">
            <button
              className="bg-buttonBgColor bg-gradient-to-b p-3 pl-4 pr-4 rounded-md from-buttonBgColorGradian1 to-buttonBgcolorGradian2"
              onClick={() => {
                navigate("/test");
              }}
            >
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
