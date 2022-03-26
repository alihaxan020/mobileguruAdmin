import React from "react";
import { ImageAsset } from "components";

const ReviewCard = (props) => {
  const { imgsrc, title, desc, date } = props;
  return (
    <React.Fragment>
      <div className="flex-col w-full shadow-md md:shadow-2xl pb-3 bg-[#F2F2F2]">
        <ImageAsset className="w-full  h-[10rem] " src={imgsrc} />
        <div className="pl-3">
          <h1 className="mt-2 text-md font-semibold">{title}</h1>
          <h3 className="mt-3 text-xs">{desc}</h3>
          <div className="w-full text-right text-xs mt-5 pr-10">
            <label htmlFor="">{date}</label>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReviewCard;
