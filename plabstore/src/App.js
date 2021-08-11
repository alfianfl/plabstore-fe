import { Router } from "./configs";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";
import "./assets/css/preloader.css";

function App() {
  return (
    <div>
      <div className="loader ">
        <div id="preloader" />
      </div>
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
