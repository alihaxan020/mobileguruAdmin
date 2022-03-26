import { createStore, combineReducers, applyMiddleware } from "redux";
import mobileReducer from "./reducers/mobileReducer";
import comparisonReducer from "./reducers/comparisonReducer";
import filterReducer from "./reducers/filterReducer";
import ReduxThunk from "redux-thunk";
const rootReducer = combineReducers({
  mobileReducer,
  comparisonReducer,
  filterReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default store;
