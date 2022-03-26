import { actionTypes } from "../actionTypes";

const initialState = {
  allMobilesForComparison: [],
  firstComparisonMobile: {},
  secondComparisonMobile: {},
};

const comparisonReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FIRST_COMPARISON_MOBILE: {
      return {
        ...state,
        firstComparisonMobile: action.payload,
      };
    }
    case actionTypes.SECOND_COMPARISON_MOBILE: {
      return {
        ...state,
        secondComparisonMobile: action.payload,
      };
    }
    case actionTypes.GET_ALL_MOBILES_FOR_COMPARISON: {
      return {
        ...state,
        allMobilesForComparison: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export default comparisonReducer;
