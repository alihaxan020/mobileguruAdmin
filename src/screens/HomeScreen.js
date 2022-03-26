import React from "react";
import { Footer, ImageAsset, Navbar, MobileBrandsNames } from "components";
import { RightSideMenu, LeftSideMenu } from "megaComponents";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Navbar />
      <div className="mainContent mt-5 lg:mt-20 flex flex-col lg:flex-row px-10">
        <div className="lg:w-[20%] ">
          <MobileBrandsNames />
          <LeftSideMenu />
        </div>

        <div className="lg:w-[60%] h-full  pb-0 lg:pb-[20rem]  flex flex-col pl-7 pr-7 mt-10 lg:mt-0  order-3 lg:order-2 bg-center  bg-[url('assets/images/backgroundImageMainScreen.png')]">
          <div className="flex">
            <div className="w-[40%]  pr-2">
              <ImageAsset className="w-full h-full " src="oppo15pro" />
            </div>
            <div className="w-[60%] flex flex-col pl-2 space-y-2 ">
              <ImageAsset
                className="w-full h-[5rem] lg:h-[10rem] "
                src="BannerImg1"
              />
              <ImageAsset
                className="w-full h-[5rem] lg:h-[10rem] "
                src="BannerImg2"
              />
              <ImageAsset
                className="w-full h-[5rem] lg:h-[10rem] "
                src="BannerImg3"
              />
            </div>
          </div>

          <div className="">
            <ImageAsset
              className="w-full mt-3 h-[7rem] lg:h-[13rem]"
              src="BannerImg1"
            />
            <ImageAsset
              className="w-full mt-3 h-[7rem] lg:h-[13rem] "
              src="BannerImg2"
            />
            <ImageAsset
              className="w-full mt-3 h-[13rem] "
              src="oppoF15proBlue"
            />
          </div>
        </div>
        <div className="lg:w-[20%]  text-center order-2 lg:order-3">
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

export default Home;
