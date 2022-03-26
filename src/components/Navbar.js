import React, { useState } from "react";
import ImageAsset from "./ImageAsset";
import { IoCloseOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";

import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { isFilterMobile } from "../redux/actions/mobileActions";
import { searchBySearchBar } from "../redux/actions/mobileActions";

const PhoneDetails = [
  {
    value: "Review",
    hrefLink: "/Review ",
  },

  {
    value: "News",
    hrefLink: "/News ",
  },
];

const Acessories = [
  {
    value: "Comparisons",
    hrefLink: "/Comparison",
  },

  {
    value: "Upload Add",
    hrefLink: "/UploadAd ",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleIsFilter = (value) => dispatch(isFilterMobile(value));
  const handleSearchBar = (value) => {
    dispatch(searchBySearchBar(value, navigate));
  };

  return (
    <div className="flex flex-col mb-16 lg:mb-0">
      <div className="flex flex-col lg:flex-row mt-4">
        <div className="WebsiteLogo hidden lg:block h-full mr-0 ml-0 text-center lg:text-left  lg:mr-10 lg:ml-10">
          <ImageAsset
            className="w-42 h-32 inline lg:block "
            src="websiteLogo"
          />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute left-8 top-4 cursor-pointer md:hidden"
        >
          <ImageAsset className="w-20 h-20 mt-[-1.5rem]  " src="websiteLogo" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <div
          className={`md:flex md:items-center z-50 md:pb-0 flex-col w-full mt-10 lg:mt-20 lg:ml-2 pb-12 absolute bg-backgroundGreenColor md:bg-white md:static bg-red md:z-auto  left-0  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-5 " : "top-[-490px]"
          }`}
        >
          <div className="mainnavContent  mt-4  w-full ">
            <nav className="pl-10 pr-10  lg:pl-0 lg:pr-0">
              <ul className="flex flex-col lg:flex-row justify-between text-sm  space-y-3 items-baseline cursor-pointer">
                <li>
                  <button class="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span
                      class="mr-1"
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      Home
                    </span>
                  </button>
                </li>
                <li class="z-10 mt-0">
                  <div>
                    <div class="group inline-block relative">
                      <button class="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                        <span class="mr-1">PhoneDetails</span>
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </button>
                      <ul class="lg:absolute  hidden text-gray-700 pt-1 group-hover:block">
                        {PhoneDetails.map(({ hrefLink, value }) => {
                          return (
                            <li>
                              <span
                                className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 lg:w-[11.5rem] block whitespace-no-wrap"
                                onClick={() => {
                                  navigate(hrefLink);
                                }}
                              >
                                {value}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="z-10 mt-0">
                  <div>
                    <div class="group inline-block relative">
                      <button class="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                        <span class="mr-1">Mobile List</span>
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </button>
                      <ul class="lg:absolute  hidden text-gray-700 pt-1 group-hover:block">
                        <li
                          onClick={() => {
                            navigate("/MobileList", {
                              state: {
                                isFilter: false,
                              },
                            });
                            handleIsFilter(false);
                          }}
                        >
                          <span className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 lg:w-[11.5rem] block whitespace-no-wrap">
                            New Mobiles
                          </span>
                        </li>
                        <li
                          onClick={() => {
                            navigate("/MobileList", {
                              state: {
                                title: "OldMobiles",
                                isFilter: true,
                              },
                            });
                            handleIsFilter(true);
                          }}
                        >
                          <span className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 lg:w-[11.5rem] block whitespace-no-wrap">
                            Old Mobiles
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li class=" z-10">
                  <div>
                    <div class="group inline-block relative">
                      <button class="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                        <span class="mr-1">Others</span>
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </button>
                      <ul class=" lg:absolute hidden text-gray-700 pt-1 group-hover:block">
                        {Acessories.map(({ hrefLink, value }) => {
                          return (
                            <li class="">
                              <span
                                className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 lg:w-[11.5rem] block whitespace-no-wrap"
                                onClick={() => {
                                  navigate(hrefLink);
                                }}
                              >
                                {value}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <button
                    class="bg-white text-gray-700 font-semibold  py-2 px-4 rounded inline-flex items-center"
                    onClick={() => {
                      navigate("/ContactUs");
                    }}
                  >
                    <span class="mr-1">Contact us </span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="relative w-[95%] ">
            <input
              className="bg-customGray rounded-full w-full pl-6 mt-4 text-blue-500 px-2 py-2"
              type="text"
              value={searchValue}
              placeholder="Search by brand name"
              onChange={(e) => setSearchValue(e.target.value)}
            />

            <button className=" cursor-pointer w-8 h-8 absolute top-9 transform -translate-y-1/2 right-4 ">
              {searchValue ? (
                <BsSearch
                  onClick={() => handleSearchBar(searchValue)}
                  className="cursor-pointer"
                />
              ) : (
                ""
              )}
            </button>
          </div>
        </div>

        <div className="rightSideAvatar absolute  hidden lg:block top-0 right-0 ">
          <ImageAsset
            className="w-[24rem]  h-[15rem] object-cover ml-4 mr-auto"
            src="headerRightSideImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
