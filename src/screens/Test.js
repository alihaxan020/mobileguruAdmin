import React, { useState } from "react";
import { Footer, Navbar, MobileBrandsNames } from "components";
import InputRangee from "components/InputRange";
import { LeftSideMenu } from "megaComponents";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { getMobilesUnPaginated } from "../redux/actions/mobileActions";
import { isFilterMobile } from "../redux/actions/mobileActions";
const Test = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleIsFilter = (value) => dispatch(isFilterMobile(value));
  const [data, setData] = useState({
    WLAN: false,
    bluetooth: false,
    GPS: false,
    radio: false,
    USB: false,
    NFC: false,
    DATA: false,
    brandName: "",
    card: false,
    frontFlash: false,
    mainFlash: false,
    price: { min: 0, max: 500000 },
    ram: { min: 0, max: 32 },
    rom: { min: 0, max: 1024 },
    size: { min: 0, max: 10 },
    mainCam: { min: 2, max: 500 },
    frontCam: { min: 2, max: 500 },
    capacity: { min: 500, max: 20000 },
  });

  return (
    <>
      <React.Fragment>
        <Navbar />
        <div className="mainContent mt-5 lg:mt-20 flex flex-col lg:flex-row md:px-10">
          <div className="lg:w-[20%] mb-10 px-10 md:px-0">
            <MobileBrandsNames />
            <LeftSideMenu />
          </div>

          <main className="bg-slate-200  md:mx-10 rounded-lg lg:w-[60%] pb-6 h-auto">
            <h1 className="bg-buttonBgcolorGradian2 w-[100%]  flex p-5 justify-center text-white text-xl">
              Show 3 Result
            </h1>
            <h2 className="bg-backgroundGreenColor w-[100%] p-2 md:p-5 flex text-white text-xl">
              GENERAL
            </h2>

            <div className="w-full md:w-[100%] md:mx-auto px-3 my-1 md:my-6 inline-block">
              <div className="relative mx-auto">
                <select
                  className="block appearance-none w-full  border border-gray-200 text-gray-700 py-2.5 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="brandName"
                  value={data.brandName}
                  onChange={
                    (newValue) =>
                      setData({ ...data, brandName: newValue.target.value })

                    // setData({ ...data, brandName: value.target })
                  }
                >
                  <option value="apple">Apple</option>
                  <option value="samsung">Samsung</option>
                  <option value="htc">HTC</option>
                  <option value="nokia">Nokia</option>
                  <option value="oneplus">OnePlus</option>
                  <option value="huawei">Huawei</option>
                  <option value="lg">LG</option>
                  <option value="sony">Sony</option>
                  <option value="infinix">Infinix</option>
                  <option value="xiaomi">Xiaomi</option>
                  <option value="lenovo">Lenovo</option>
                  <option value="oppo">Oppo</option>
                  <option value="vivo">Vivo</option>
                  <option value="realme">Realme</option>
                  <option value="qmobile">Qmobile</option>
                  <option value="Tecno">Tecno</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-[90%] bg-white pb-6 px-4 md:p-6 mb-3 mx-auto">
              <h2 className="mb-6">Price</h2>
              <InputRangee
                minValue={1000}
                maxValue={500000}
                step={1000}
                name="price"
                onPriceCall={(values) => setData({ ...data, price: values })}
              />
            </div>
            <h2 className="bg-backgroundGreenColor w-[100%] p-2 md:p-5 flex text-white text-xl">
              CONNECTIVITY
            </h2>

            <div className="w-[90%] bg-white pl-1 pt-1 md:p-3  md:my-3 mx-auto flex  flex-wrap">
              <div className="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  name="true"
                  value={data.WLAN}
                  id="WLAN"
                  checked={data.WLAN}
                  defaultChecked={false}
                  onChange={(value) => setData({ ...data, WLAN: !data.WLAN })}
                />
                <label
                  className="form-check-label inline-block text-gray-800 text-xs md:text-base text-xs md:text-base"
                  htmlFor="WLAN"
                >
                  WLAN
                </label>
              </div>
              <div className="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  name="true"
                  type="checkbox"
                  id="bluetooth"
                  checked={data.bluetooth}
                  defaultChecked={false}
                  onChange={(value) =>
                    setData({ ...data, bluetooth: !data.bluetooth })
                  }
                />
                <label
                  className="form-check-label inline-block text-gray-800 text-xs md:text-base text-xs md:text-base"
                  htmlFor="bluetooth"
                >
                  Bluetooth
                </label>
              </div>
              <div className="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  name="true"
                  value={data.GPS}
                  id="GPS"
                  checked={data.GPS}
                  defaultChecked={false}
                  onChange={(value) => setData({ ...data, GPS: !data.GPS })}
                />
                <label
                  className="form-check-label inline-block text-gray-800 text-xs md:text-base"
                  htmlFor="GPS"
                >
                  GPS
                </label>
              </div>
              <div className="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  name="true"
                  value={data.radio}
                  id="radio"
                  checked={data.radio}
                  defaultChecked={false}
                  onChange={(value) => setData({ ...data, radio: !data.radio })}
                />
                <label
                  className="form-check-label inline-block text-gray-800 text-xs md:text-base"
                  htmlFor="radio"
                >
                  Radio
                </label>
              </div>
              <div className="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  name="true"
                  value={data.USB}
                  id="USB"
                  checked={data.USB}
                  defaultChecked={false}
                  onChange={(value) => setData({ ...data, USB: !data.USB })}
                />
                <label
                  className="form-check-label inline-block text-gray-800 text-xs md:text-base"
                  htmlFor="USB"
                >
                  USB
                </label>
              </div>
              <div className="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value={data.NFC}
                  id="NFC"
                  checked={data.NFC}
                  defaultChecked={false}
                  onChange={(value) => setData({ ...data, NFC: !data.NFC })}
                />
                <label
                  className="form-check-label inline-block text-gray-800 text-xs md:text-base"
                  htmlFor="NFC"
                >
                  NFC
                </label>
              </div>
              <div className="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  name="true"
                  value={data.DATA}
                  id="DATA"
                  checked={data.DATA}
                  defaultChecked={false}
                  onChange={(value) => setData({ ...data, DATA: !data.DATA })}
                />
                <label
                  className="form-check-label inline-block text-gray-800 text-xs md:text-base"
                  htmlFor="DATA"
                >
                  DATA
                </label>
              </div>
            </div>

            <h2 className="bg-backgroundGreenColor w-[100%] p-2 md:p-5 flex text-white text-xl">
              MEMORY
            </h2>
            <div className=" bg-white w-[90%] my-3 mx-auto p-4 pb-8 px-8 flex flex-col md:flex-row justify-between">
              <div className="w-[45%] mb-6">
                <h2 className="mb-8  font-bold">RAM</h2>
                <InputRangee
                  step={2}
                  minValue={0}
                  maxValue={32}
                  name="ram"
                  onRamCall={(values) => setData({ ...data, ram: values })}
                />
              </div>
              <div className="w-[45%]">
                <h2 className="mb-8 font-bold">Built-in Memory</h2>
                <InputRangee
                  step={8}
                  minValue={0}
                  maxValue={1024}
                  name="rom"
                  onRomCall={(values) => setData({ ...data, rom: values })}
                />
              </div>
            </div>
            <div className="w-[90%] bg-white p-3 my-3 mx-auto flex flex-wrap">
              <div className="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  name="true"
                  value={data.card}
                  id="card"
                  checked={data.card}
                  defaultChecked={false}
                  onChange={(value) => setData({ ...data, card: !data.card })}
                />
                <label
                  className="form-check-label inline-block text-gray-800 text-xs md:text-base"
                  htmlFor="card"
                >
                  Card slot
                </label>
              </div>
            </div>
            <h2 className="bg-backgroundGreenColor w-[100%] p-2 md:p-5 flex text-white text-xl">
              DISPLAY
            </h2>
            <div className="w-[90%] bg-white p-6 m-3 mx-auto">
              <h2 className="mb-6">Screen Size</h2>
              <InputRangee
                minValue={2}
                maxValue={10}
                step={1}
                name="size"
                onSizeCall={(values) => setData({ ...data, size: values })}
              />
            </div>
            <h2 className="bg-backgroundGreenColor w-[100%] p-2 md:p-5 flex text-white text-xl">
              CAMERA
            </h2>
            <div className="w-[90%] bg-white p-6 m-3 mx-auto">
              <h2 className="mb-6">Primary Camera</h2>
              <InputRangee
                minValue={2}
                maxValue={500}
                step={5}
                name="mainCam"
                onMainCamCall={(values) =>
                  setData({ ...data, mainCam: values })
                }
              />
            </div>
            <div className="w-[90%] bg-white p-3 my-3 mx-auto flex flex-wrap">
              <div className="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  name="true"
                  value={data.mainFlash}
                  id="mainFlash"
                  checked={data.mainFlash}
                  defaultChecked={false}
                  onChange={(value) =>
                    setData({ ...data, mainFlash: !data.mainFlash })
                  }
                />
                <label
                  className="form-check-label inline-block text-gray-800 text-xs md:text-base"
                  htmlFor="mainFlash"
                >
                  Camera Flash
                </label>
              </div>
            </div>
            <div className="w-[90%] bg-white p-6 m-3 mx-auto">
              <h2 className="mb-6">Secondary Camera</h2>
              <InputRangee
                minValue={2}
                maxValue={500}
                step={5}
                name="front"
                onFrontCall={(values) => setData({ ...data, frontCam: values })}
              />
            </div>
            <div className="w-[90%] bg-white p-3 my-3 mx-auto flex flex-wrap">
              <div className="form-check bg-slate-200 p-2 md:p-3 mr-[1px] mb-1 md:m-3">
                <input
                  className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  name="true"
                  value={data.frontFlash}
                  id="frontFlash"
                  checked={data.frontFlash}
                  defaultChecked={false}
                  onChange={(value) =>
                    setData({ ...data, frontFlash: !data.frontFlash })
                  }
                />
                <label
                  className="form-check-label inline-block text-gray-800 text-xs md:text-base"
                  htmlFor="frontFlash"
                >
                  Front Flash
                </label>
              </div>
            </div>

            <h2 className="bg-backgroundGreenColor w-[100%] p-2 md:p-5 flex text-white text-xl">
              BATTERY
            </h2>
            <div className="w-[90%] bg-white p-6 m-3 mx-auto">
              <h2 className="mb-6">Capacity</h2>
              <InputRangee
                minValue={500}
                maxValue={20000}
                step={5}
                name="capacity"
                onCapacityCall={(values) =>
                  setData({ ...data, capacity: values })
                }
              />
            </div>
            <div
              className="flex items-center justify-center py-2 px-8 text-white cursor-pointer bg-green-700"
              onClick={() => {
                navigate("/MobileList", {
                  state: { title: "advance", isFilter: true },
                });
                handleIsFilter(true);
                dispatch(getMobilesUnPaginated(data));
              }}
            >
              Apply Advance Filter
            </div>
          </main>
        </div>
        <div className="mt-[10rem]">
          <Footer />
        </div>
      </React.Fragment>
    </>
  );
};

export default Test;
