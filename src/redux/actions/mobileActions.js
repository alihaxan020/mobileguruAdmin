import { actionTypes } from "../actionTypes";
import axios from "axios";
import { baseURL } from "../../api/baseURL";
export const getMobiles = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `${baseURL}/api/v1/mobiles/getallpaginatedmobiles`,
      {
        params: {
          page,
        },
      }
    );
    if (res.data.success) {
      dispatch({
        type: actionTypes.GET_MOBILES,
        payload: res.data.data,
      });
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.data.length < 15 ? false : res.data.success,
      });
    } else {
      console.log("Sever error");
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.success,
      });
      alert(res.data.data);
    }
  };
};

export const getMobilesUnPaginated = (values) => {
  return async (dispatch) => {
    const res = await axios.post(
      `${baseURL}/api/v1/mobiles/filterbyadvancesearch`,
      {
        values,
      }
    );
    if (res.data.success) {
      dispatch({
        type: actionTypes.GET_MOBILES,
        payload: res.data.data,
      });
    }
  };
};

export const getSingleMobile = (value) => (dispatch) => {
  dispatch({
    type: actionTypes.GET_SINGLE_MOBILE,
    payload: value,
  });
};

export const getMobileById = (value) => async (dispatch) => {
  const res = await axios.get(`${baseURL}/api/v1/mobiles/getsinglemobile`, {
    params: {
      detailId: `${value}`,
    },
  });
  dispatch({
    type: actionTypes.GET_MOBILE_BY_ID,
    payload: res.data.data,
  });
};
export const getAllPhonesForComparison = () => async (dispatch) => {
  const res = await axios.get(`${baseURL}/api/v1/mobiles/compare`);

  dispatch({
    type: actionTypes.GET_ALL_MOBILES_FOR_COMPARISON,
    payload: res.data.data,
  });
};

export const getComparisonMobileById1 = (value) => async (dispatch) => {
  const res = await axios.get(`${baseURL}/api/v1/mobiles/getsinglemobile`, {
    params: {
      detailId: `${value}`,
    },
  });
  dispatch({
    type: actionTypes.FIRST_COMPARISON_MOBILE,
    payload: res.data.data,
  });
};
export const getComparisonMobileById2 = (value) => async (dispatch) => {
  const res = await axios.get(`${baseURL}/api/v1/mobiles/getsinglemobile`, {
    params: {
      detailId: `${value}`,
    },
  });
  dispatch({
    type: actionTypes.SECOND_COMPARISON_MOBILE,
    payload: res.data.data,
  });
};
export const getUsedMobileById = (value) => async (dispatch) => {
  const res = await axios.get(`${baseURL}/api/v1/mobiles/getoldsinglemobile`, {
    params: {
      detailId: `${value}`,
    },
  });
  dispatch({
    type: actionTypes.GET_MOBILE_BY_ID,
    payload: res.data.data,
  });
};

export const postReview = (value) => async (dispatch) => {
  const res = await axios.patch(`${baseURL}/api/v1/mobiles/addReviews`, {
    value,
  });
};

export const isFilterMobile = (value) => (dispatch) => {
  dispatch({
    type: actionTypes.IS_FILTER,
    payload: value,
  });
};
export const getMobilesByPrice = (values, page) => {
  return async (dispatch) => {
    const res = await axios.get(`${baseURL}/api/v1/mobiles/filterbyprice`, {
      params: {
        page,
        lP: values.lP,
        uP: values.uP,
      },
    });

    if (res.data.success) {
      dispatch({
        type: actionTypes.GET_MOBILES,
        payload: res.data.data,
      });
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.data.length < 15 ? false : res.data.success,
      });
    } else {
      console.log("Sever error");
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.success,
      });
      alert(res.data.data);
    }
  };
};

export const getMobilesByRAM = (values, page) => {
  return async (dispatch) => {
    const res = await axios.get(`${baseURL}/api/v1/mobiles/filterbyram`, {
      params: {
        page,
        lP: values.lP,
        uP: values.uP,
      },
    });

    if (res.data.success) {
      dispatch({
        type: actionTypes.GET_MOBILES,
        payload: res.data.data,
      });
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.data.length < 15 ? false : res.data.success,
      });
    } else {
      console.log("Sever error");
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.success,
      });
      alert(res.data.data);
    }
  };
};

export const getMobilesByROM = (values, page) => {
  return async (dispatch) => {
    const res = await axios.get(`${baseURL}/api/v1/mobiles/filterbyrom`, {
      params: {
        page,
        lP: values.lP,
        uP: values.uP,
      },
    });

    if (res.data.success) {
      dispatch({
        type: actionTypes.GET_MOBILES,
        payload: res.data.data,
      });
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.data.length < 15 ? false : res.data.success,
      });
    } else {
      console.log("Sever error");
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.success,
      });
      alert(res.data.data);
    }
  };
};

export const getMobilesBySize = (values, page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `${baseURL}/api/v1/mobiles/filterbyscreensize`,
      {
        params: {
          page,
          lP: values.lP,
          uP: values.uP,
        },
      }
    );

    if (res.data.success) {
      dispatch({
        type: actionTypes.GET_MOBILES,
        payload: res.data.data,
      });
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.data.length < 15 ? false : res.data.success,
      });
    } else {
      console.log("Sever error");
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.success,
      });
      alert(res.data.data);
    }
  };
};

export const getMobilesByMainCam = (values, page) => {
  return async (dispatch) => {
    const res = await axios.get(`${baseURL}/api/v1/mobiles/filterbymaincam`, {
      params: {
        page,
        lP: values.lP,
        uP: values.uP,
      },
    });

    if (res.data.success) {
      dispatch({
        type: actionTypes.GET_MOBILES,
        payload: res.data.data,
      });
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.data.length < 15 ? false : res.data.success,
      });
    } else {
      console.log("Sever error");
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.success,
      });
      alert(res.data.data);
    }
  };
};

export const getMobilesByFrontCam = (values, page) => {
  return async (dispatch) => {
    const res = await axios.get(`${baseURL}/api/v1/mobiles/filterbyfrontcam`, {
      params: {
        page,
        lP: values.lP,
        uP: values.uP,
      },
    });

    if (res.data.success) {
      dispatch({
        type: actionTypes.GET_MOBILES,
        payload: res.data.data,
      });
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.data.length < 15 ? false : res.data.success,
      });
    } else {
      console.log("Sever error");
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.success,
      });
      alert(res.data.data);
    }
  };
};

export const getMobilesByBattery = (values, page) => {
  return async (dispatch) => {
    const res = await axios.get(`${baseURL}/api/v1/mobiles/filterbybattery`, {
      params: {
        page,
        lP: values.lP,
        uP: values.uP,
      },
    });

    if (res.data.success) {
      dispatch({
        type: actionTypes.GET_MOBILES,
        payload: res.data.data,
      });
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.data.length < 15 ? false : res.data.success,
      });
    } else {
      console.log("Sever error");
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.success,
      });
      alert(res.data.data);
    }
  };
};

export const getMobilesByOS = (values, page) => {
  return async (dispatch) => {
    const res = await axios.get(`${baseURL}/api/v1/mobiles/filterbyos`, {
      params: {
        page,
        OS: values.value,
      },
    });

    if (res.data.success) {
      dispatch({
        type: actionTypes.GET_MOBILES,
        payload: res.data.data,
      });
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.data.length < 15 ? false : res.data.success,
      });
    } else {
      console.log("Sever error");
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.success,
      });
      alert(res.data.data);
    }
  };
};
export const getMobilesByBrandName = (values, page) => {
  return async (dispatch) => {
    const res = await axios.get(`${baseURL}/api/v1/mobiles/filterbybrandname`, {
      params: {
        page,
        brandName: values,
      },
    });

    if (res.data.success) {
      dispatch({
        type: actionTypes.GET_MOBILES,
        payload: res.data.data,
      });
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.data.length < 15 ? false : res.data.success,
      });
    } else {
      console.log("Sever error");
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.success,
      });
      alert(res.data.data);
    }
  };
};

export const uploadAd = (values, images) => {
  return async (dispatch) => {
    const formData = new FormData();
    for (var i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    try {
      const res = await axios.post(
        `${baseURL}/api/v1/usedmobile/uploadadd`,

        formData,
        {
          params: {
            values,
          },
        },
        {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data) {
        alert("save successfully");
      } else {
        alert("system busy please try again later");
      }
      // eslint-disable-next-line no-unreachable
    } catch (error) {
      // Add custom logic to handle errors
    }
  };
};
export const getOldMobiles = (page) => {
  return async (dispatch) => {
    const res = await axios.get(`${baseURL}/api/v1/usedmobile/getusedmobiles`, {
      params: {
        page,
      },
    });

    if (res.data.success) {
      dispatch({
        type: actionTypes.GET_MOBILES,
        payload: res.data.data,
      });
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.data.length < 15 ? false : res.data.success,
      });
    } else {
      console.log("Sever error");
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.success,
      });
      alert(res.data.data);
    }
  };
};

export const getLatestMobiles = () => {
  return async (dispatch) => {
    const res = await axios.get(
      `${baseURL}/api/v1/mobiles/getallpaginatedmobiles`,
      {
        params: {
          page: 1,
        },
      }
    );
    if (res.data.success) {
      dispatch({
        type: actionTypes.GET_LATEST_MOBILES,
        payload: res.data.data,
      });
    } else {
      console.log("Sever error");
    }
  };
};

export const searchBySearchBar = (value, navigate) => {
  console.log(value, "search bar value");
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${baseURL}/api/v1/mobiles/filterbysearchbar`,

        { value: value.trim() },
        { params: { page: 1 } },
        {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      if (res.data.success) {
        navigate("/MobileList", {
          state: { title: "Search", isFilter: true },
        });
        console.log(res.data.data, "search by search bar data received");
        dispatch({
          type: actionTypes.IS_FILTER,
          payload: true,
        });
        dispatch({
          type: actionTypes.GET_MOBILES,
          payload: res.data.data,
        });
      } else {
        alert(res.data.data);
      }
      // eslint-disable-next-line no-unreachable
    } catch (error) {
      // Add custom logic to handle errors
    }
  };
};
