import { Router } from "./configs";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

import { PersistGate } from "redux-persist/integration/react";

import "./App.css";
import "./assets/css/preloader.css";

function App() {
  return (
    <div>
      <div className="loader " style={{ zIndex: "99999999" }}>
        <div id="preloader" />
      </div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
