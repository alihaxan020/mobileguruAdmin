import { Outlet } from "react-router";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Outlet />
      </div>
    </Provider>
  );
};

export default App;
