import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./routes";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

import ProductContextProvider from "../contexts/productContext";

function router() {
  return (
    <ProductContextProvider>
      <Router>
        <Navbar />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              {...route}
              component={route.component}
              exact={route.exact}
              path={route.path()}
            />
          ))}
        </Switch>
        <Footer />
      </Router>
    </ProductContextProvider>
  );
}

export default router;
