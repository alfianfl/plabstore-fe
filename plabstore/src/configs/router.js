import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes, routeAdmin } from "./routes";
import { Navbar, NavAdmin } from "../components/navbar";
import { Footer } from "../components/footer";
import { Sidebar } from "../components/sidebar";
import Dashboard from '../pages/Dashboard'

function router() {
  const role = 0

  return (
    <>
      {role === 1 ? (
        <Router>
          <Navbar />
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
          <Footer />
        </Router>
      ) : (
        <Router>
          {/* <NavAdmin /> */}

          <Switch>
            {routeAdmin.map((route, index) => (
              <Route
                key={index}
                {...route}
                exact
                path={route.path()}
              >
                <>
                  <Sidebar />
                  <Dashboard>
                    < route.component />
                  </Dashboard>
                </>
              </ Route>
            ))}
          </Switch>
        </Router>
      )}
    </>
  );
}

export default router;
