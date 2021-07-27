import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes, routeAdmin } from "./routes";
import TemplateUser from "../pages/Template/TemplateUser";
import TemplateAdmin from '../pages/Template/TemplateAdmin'
import ProductContextProvider from "../contexts/productContext";

function router() {
  // const role = 0

  return (
    <ProductContextProvider>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              // {...route}
              // component={route.component}
              exact={route.exact}
              path={route.path()}
            >
              <TemplateUser>
                < route.component />
              </TemplateUser>
            </Route>
          ))}
          {routeAdmin.map((route, index) => (
            <Route
              key={index}
              // {...route}
              // component={route.component}
              exact
              path={route.path()}
            >
              <TemplateAdmin>
                < route.component />
              </TemplateAdmin>
            </Route>
          ))}
        </Switch>
      </Router>
    </ProductContextProvider>
  );
}

export default router;
