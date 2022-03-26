import React, { useState } from "react";
import { FilterCard, Footer, FilterMobileCard, Navbar } from "components";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import { uploadAd } from "../redux/actions/mobileActions";
import { useNavigate } from "react-router";
import { getLatestMobiles } from "../redux/actions/mobileActions";
import { baseURL } from "api/baseURL";

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

const initialValues = {
  brandName: "",
  ram: "",
  rom: "",
  condition: "",
  location: "",
  price: "",
  contact: "",
  description: "",
};

const validate = Yup.object({
  brandName: Yup.string().required("Required"),
  ram: Yup.string().required("Required"),
  rom: Yup.string().required("Required"),
  condition: Yup.string().required("Required"),
  location: Yup.string().required("Required"),
  price: Yup.string().required("Required"),
  contact: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});
const UsedMobileUploadAdDetails = () => {
  const [mobilePhotos, setMobilePhotos] = useState([]);
  const { latestMobile } = useSelector((state) => state.mobileReducer);
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  var [fileObj, setFileObject] = useState([]);
  var [fileArray, setFileArray] = useState([]);
  const navigate = useNavigate();

  const handleUploadAd = (values, images) => dispatch(uploadAd(values, images));
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    // nextArrow: <SlickArrowRight imgsrc={"rightArrow"} />,
    // prevArrow: <SlickArrowLeft imgsrc={"leftArrow"} />,
  };
  React.useEffect(() => {
    setMobilePhotos([
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ]);
  }, []);
  React.useEffect(() => {
    dispatch(getLatestMobiles());
  }, []);
  const leftMenu = [
    {
      title: "Latest Mobiles",
      products: [
        {
          item: latestMobile[0],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[0].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[0].brandName} ${latestMobile[0].modelNumber}`,
        },
        {
          item: latestMobile[1],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[1].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[1].brandName} ${latestMobile[1].modelNumber}`,
        },
        {
          item: latestMobile[2],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[2].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[2].brandName} ${latestMobile[2].modelNumber}`,
        },
        {
          item: latestMobile[3],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[3].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[3].brandName} ${latestMobile[3].modelNumber}`,
        },
        {
          item: latestMobile[4],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[4].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[4].brandName} ${latestMobile[4].modelNumber}`,
        },
        {
          item: latestMobile[5],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[5].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[5].brandName} ${latestMobile[5].modelNumber}`,
        },
      ],
    },
    {
      title: "Top 6 By Fans",
      products: [
        {
          item: latestMobile[0],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[0].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[0].brandName} ${latestMobile[0].modelNumber}`,
        },
        {
          item: latestMobile[1],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[1].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[1].brandName} ${latestMobile[1].modelNumber}`,
        },
        {
          item: latestMobile[2],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[2].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[2].brandName} ${latestMobile[2].modelNumber}`,
        },
        {
          item: latestMobile[3],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[3].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[3].brandName} ${latestMobile[3].modelNumber}`,
        },
        {
          item: latestMobile[4],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[4].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[4].brandName} ${latestMobile[4].modelNumber}`,
        },
        {
          item: latestMobile[5],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[5].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[5].brandName} ${latestMobile[5].modelNumber}`,
        },
      ],
    },

    {
      title: "Top 10 Compaines",
      products: [
        {
          item: latestMobile[0],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[0].mobilePhotos[0]}`,
          name: latestMobile.length < 1 ? null : `${latestMobile[0].brandName}`,
        },
        {
          item: latestMobile[1],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[1].mobilePhotos[0]}`,
          name: latestMobile.length < 1 ? null : `${latestMobile[1].brandName}`,
        },
        {
          item: latestMobile[2],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[2].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1 ? null : `${latestMobile[2].brandName} `,
        },
        {
          item: latestMobile[3],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[3].mobilePhotos[0]}`,
          name: latestMobile.length < 1 ? null : `${latestMobile[3].brandName}`,
        },
        {
          item: latestMobile[4],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[4].mobilePhotos[0]}`,
          name: latestMobile.length < 1 ? null : `${latestMobile[4].brandName}`,
        },
        {
          item: latestMobile[5],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[5].mobilePhotos[0]}`,
          name: latestMobile.length < 1 ? null : `${latestMobile[5].brandName}`,
        },
      ],
    },
  ];
  const uploadMultipleFiles = (e) => {
    setFile(e.target.files);
    fileObj.splice(0, fileObj.length);
    fileArray.splice(0, fileArray.length);
    fileObj.push(e.target.files);
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
    }
  };
  return (
    <React.Fragment>
      <Navbar />
      <div className="mainContent mt-20 flex flex-col  lg:flex-row px-2 lg:px-10">
        <div className="lg:w-[20%] order-2  ">
          <div className="card rounded-tl-[4rem]  rounded-b-[4rem] bg-backgroundGreenColor w-full">
            <div className="cardRow w-full text-center pt-5 pb-5 text-white">
              <h1>Mobile Brands Names</h1>
            </div>
            <div className="w-full border-b border-white mr-2  "></div>
            <div className="flex text-sm pl-3 pr-3">
              <div className="w-[33%] space-y-5 mt-5 pb-[8rem] text-white">
                <h2>Apple </h2>
                <h2>Samsung</h2>
                <h2>Infinix</h2>
                <h2>Realme </h2>
              </div>
              <div className="border-l border-white mr-2 "></div>
              <div className="w-[33%] space-y-5 text-white mt-5">
                <h2>Apple </h2>
                <h2>Samsung</h2>
                <h2>Infinix</h2>
                <h2>Realme </h2>
              </div>
              <div className="border-l border-white mr-2 "></div>
              <div className="w-[33%] space-y-5 text-white mt-5">
                <h2>Apple </h2>
                <h2>Samsung</h2>
                <h2>Infinix</h2>
                <h2>Realme </h2>
              </div>
            </div>
          </div>

          {leftMenu.map(({ title, products }) => {
            return <FilterMobileCard title={title} products={products} />;
          })}
        </div>

        <div className="lg:w-[60%] rounded-lg h-full  pb-0 lg:pb-[5rem]  flex flex-col pl-7 lg:ml-4 lg:mr-4 pr-7 mt-10 lg:mt-0  order-1 lg:order-2 bg-cover  bg-[url('assets/images/backgroundImageMainScreen.png')]">
          <div className="flex flex-col  lg:flex-row">
            <Slider
              {...settings}
              className=" object-top p-2 w-60 object-contain h-[20rem]"
            >
              {fileArray
                ? (fileArray || []).map((imageName) => {
                    return (
                      <img
                        className=" object-top p-2 w-48 object-contain h-[20rem]"
                        src={`${imageName}`}
                        alt={`${imageName}`}
                      />
                    );
                  })
                : null}
            </Slider>
          </div>
          <div className="flex-col mb-10 mt-8 w-full">
            <input
              type="file"
              className="form-control hidden"
              onChange={uploadMultipleFiles}
              multiple
              id="input"
              name="images"
              accept="image/*"
            />
            <label
              className=" lg:ml-16 p-3 cursor-pointer  pl-8 pr-8 text-xs border-black border rounded-lg"
              htmlFor="input"
            >
              {" "}
              Upload Image{" "}
            </label>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={async (values) => {
              file
                ? handleUploadAd(values, file)
                : alert("Please Upload your imges");
            }}
          >
            {(formik) => (
              <Form>
                <div className="flex-col mt-4  w-full">
                  <h2 className="text-sm font-semibold">Brand Name</h2>

                  <input
                    type="text"
                    className="w-full border border-black p-3 bg-transparent rounded-lg mt-3"
                    name="brandName"
                    value={formik.values.brandName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <ErrorMessage
                  component="div"
                  className="text-red-700 text-sm"
                  name="brandName"
                />
                <div className="flex-col mt-4  w-full">
                  <h2 className="text-sm font-semibold">RAM</h2>
                  <input
                    type="text"
                    className="w-full border border-black p-3 bg-transparent rounded-lg mt-3"
                    name="ram"
                    value={formik.values.ram}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <ErrorMessage
                  component="div"
                  className="text-red-700 text-sm"
                  name="ram"
                />
                <div className="flex-col mt-4  w-full">
                  <h2 className="text-sm font-semibold">ROM/Storage</h2>
                  <input
                    type="text"
                    className="w-full border border-black p-3 bg-transparent rounded-lg mt-3"
                    name="rom"
                    value={formik.values.rom}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <ErrorMessage
                  component="div"
                  className="text-red-700 text-sm"
                  name="rom"
                />
                <div className="flex-col mt-4  w-full">
                  <h2 className="text-sm font-semibold">Condition</h2>
                  <input
                    type="text"
                    className="w-full border border-black p-3 bg-transparent rounded-lg mt-3"
                    name="condition"
                    value={formik.values.condition}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <ErrorMessage
                  component="div"
                  className="text-red-700 text-sm"
                  name="condition"
                />
                <div className="flex-col mt-4  w-full">
                  <h2 className="text-sm font-semibold">Price</h2>
                  <input
                    type="text"
                    className="w-full border border-black p-3 bg-transparent rounded-lg mt-3"
                    name="price"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <ErrorMessage
                  component="div"
                  className="text-red-700 text-sm"
                  name="price"
                />
                <div className="flex-col mt-4  w-full">
                  <h2 className="text-sm font-semibold">Location</h2>
                  <input
                    type="text"
                    className="w-full border border-black p-3 bg-transparent rounded-lg mt-3"
                    name="location"
                    value={formik.values.location}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <ErrorMessage
                  component="div"
                  className="text-red-700 text-sm"
                  name="location"
                />
                <div className="flex-col mt-4  w-full">
                  <h2 className="text-sm font-semibold">Contact No</h2>
                  <input
                    type="text"
                    className="w-full border border-black p-3 bg-transparent rounded-lg mt-3"
                    name="contact"
                    value={formik.values.contact}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <ErrorMessage
                  component="div"
                  className="text-red-700 text-sm"
                  name="contact"
                />
                <div className="flex-col mt-4  w-full">
                  <h2 className="text-sm font-semibold">Contact No</h2>
                  <textarea
                    className="w-full border border-black p-3 bg-transparent rounded-lg mt-3"
                    rows="5"
                    placeholder="Please enter mobile phone detail summary"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                </div>
                <ErrorMessage
                  component="div"
                  className="text-red-700 text-sm"
                  name="description"
                />
                <div className="flex-col w-full mt-10 justify-center mb-5 text-center">
                  <button
                    className="p-3 pl-16 pr-16 text-xs font-bold bg-white rounded-lg"
                    type="submit"
                  >
                    Post Now
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="lg:w-[20%]  text-center order-3 lg:order-3">
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
      </div>
      <div className="mt-[10rem]">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default UsedMobileUploadAdDetails;
