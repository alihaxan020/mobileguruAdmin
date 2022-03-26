import React from "react";
import { ImageAsset } from "components";

const NewsCard = (props) => {
  const { imgsrc, title, desc, date } = props;
  return (
    <React.Fragment>
      <div className="flex items-center bg-[#ECECEC] p-3 mt-2 lg:items-end rounded-lg">
        <div>
          <ImageAsset className="w-[8rem] h-[7rem]  rounded-2xl" src={imgsrc} />
        </div>
        <div className="flex-col w-[100%]  ml-6 mt-3 font-semibold ">
          <h1>{title}</h1>
          <h3 className="text-xs font-normal mt-2 pb-6">{desc}</h3>
          <div className="justify-center text-right  text-xs lg:mr-20">
            <label htmlFor="">{date}</label>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewsCard;
