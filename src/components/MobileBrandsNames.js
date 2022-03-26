import React from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { isFilterMobile } from "../redux/actions/mobileActions";
const firstColmn = ["Apple", "Samsung", "Nokia", "Google"];
const secondColmn = ["Oppo", "Vivo", "OnePlus", "Infinix"];
const thirdColmn = ["HTC", "Techno", "Sony", "LG"];
const MobileBrandsNames = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleIsFilter = (value) => dispatch(isFilterMobile(value));
  return (
    <>
      <div className="card rounded-tl-[4rem] mt-6 lg:mt-0  rounded-b-[4rem] bg-backgroundGreenColor w-full sm:w-[50%] md:w-[60%] lg:w-full mx-auto">
        <div className="cardRow w-full text-center pt-5 pb-5 text-white">
          <h1>Mobile Brands Names</h1>
        </div>
        <div className="w-full border-b border-white mr-2  "></div>
        <div className="flex text-xs lg:text-sm pl-3 pr-3">
          <div className="w-[33%] space-y-5 mt-2 lg:mt-5  pb-[2.5rem]  lg:pb-[8rem] text-white">
            {firstColmn.map((item) => (
              <h2
                className="cursor-pointer"
                onClick={() => {
                  navigate("/MobileList", {
                    state: { title: "BrandName", item, isFilter: true },
                  });
                  handleIsFilter(true);
                }}
                key={`${item}-${Math.floor(Math.random() * 10000)}`}
              >
                {item}
              </h2>
            ))}
          </div>
          <div className="border-l  border-white mr-2 "></div>
          <div className="w-[33%] space-y-5 text-white mt-2 lg:mt-5">
            {secondColmn.map((item) => (
              <h2
                className="cursor-pointer"
                onClick={() => {
                  navigate("/MobileList", {
                    state: { title: "BrandName", item, isFilter: true },
                  });
                  handleIsFilter(true);
                }}
                key={`${item}-${Math.floor(Math.random() * 10000)}`}
              >
                {item}
              </h2>
            ))}
          </div>
          <div className="border-l border-white mr-2 "></div>
          <div className="w-[33%] mt-2 lg:mt-5 space-y-5 text-white">
            {thirdColmn.map((item) => (
              <h2
                className="cursor-pointer"
                onClick={() => {
                  navigate("/MobileList", {
                    state: { title: "BrandName", item, isFilter: true },
                  });
                  handleIsFilter(true);
                }}
                key={`${item}-${Math.floor(Math.random() * 10000)}`}
              >
                {item}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileBrandsNames;
