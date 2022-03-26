import React from "react";
import {
  FilterCard,
  Footer,
  ImageAsset,
  MobilelistCard,
  Navbar,
} from "components";
import { useNavigate } from "react-router";

const rightMenu = [
  {
    title: "Price",
    heading: "Less Then One 10000",
    description: ["10000 To 20000", "20000 To 30000", "30000 To 40000"],
  },
  {
    title: "RAM",
    heading: "Less Then 1 GB",
    description: ["1 GB to 2 GB", "2 GB to 3 GB", "3 GB to 4 GB"],
  },
  {
    title: "Memory",
    heading: "Less Then 16 GB",
    description: ["16 GB To 32 GB", "32 GB To 64 GB", "64 GB To 128 GB"],
  },
  {
    title: "Display",
    heading: "Less Then 4 Inches",
    description: [
      "4.1 Inches To 5.0 Inches",
      "5.1 Inches To 6 Inches",
      "6.1 Inches To 7 Inches",
    ],
  },
  {
    title: "OS",
    heading: "",
    description: ["Andriod", "IOS", "Symbion", "Windows"],
  },
  {
    title: "Camera",
    heading: "Less Then 8 MP",
    description: ["8 MP To 16 MP", "16 MP To 32 M", "32 MP To 64 MP"],
  },
  {
    title: "Selfi Camera",
    heading: "Less Then 8 MP",
    description: ["8 MP To 16 MP", "16 MP To 32 MP", "32 MP To 64 MP"],
  },
  {
    title: "Battery",
    heading: "Less Then 4000 MAH",
    description: ["4000 MAH To 4500 MAH", "4500 MAH To 5000 MAH"],
  },
];
const mobilelistData = [
  {
    imgsrc: "OppoPhoneRed",
    mobilename: "Oppo F19",
    price: "$23.40",
    rating: "4.5",
  },
  {
    imgsrc: "IphoneRed",
    mobilename: "Iphone 11",
    price: "$423.40",
    rating: "4.5",
  },
  {
    imgsrc: "samsung",
    mobilename: "Samsung A12",
    price: "$123.40",
    rating: "4.5",
  },
  {
    imgsrc: "Oppo",
    mobilename: "Oppo F19",
    price: "$23.40",
    rating: "4.5",
  },
  {
    imgsrc: "Nokia",
    mobilename: "Nokia 10.0",
    price: "$93.40",
    rating: "4.5",
  },
  {
    imgsrc: "IphoneYellow",
    mobilename: "Iphone 11",
    price: "$323.40",
    rating: "4.5",
  },
  {
    imgsrc: "Oppo",
    mobilename: "Oppo F19",
    price: "$23.40",
    rating: "4.5",
  },
  {
    imgsrc: "Infinix",
    mobilename: "infinix hote 10",
    price: "$23.40",
    rating: "4.5",
  },
  {
    imgsrc: "IphoneRed",
    mobilename: "Iphone 12",
    price: "$623.40",
    rating: "4.5",
  },
];

const VideoReview = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Navbar />
      <div className="mainContent mt-20 flex flex-col lg:flex-row px-10">
        <div className="lg:w-[20%] order-2 ">
          <div className="flex flex-col">
            <button
              className="w-auto border-2 bg-transparent p-1 mt-5 lg:mt-0  rounded-[1rem]"
              onClick={() => navigate("/test")}
            >
              Advance Search
            </button>
            <button className="w-auto border-2 bg-transparent mt-8 p-1  rounded-[1rem]">
              Videos Reviews
            </button>
            <button
              className="w-auto text-white  bg-backgroundGreenColor text-xs mt-1 p-1 pl-[2rem] pr-[2rem] rounded-[1rem]"
              onClick={() => navigate("/UploadAd")}
            >
              Wanna Buy And Sell Used <br /> Smarts Phone
            </button>
          </div>

          {rightMenu.map(({ title, heading, description }) => {
            return (
              <FilterCard title={title} heading={heading}>
                {description.map((item) => {
                  return <h1>{item}</h1>;
                })}
              </FilterCard>
            );
          })}
        </div>

        <div className="w-full lg:w-[80%] order-1 h-full  pb-0 lg:pb-[20rem]  flex flex-col lg:pl-7 lg:pr-7 mt-[-2rem]  lg:ml-3 lg:mr-3 lg:mt-0  lg:order-2 bg-center ">
          <div className="flex-col">
            <div className="video w-full lg:w-[80%] rounded-lg ">
              <ImageAsset
                className="w-full h-[10rem] lg:h-[25rem]  "
                src="VideoImg"
              />
            </div>
            <button className="w-full lg:w-[70%] text-left text-white font-medium  bg-buttonBgColor bg-gradient-to-b text-sm lg:text-lg p-4 pl-10 rounded-[1.8rem] mt-5 from-buttonBgColorGradian1 to-buttonBgcolorGradian2">
              Related Phone
            </button>
          </div>
          <div className="flex-1  mt-10 p-4 ">
            <div className="grid sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-2 gap-y-6">
              {mobilelistData.map(({ imgsrc, mobilename, price, rating }) => {
                return (
                  <MobilelistCard
                    imgsrc={imgsrc}
                    mobilename={mobilename}
                    price={price}
                    rating={rating}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[10rem]">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default VideoReview;
