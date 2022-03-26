import React from "react";
import { Footer, MobilelistCard, MobileBrandsNames, Navbar } from "components";
import { useNavigate } from "react-router";
import { RightSideMenu, LeftSideMenu } from "megaComponents";

const mobileAcessories = [
  {
    imgsrc: "charger",
    mobilename: "Oppo F19",
    price: "$23.40",
    rating: "4.5",
  },
  {
    imgsrc: "handfree",
    mobilename: "Iphone 11",
    price: "$3.40",
    rating: "4.5",
  },
  {
    imgsrc: "battery",
    mobilename: "Samsung A12",
    price: "$13.40",
    rating: "4.5",
  },
  {
    imgsrc: "mobilecover",
    mobilename: "Oppo F19",
    price: "$3.40",
    rating: "4.5",
  },
  {
    imgsrc: "protector",
    mobilename: "Nokia 10.0",
    price: "$93.40",
    rating: "4.5",
  },
  {
    imgsrc: "mobileBoard",
    mobilename: "Iphone 11",
    price: "$33.40",
    rating: "4.5",
  },
];

const MobileAcessories = () => {
  let navigate = useNavigate();
  return (
    <React.Fragment>
      <Navbar />
      <div className="mainContent mt-20 flex flex-col lg:flex-row lg:px-5">
        <div className="lg:w-[20%] order-2 px-5 lg:px-0">
          <MobileBrandsNames />
          <LeftSideMenu />
        </div>
        {/* cards  */}
        <div className="lg:w-[60%] h-full  pb-0 lg:pb-[20rem]  flex flex-col mt-[-2rem] lg:mt-0 lg:ml-4 lg:mr-4   order-1 lg:order-2  ">
          <div className="flex mb-5 text-md pl-5 pr-5 lg:pl-0 lg:pr-0 font-semibold mt-8">
            <h3 className="mr-auto ">Mobile Acessories </h3>
          </div>
          <div className="lg:pl-4 lg:pr-4 rounded-md bg-center bg-[#D2DCE7] ">
            <div className="flex-1  p-4 pl-1 pr-1 ">
              <div className="grid sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-2 gap-y-6">
                {mobileAcessories.map(
                  ({ imgsrc, mobilename, price, rating }) => {
                    return (
                      <MobilelistCard
                        imgsrc={imgsrc}
                        mobilename={mobilename}
                        price={price}
                        rating={rating}
                      />
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[20%] px-5 lg:px-0  text-center order-3 lg:order-3">
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

          <RightSideMenu />
        </div>
      </div>
      <div className="mt-[10rem]">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default MobileAcessories;
