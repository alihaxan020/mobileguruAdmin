import React from "react";
import { FilterCard, Footer, Navbar, ReviewCard } from "components";
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

const reviewCardData = [
  {
    imgsrc: "reviewImage1",
    title: "Samsung Galaxy S20 will get Android 12- Note",
    desc: "Samsung's been testing the Android 12-based One UI 4 beta on the Galaxy S20 series for some time now",
    date: "27 Dec 2021",
  },
  {
    imgsrc: "reviewImage2",
    title: "Samsung Galaxy S20 will get Android 12- Note",
    desc: "Samsung's been testing the Android 12-based One UI 4 beta on the Galaxy S20 series for some time now",
    date: "27 Dec 2021",
  },
  {
    imgsrc: "reviewImage3",
    title: "Samsung Galaxy S20 will get Android 12- Note",
    desc: "Samsung's been testing the Android 12-based One UI 4 beta on the Galaxy S20 series for some time now",
    date: "27 Dec 2021",
  },
  {
    imgsrc: "reviewImage4",
    title: "Samsung Galaxy S20 will get Android 12- Note",
    desc: "Samsung's been testing the Android 12-based One UI 4 beta on the Galaxy S20 series for some time now",
    date: "27 Dec 2021",
  },
  {
    imgsrc: "reviewImage5",
    title: "Samsung Galaxy S20 will get Android 12- Note",
    desc: "Samsung's been testing the Android 12-based One UI 4 beta on the Galaxy S20 series for some time now",
    date: "27 Dec 2021",
  },
  {
    imgsrc: "reviewImage6",
    title: "Samsung Galaxy S20 will get Android 12- Note",
    desc: "Samsung's been testing the Android 12-based One UI 4 beta on the Galaxy S20 series for some time now",
    date: "27 Dec 2021",
  },
  {
    imgsrc: "reviewImage7",
    title: "Samsung Galaxy S20 will get Android 12- Note",
    desc: "Samsung's been testing the Android 12-based One UI 4 beta on the Galaxy S20 series for some time now",
    date: "27 Dec 2021",
  },
  {
    imgsrc: "reviewImage8",
    title: "Samsung Galaxy S20 will get Android 12- Note",
    desc: "Samsung's been testing the Android 12-based One UI 4 beta on the Galaxy S20 series for some time now",
    date: "27 Dec 2021",
  },
];
// {rightMenu.map(({ title, heading, description }) => {
//   return (
//     <FilterCard title={title} heading={heading}>
//       {description.map((item) => {
//         return <h1>{item}</h1>;
//       })}
//     </FilterCard>
//   );
// })}
const Reviews = () => {
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
        </div>

        <div className="w-full lg:w-[80%] order-1 h-full  pb-0 lg:pb-[20rem]  flex flex-col lg:pl-7 lg:pr-7 mt-[-2rem]  lg:ml-3 lg:mr-3 lg:mt-0  lg:order-2 bg-center ">
          <div className="flex-col">
            <div className="video w-full lg:w-full rounded-lg bg-cover lg:bg-contain bg-no-repeat  bg-[url('assets/images/newsBanner.png')]">
              <h1 className=" p-10 lg:p-36 lg:pl-16 text-2xl lg:text-5xl font-bold text-white">
                Reviews
              </h1>
            </div>
          </div>
          {/* cards */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 mt-5 gap-x-6 gap-y-6">
            {reviewCardData.map(({ imgsrc, title, desc, date }) => {
              return (
                <ReviewCard
                  imgsrc={imgsrc}
                  title={title}
                  desc={desc}
                  date={date}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-[10rem]">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Reviews;
