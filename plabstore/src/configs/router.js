import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./routes";

function router() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            {...route}
            component={route.component}
            exact
            path={route.path()}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default router;
