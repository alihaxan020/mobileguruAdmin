import React, { useEffect, useState } from "react";
import { Footer, Navbar, ImageAsset } from "components";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPhonesForComparison,
  getComparisonMobileById,
  getComparisonMobileById1,
  getComparisonMobileById2,
} from "../redux/actions/mobileActions";
import { baseURL } from "api/baseURL";
const Comparison = () => {
  const {
    allMobilesForComparison,
    firstComparisonMobile,
    secondComparisonMobile,
  } = useSelector((state) => state.comparisonReducer);

  const [searchBar1, setSearchBar1] = useState("");
  const [searchBar2, setSearchBar2] = useState("");
  const [open1, setOpen1] = useState(false);
  const dispatch = useDispatch();
  const myCheck = Object.keys(firstComparisonMobile).length === 0;
  const myCheck2 = Object.keys(secondComparisonMobile).length === 0;

  useEffect(() => {
    dispatch(getAllPhonesForComparison());
  }, []);

  const total = !myCheck
    ? firstComparisonMobile.reviews.reduce(
        //reduce go through the array and cartItem is the each item in the array
        (accumulatedTotal, review) => accumulatedTotal + parseInt(review.stars),
        0 //0 is the start point of accumulatedTotal
      )
    : 1;
  const averageReview = !myCheck
    ? total / firstComparisonMobile.reviews.length
    : 0;

  const total2 = !myCheck2
    ? secondComparisonMobile.reviews.reduce(
        //reduce go through the array and cartItem is the each item in the array
        (accumulatedTotal, review) => accumulatedTotal + parseInt(review.stars),
        0 //0 is the start point of accumulatedTotal
      )
    : 1;
  const averageReview2 = !myCheck2
    ? total2 / secondComparisonMobile.reviews.length
    : 0;
  return (
    <React.Fragment>
      <Navbar />
      <div className="w-full  flex mt-20 pl-3 pr-3 lg:pl-20 lg:pr-20 ">
        <div className=" w-full flex-col">
          <div className="flex flex-col lg:flex-row bg-[#D2DCE7] ">
            {/* left Compare */}
            <div className=" w-full lg:w-1/2 z-50 flex-col  ">
              <div className="flex-col relative z-50 w-full bg-white pb-5">
                <h3 className="text-sm font-medium">Compare With</h3>
                <input
                  value={searchBar1}
                  onChange={(e) => setSearchBar1(e.target.value)}
                  placeholder="Search first mobile here"
                  className={`w-[90%] lg:w-[70%] text-center
                 text-white font-medium  bg-buttonBgColor bg-gradient-to-b text-sm 
                lg:text-md p-3 lg:pl-10 rounded-[0.5rem] mt-2 from-buttonBgColorGradian1
                 to-buttonBgcolorGradian2 `}
                />
                <div
                  className={`absolute bg-gray-100 lg:w-[70%] md:w-[90%] rounded-md py-2 px-4 z-50 mx-auto ${
                    !searchBar1 ? "hidden" : ""
                  }`}
                >
                  {allMobilesForComparison
                    .filter((val) => {
                      if (searchBar1 === "") {
                        return val;
                      } else if (
                        val.mobile
                          .toLowerCase()
                          .includes(searchBar1.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((data, index) => {
                      return (
                        <div className={`z-50 cursor-pointer`}>
                          {searchBar1 ? (
                            <div
                              onClick={() => {
                                dispatch(getComparisonMobileById1(data._id));
                                setSearchBar1("");
                              }}
                            >
                              {data.mobile}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>

              {myCheck ? (
                <div className="flex items-center justify-center h-44">
                  Please select first mobile
                </div>
              ) : (
                <div>
                  <div
                    className={`w-full lg:w-[70%] z-0 text-xs pb-3 font-medium mt-[0.4rem]
               h-[430px] lg:ml-1 flex flex-col justify-center text-center 
               border-2 rounded-md border-black`}
                  >
                    <img
                      className=" object-top p-2  object-contain h-[20rem]"
                      src={
                        !myCheck
                          ? `${baseURL}${firstComparisonMobile.mobilePhotos[0]}`
                          : ""
                      }
                    />
                    <h3>
                      {!myCheck
                        ? firstComparisonMobile.brandName +
                          " / " +
                          firstComparisonMobile.modelNumber
                        : ""}{" "}
                    </h3>
                    <h3>
                      {!myCheck ? firstComparisonMobile.priceInPKR + " RS" : ""}
                    </h3>
                    <div className="flex w-full  justify-center"></div>
                    <h3>{!myCheck ? firstComparisonMobile.releaseDate : ""}</h3>
                  </div>

                  <div className="pl-2 mt-5 flex justify-center md:justify-start mb-5">
                    <button className="rounded-2xl text-center p-[0.3rem] text-lg font-bold w-[70%]  bg-white">
                      Specification
                    </button>
                  </div>
                  <div className="w-full flex-col p-2 rounded-[0.5rem] mt-5 pb-[5rem] ">
                    {/* /// */}
                    <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                      <div className="lg:w-[40%] text-[#07844C] text-md font-bold ">
                        BUILD
                      </div>
                      <div className="flex-col w-full">
                        <div className="flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">OS</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.build.OS.description}, ${firstComparisonMobile.build.OS.type}`
                              : ""}
                          </label>
                          <br />
                        </div>
                        <div className=" flex w-full  border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">UI</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.build.UI}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full  border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">
                            DIMENSIONS
                          </h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.build.dimensions}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full  border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">WEIGHT</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.build.weight} Grams`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full  border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">SIM</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.build.sim}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full ">
                          <h3 className="w-1/3 text-sm font-bold">COLORS</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.build.colors}`
                              : ""}
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* /// */}
                    <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                      <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                        FREQUENCY
                      </div>
                      <div className="flex-col w-full">
                        <div className="flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">2G Band</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.frequency.twoGBand.description}`
                              : ""}
                          </label>{" "}
                          <br />
                        </div>
                        <div className=" flex w-full  border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">3G Band</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.frequency.threeGBand.description}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex  w-full  border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">4G Band</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%] "
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.frequency.fourGBand.description}`
                              : ""}
                          </label>
                        </div>

                        <div className=" flex w-full ">
                          <h3 className="w-1/3 text-sm font-bold">5G Band</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.frequency.fiveGBand.description}`
                              : ""}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                      <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                        PROCESSOR
                      </div>
                      <div className="flex-col w-full">
                        <div className="flex w-full border-black border-b-[0.03rem] ">
                          <h3 className="w-1/3 text-sm font-bold">CPU</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.processor.CPU}`
                              : ""}
                          </label>
                          <br />
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold ">Chipset</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium  lg:ml-0 w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.processor.chipSet}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">GPU</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {myCheck
                              ? `${firstComparisonMobile.processor.GPU}`
                              : ""}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className=" flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                      <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                        DISPLAY
                      </div>
                      <div className="flex-col w-full">
                        <div className="flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">
                            Technology
                          </h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.display.technology}`
                              : ""}
                          </label>{" "}
                          <br />
                        </div>
                        <div className=" flex w-full  border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">Size</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.display.size}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex  w-full  border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">
                            Resolution
                          </h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%] "
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.display.resolution}`
                              : ""}
                          </label>
                        </div>

                        <div className=" flex w-full ">
                          <h3 className="w-1/3 text-sm font-bold">
                            Extra Features
                          </h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.display.extraFeatures}`
                              : ""}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                      <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                        MEMORY
                      </div>
                      <div className="flex-col w-full">
                        <div className="flex w-full border-black border-b-[0.03rem] ">
                          <h3 className="w-1/3 text-sm font-bold">RAM</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.memory.ram.value} ${firstComparisonMobile.memory.ram.unit}`
                              : ""}
                          </label>
                          <br />
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold ">
                            ROM / STORAGE
                          </h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium  lg:ml-0 w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.memory.rom.value} ${firstComparisonMobile.memory.rom.unit}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">Card</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.memory.card} GB`
                              : ""}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                      <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                        CAMERA
                      </div>
                      <div className="flex-col w-full">
                        <div className="flex w-full border-black border-b-[0.03rem] ">
                          <h3 className="w-1/3 text-sm font-bold">
                            Main Camera
                          </h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.camera.main.value} MP / ${firstComparisonMobile.camera.main.description}`
                              : ""}
                          </label>
                          <br />
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold ">
                            Front Camera
                          </h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium lg:ml-0 w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.camera.front.value} MP / ${firstComparisonMobile.camera.front.description}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">Features</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.camera.features}`
                              : ""}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                      <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                        CONNECTIVITY
                      </div>
                      <div className="flex-col w-full">
                        <div className="flex w-full border-black border-b-[0.03rem] ">
                          <h3 className="w-1/3 text-sm font-bold">WLAN</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.connectivity.WLAN.description}`
                              : ""}
                          </label>
                          <br />
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold ">
                            Bluetooth
                          </h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium lg:ml-0 w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.connectivity.bluetooth.description}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">GPS</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.connectivity.GPS.description}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">Radio</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.connectivity.radio.description}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">USB</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.connectivity.USB.description}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">NFC</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.connectivity.NFC.description}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">Data</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.connectivity.data.description}`
                              : ""}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                      <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                        FEATURES
                      </div>
                      <div className="flex-col w-full">
                        <div className="flex w-full border-black border-b-[0.03rem] ">
                          <h3 className="w-1/3 text-sm font-bold">Sensors</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.features.sensor}`
                              : ""}
                          </label>
                          <br />
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold ">Audio</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium lg:ml-0 w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.features.audio}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">Browser</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.features.browser}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">Messaging</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.features.messaging}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">Games</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.features.games}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">Torch</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.features.torch}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">Extra</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${
                                  firstComparisonMobile.features.extra
                                    ? firstComparisonMobile.features.extra
                                    : "Nil"
                                }`
                              : ""}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                      <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                        BATTERY
                      </div>
                      <div className="flex-col w-full">
                        <div className="flex w-full border-black border-b-[0.03rem] ">
                          <h3 className="w-1/3 text-sm font-bold">Capacity</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.battery.capacity} mAh`
                              : ""}
                          </label>
                          <br />
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold ">
                            Description
                          </h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium lg:ml-0 w-[67%]"
                          >
                            {!myCheck
                              ? `${firstComparisonMobile.battery.description}`
                              : ""}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                      <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                        PRICE
                      </div>
                      <div className="flex-col w-full">
                        <div className="flex w-full border-black border-b-[0.03rem] ">
                          <h3 className="w-1/3 text-sm font-bold">
                            Price in Rs
                          </h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck
                              ? `Price in Rs: ${firstComparisonMobile.priceInPKR}`
                              : ""}
                          </label>
                          <br />
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold ">
                            Price in USD
                          </h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium lg:ml-0 w-[67%]"
                          >
                            {!myCheck
                              ? ` Price in USD: $${firstComparisonMobile.priceInUSD}`
                              : ""}{" "}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                      <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                        Rating
                      </div>
                      <div className="flex-col w-full">
                        <div className=" flex w-full">
                          {averageReview ? (
                            <label
                              htmlFor=""
                              className="text-sm font-medium lg:ml-0 w-[67%]"
                            >
                              Average Rating is{" "}
                              <strong>
                                {Math.round(averageReview * 10) / 10} stars
                              </strong>
                              - based on{" "}
                              <strong>
                                {!myCheck
                                  ? firstComparisonMobile.reviews.length
                                  : 0}{" "}
                              </strong>
                              user reviews.
                            </label>
                          ) : (
                            <label
                              htmlFor=""
                              className="text-sm font-medium lg:ml-0 w-[67%]"
                            >
                              <strong>NOT RATED YET</strong>
                            </label>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* right side  compare  */}
            <div className="w-full lg:w-1/2 flex-col  ">
              <div className="flex-col w-full bg-white pb-5">
                <h3 className="text-sm font-medium">Compare With</h3>
                <input
                  value={searchBar2}
                  placeholder="Seacrh second mobile here"
                  onChange={(e) => setSearchBar2(e.target.value)}
                  className="w-[90%] lg:w-[70%] text-center text-white font-medium  bg-buttonBgColor 
                bg-gradient-to-b text-sm lg:text-md p-3 lg:pl-10 rounded-[0.5rem] 
                mt-2 from-buttonBgColorGradian1 to-buttonBgcolorGradian2"
                />
                <div
                  className={`absolute bg-gray-100 lg:w-[31%] md:w-[87%] rounded-md cursor-pointer py-2 px-4 z-50 mx-auto ${
                    !searchBar2 ? "hidden" : ""
                  }`}
                >
                  {allMobilesForComparison
                    .filter((val) => {
                      if (searchBar2 === "") {
                        return val;
                      } else if (
                        val.mobile
                          .toLowerCase()
                          .includes(searchBar2.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((data, index) => (
                      <div className="z-50">
                        {searchBar2 ? (
                          <div
                            onClick={() => {
                              dispatch(getComparisonMobileById2(data._id));
                              setSearchBar2("");
                            }}
                          >
                            {data.mobile}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ))}
                </div>
              </div>

              {myCheck2 ? (
                <div className="flex items-center justify-center h-44">
                  Please select second mobile
                </div>
              ) : (
                <div>
                  <div
                    className={`w-full lg:w-[70%] z-0 text-xs pb-3 font-medium mt-[0.4rem]
               h-[430px] lg:ml-1 flex flex-col justify-center text-center 
               border-2 rounded-md border-black`}
                  >
                    <img
                      className=" object-top p-2  object-contain h-[20rem]"
                      src={
                        !myCheck2
                          ? `${baseURL}${secondComparisonMobile.mobilePhotos[0]}`
                          : ""
                      }
                    />
                    <h3>
                      {!myCheck2
                        ? secondComparisonMobile.brandName +
                          " / " +
                          secondComparisonMobile.modelNumber
                        : ""}{" "}
                    </h3>
                    <h3>
                      {!myCheck2
                        ? secondComparisonMobile.priceInPKR + " RS"
                        : ""}
                    </h3>
                    <div className="flex w-full  justify-center"></div>
                    <h3>
                      {!myCheck2 ? secondComparisonMobile.releaseDate : ""}
                    </h3>
                  </div>

                  <div className="pl-2 mt-5 flex justify-center md:justify-start mb-5">
                    <button className="rounded-2xl text-center p-[0.3rem] text-lg font-bold w-[70%]  bg-white">
                      Specification
                    </button>
                  </div>
                  <div className="w-full flex-col p-2 rounded-[0.5rem] mt-5 pb-[5rem] ">
                    {/* /// */}
                    <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                      <div className="lg:w-[40%] text-[#07844C] text-md font-bold ">
                        BUILD
                      </div>
                      <div className="flex-col w-full">
                        <div className="flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">OS</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.build.OS.description}, ${secondComparisonMobile.build.OS.type}`
                              : ""}
                          </label>
                          <br />
                        </div>
                        <div className=" flex w-full  border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">UI</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.build.UI}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full  border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">
                            DIMENSIONS
                          </h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.build.dimensions}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full  border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">WEIGHT</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.build.weight} Grams`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full  border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">SIM</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.build.sim}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full ">
                          <h3 className="w-1/3 text-sm font-bold">COLORS</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.build.colors}`
                              : ""}
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* /// */}
                    <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                      <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                        FREQUENCY
                      </div>
                      <div className="flex-col w-full">
                        <div className="flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">2G Band</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.frequency.twoGBand.description}`
                              : ""}
                          </label>{" "}
                          <br />
                        </div>
                        <div className=" flex w-full  border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">3G Band</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.frequency.threeGBand.description}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex  w-full  border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">4G Band</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%] "
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.frequency.fourGBand.description}`
                              : ""}
                          </label>
                        </div>

                        <div className=" flex w-full ">
                          <h3 className="w-1/3 text-sm font-bold">5G Band</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.frequency.fiveGBand.description}`
                              : ""}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                      <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                        PROCESSOR
                      </div>
                      <div className="flex-col w-full">
                        <div className="flex w-full border-black border-b-[0.03rem] ">
                          <h3 className="w-1/3 text-sm font-bold">CPU</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.processor.CPU}`
                              : ""}
                          </label>
                          <br />
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold ">Chipset</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium  lg:ml-0 w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.processor.chipSet}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">GPU</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {myCheck
                              ? `${secondComparisonMobile.processor.GPU}`
                              : ""}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className=" flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                      <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                        DISPLAY
                      </div>
                      <div className="flex-col w-full">
                        <div className="flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">
                            Technology
                          </h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.display.technology}`
                              : ""}
                          </label>{" "}
                          <br />
                        </div>
                        <div className=" flex w-full  border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">Size</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.display.size}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex  w-full  border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">
                            Resolution
                          </h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%] "
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.display.resolution}`
                              : ""}
                          </label>
                        </div>

                        <div className=" flex w-full ">
                          <h3 className="w-1/3 text-sm font-bold">
                            Extra Features
                          </h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.display.extraFeatures}`
                              : ""}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                      <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                        MEMORY
                      </div>
                      <div className="flex-col w-full">
                        <div className="flex w-full border-black border-b-[0.03rem] ">
                          <h3 className="w-1/3 text-sm font-bold">RAM</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.memory.ram.value} ${secondComparisonMobile.memory.ram.unit}`
                              : ""}
                          </label>
                          <br />
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold ">
                            ROM / STORAGE
                          </h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium  lg:ml-0 w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.memory.rom.value} ${secondComparisonMobile.memory.rom.unit}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">Card</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.memory.card} GB`
                              : ""}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                      <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                        CAMERA
                      </div>
                      <div className="flex-col w-full">
                        <div className="flex w-full border-black border-b-[0.03rem] ">
                          <h3 className="w-1/3 text-sm font-bold">
                            Main Camera
                          </h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.camera.main.value} MP / ${secondComparisonMobile.camera.main.description}`
                              : ""}
                          </label>
                          <br />
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold ">
                            Front Camera
                          </h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium lg:ml-0 w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.camera.front.value} MP / ${secondComparisonMobile.camera.front.description}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">Features</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.camera.features}`
                              : ""}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                      <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                        CONNECTIVITY
                      </div>
                      <div className="flex-col w-full">
                        <div className="flex w-full border-black border-b-[0.03rem] ">
                          <h3 className="w-1/3 text-sm font-bold">WLAN</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.connectivity.WLAN.description}`
                              : ""}
                          </label>
                          <br />
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold ">
                            Bluetooth
                          </h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium lg:ml-0 w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.connectivity.bluetooth.description}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">GPS</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.connectivity.GPS.description}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">Radio</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.connectivity.radio.description}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">USB</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.connectivity.USB.description}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">NFC</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.connectivity.NFC.description}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">Data</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.connectivity.data.description}`
                              : ""}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                      <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                        FEATURES
                      </div>
                      <div className="flex-col w-full">
                        <div className="flex w-full border-black border-b-[0.03rem] ">
                          <h3 className="w-1/3 text-sm font-bold">Sensors</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.features.sensor}`
                              : ""}
                          </label>
                          <br />
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold ">Audio</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium lg:ml-0 w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.features.audio}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">Browser</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.features.browser}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">Messaging</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.features.messaging}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">Games</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.features.games}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">Torch</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.features.torch}`
                              : ""}
                          </label>
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold">Extra</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${
                                  secondComparisonMobile.features.extra
                                    ? secondComparisonMobile.features.extra
                                    : "Nil"
                                }`
                              : ""}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                      <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                        BATTERY
                      </div>
                      <div className="flex-col w-full">
                        <div className="flex w-full border-black border-b-[0.03rem] ">
                          <h3 className="w-1/3 text-sm font-bold">Capacity</h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.battery.capacity} mAh`
                              : ""}
                          </label>
                          <br />
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold ">
                            Description
                          </h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium lg:ml-0 w-[67%]"
                          >
                            {!myCheck2
                              ? `${secondComparisonMobile.battery.description}`
                              : ""}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                      <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                        PRICE
                      </div>
                      <div className="flex-col w-full">
                        <div className="flex w-full border-black border-b-[0.03rem] ">
                          <h3 className="w-1/3 text-sm font-bold">
                            Price in Rs
                          </h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium w-[67%]"
                          >
                            {!myCheck2
                              ? `Price in Rs: ${secondComparisonMobile.priceInPKR}`
                              : ""}
                          </label>
                          <br />
                        </div>
                        <div className=" flex w-full border-black border-b-[0.03rem]">
                          <h3 className="w-1/3 text-sm font-bold ">
                            Price in USD
                          </h3>
                          <label
                            htmlFor=""
                            className="text-sm font-medium lg:ml-0 w-[67%]"
                          >
                            {!myCheck2
                              ? ` Price in USD: $${secondComparisonMobile.priceInUSD}`
                              : ""}{" "}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex-col lg:flex lg:flex-row w-full mt-5 border-black border-b-2 pb-3">
                      <div className="lg:w-[40%] text-[#07844C] text-md font-bold  ">
                        Rating
                      </div>
                      <div className="flex-col w-full">
                        <div className=" flex w-full">
                          {averageReview ? (
                            <label
                              htmlFor=""
                              className="text-sm font-medium lg:ml-0 w-[67%]"
                            >
                              Average Rating is{" "}
                              <strong>
                                {Math.round(averageReview * 10) / 10} stars
                              </strong>
                              - based on{" "}
                              <strong>
                                {!myCheck2
                                  ? secondComparisonMobile.reviews.length
                                  : 0}{" "}
                              </strong>
                              user reviews.
                            </label>
                          ) : (
                            <label
                              htmlFor=""
                              className="text-sm font-medium lg:ml-0 w-[67%]"
                            >
                              <strong>NOT RATED YET</strong>
                            </label>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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

export default Comparison;
