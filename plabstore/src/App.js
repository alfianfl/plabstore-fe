import { Router } from "./configs";

import "./App.css";
import "./assets/css/preloader.css";

function App() {
  return (
    <div>
      <div className="loader ">
        <div id="preloader" />
      </div>

      <Router />
    </div>
  );
}

export default App;
