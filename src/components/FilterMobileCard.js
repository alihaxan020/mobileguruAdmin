import React from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { getSingleMobile } from "redux/actions/mobileActions";
const FilterMobileCard = (props) => {
  const { title, products } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSetSingleMobile = (value) => dispatch(getSingleMobile(value));
  console.log(products);
  return (
    <div className="w-full">
      <div className="card rounded-tl-[3rem]  mt-5 pb-4  rounded-b-[3rem]  bg-backgroundGreenColor w-full sm:w-[50%] md:w-[60%] lg:w-full mx-auto">
        <div className="cardRow w-full text-lg text-center pt-5 pb-2 text-white">
          <h1>{title}</h1>
        </div>
        <div className="w-full border-b border-white mr-2"></div>
        <div>
          <div className=" flex flex-parent gap-x-[1rem] justify-center pl-2 pr-1 mt-5">
            {products.slice(0, 3).map(({ name, src, item }) => {
              return (
                <div
                  className="flex-item cursor-pointer"
                  onClick={() => {
                    localStorage.setItem("detailId", item._id);
                    navigate("/PhoneSpec", {
                      state: item,
                    });
                    handleSetSingleMobile(item);
                  }}
                >
                  <div className="flex flex-col w-full text-xs items-center text-white justify-between">
                    <img
                      className="w-[50px] h-[5rem] md:h-[4rem]"
                      src={src}
                      alt="omg"
                    />
                    <h3>{name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" flex flex-parent gap-x-[1rem] justify-center pl-2 pr-1 mt-5">
            {products.slice(3, 6).map(({ name, src, item }) => {
              return (
                <div className="flex-item ">
                  <div
                    className="flex flex-col w-full text-xs items-center text-white justify-between  cursor-pointer"
                    onClick={() => {
                      localStorage.setItem("detailId", item._id);
                      navigate("/PhoneSpec", {
                        state: item,
                      });
                      handleSetSingleMobile(item);
                    }}
                  >
                    <img
                      className="w-[50px] h-[5rem] md:h-[4rem] "
                      src={src}
                      alt="omg"
                    />
                    <h3>{name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full text-center mt-4 text-lg text-white ">
            <button
              className="bg-buttonBgColor bg-gradient-to-b text-sm p-2 pl-4 pr-4 rounded-md from-buttonBgColorGradian1 to-buttonBgcolorGradian2  shadow-cyan-500/50 shadow-inner"
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

export default FilterMobileCard;
