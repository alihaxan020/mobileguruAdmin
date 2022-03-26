import { actionTypes } from "../actionTypes";

const initialState = {
  filteredMobiles: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOBILES: {
      return {
        ...state,
        filteredMobiles: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
export default filterReducer;
