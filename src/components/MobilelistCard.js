import React from "react";
import { FaStar } from "react-icons/fa";
import { baseURL } from "api/baseURL";
import { useNavigate } from "react-router";
import { getSingleMobile } from "../redux/actions/mobileActions";
import { useDispatch } from "react-redux";
const MobilelistCard = (props) => {
  const { mobilePhotos, mobilename, price, rating, modelNumber, memory } =
    props.item;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSetSingleMobile = (value) => dispatch(getSingleMobile(value));

  const total = props.item.new
    ? props.item.reviews.length !== 0
      ? props.item.reviews.reduce(
          //reduce go through the array and cartItem is the each item in the array
          (accumulatedTotal, review) =>
            accumulatedTotal + parseInt(review.stars),
          0 //0 is the start point of accumulatedTotal
        )
      : 1
    : 0;
  const averageReview = props.item.new
    ? props.item.reviews.length !== 0
      ? total / props.item.reviews.length
      : 0
    : 0;
  const stars = Array(averageReview > 1 ? Math.round(averageReview) : 1).fill(
    0
  );

  return (
    <React.Fragment>
      {props.item.new === true ? (
        <div
          className="bg-white flex-col w-full  rounded-md pb-5 cursor-pointer"
          onClick={() => {
            localStorage.setItem("detailId", props.item._id);
            handleSetSingleMobile(props.item);
            navigate("/PhoneSpec", {
              state: props.item,
            });
          }}
        >
          <div className="flex justify-center">
            <img
              className=" object-top px-1 py-1 xs:p-2  h-[8rem] sm:h-[14rem]"
              src={`${baseURL}${mobilePhotos[0]}`}
              alt={`${mobilename}`}
            />
          </div>

          <div className="flex-col w-full pl-6">
            <h3>
              {mobilename} {modelNumber}
            </h3>
            <div className="flex">
              <p className="text-xs font-light">
                Price (PKR): {props.item.priceInPKR}{" "}
              </p>
            </div>
            <div className="flex">
              <p className="text-xs font-light">
                Price (USD): ${props.item.priceInUSD}{" "}
              </p>
            </div>

            <p className="text-xs mt-2 font-light">
              {memory.ram.value}
              {memory.ram.unit} / {memory.rom.value}
              {memory.rom.unit}
            </p>
            <div className="flex w-full items-center">
              <div className="flex items-center text-[#F4871E] text-xs">
                {props.item.reviews.length === 0
                  ? "Not Rated Yet"
                  : stars.map((_, index) => {
                      return <FaStar key={index} />;
                    })}
                <div className="flex items-center text-[#F4871E] text-xs pl-2 text-center">
                  {averageReview < 1 ? null : averageReview}
                </div>
              </div>
              <h3 className="text-xs ml-3 ">{rating}</h3>{" "}
              {/*  <button className="flex ml-3 items-center rounded-[0.3rem] p-1  text-xs border border-[#9DC2FF] text-[#9DC2FF] ">
            <ImageAsset
              className="w-[1rem] h-[1rem] mr-1  "
              src="HeartIcon"
            />
            Watch
          </button> */}
            </div>
          </div>
        </div>
      ) : (
        <div
          className="bg-white flex-col w-full  rounded-md pb-5 cursor-pointer"
          onClick={() => {
            localStorage.setItem("detailId", props.item._id);
            handleSetSingleMobile(props.item);
            navigate("/PhoneDetails", {
              state: props.item,
            });
          }}
        >
          <div className="flex justify-center">
            <img
              className=" object-top p-2  h-[14rem]"
              src={`${baseURL}${props.item.usedMobilePhotos[0]}`}
              alt={`${props.item.usedMobilePhotos[0]}`}
            />
          </div>
          <div className="flex-col w-full pl-6">
            <h3>{props.item.brandName}</h3>
            <h3 className="text-[#F4871E] font-bold text-2xl mt-2">{price}</h3>
            <p className="text-xs mt-2 font-light">
              RAM: {props.item.ram} / ROM: {props.item.rom}
            </p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default MobilelistCard;
