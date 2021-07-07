import { Router } from "./configs";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Router />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
