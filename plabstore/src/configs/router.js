import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes, routeAdmin } from "./routes";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
// import Dashboard from '../pages/Dashboard'

import ProductContextProvider from "../contexts/productContext";

function router() {
  // const role = 0

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
