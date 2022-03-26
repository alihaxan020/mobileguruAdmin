import React from "react";
import { Footer, Navbar } from "components";
import { RightSideMenu } from "megaComponents";
import { useNavigate } from "react-router";
const ContactUs = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Navbar />
      <div className="mainContent mt-20 flex flex-col lg:flex-row px-1 lg:px-10">
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
          {/* 
          {rightMenu.map(({ title, heading, description }) => {
            return (
              <FilterCard title={title} heading={heading}>
                {description.map((item) => {
                  return <h1>{item}</h1>;
                })}
              </FilterCard>
            );
          })} */}
          <RightSideMenu />
        </div>

        <div className="w-full lg:w-[80%] order-1 h-full  pb-0 lg:pb-[20rem]  flex flex-col lg:pl-7 lg:pr-7 mt-[-2rem]  lg:ml-3 lg:mr-3 lg:mt-0  lg:order-2 bg-center ">
          <div className="flex-col">
            <div className="video w-full lg:w-full rounded-lg bg-cover lg:bg-contain bg-no-repeat  bg-[url('assets/images/newsBanner.png')]">
              <h1 className=" p-10 lg:p-36 lg:pl-16 text-2xl lg:text-5xl font-bold text-white">
                Contact Us
              </h1>
            </div>
          </div>
          <div className="Contactus w-full  ">
            <div className="w-full text-center mt-5">
              <button className="w-full lg:w-[70%] text-center text-white font-medium  bg-buttonBgColor bg-gradient-to-b text-sm lg:text-md p-2 pl-10 rounded-[1rem] mt-5 from-buttonBgColorGradian1 to-buttonBgcolorGradian2">
                Feedback
              </button>
            </div>
            <div className="flex-col w-full mt-[4rem]  text-center">
              <div className="lg:ml-32 mt-5 w-full lg:w-[70%] text-md font-semibold flex flex-col text-left ">
                <label htmlFor="">Your Name</label>
                <input
                  type="text"
                  className="p-3 border mt-3 border-black rounded-lg"
                />
              </div>
              <div className="lg:ml-32 mt-5 w-full lg:w-[70%] text-md font-semibold flex flex-col text-left ">
                <label htmlFor="">Your Email</label>
                <input
                  type="text"
                  className="p-3 border mt-3 border-black rounded-lg"
                />
              </div>
              <div className="lg:ml-32 mt-5 w-full lg:w-[70%] text-md font-semibold flex flex-col text-left ">
                <label htmlFor="">Subject</label>
                <input
                  type="text"
                  className="p-3 border mt-3 border-black rounded-lg"
                />
              </div>
              <div className="lg:ml-32 mt-5 w-full lg:w-[70%] text-md font-semibold flex flex-col text-left ">
                <label htmlFor="">Massage</label>

                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="p-3 border mt-3 border-black rounded-lg"
                ></textarea>
              </div>
              <div className="w-full text-center mt-5">
                <button className="w-full lg:w-[20%] text-center text-white font-medium  bg-buttonBgColor bg-gradient-to-b text-sm lg:text-md p-2 rounded-[1rem] mt-5 from-buttonBgColorGradian1 to-buttonBgcolorGradian2">
                  Send
                </button>
              </div>
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

export default ContactUs;
