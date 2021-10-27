import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
import { BrowserRouter as Router } from "react-router-dom";
import "../node_modules/font-awesome/scss/font-awesome.scss";
import Loader from "./components/layout/Loader";
import Aux from "hoc/_Aux";
import ScrollToTop from "./components/layout/ScrollToTop";
import SigninOidc from "components/pages/Auth/signin-oidc";
import SignoutOidc from "components/pages/Auth/signout-oidc";
import Home from "components/pages/Auth/home";
import Login from "components/pages/Auth/login";
import PrivateRoute from "utils/protectedRoute";
import routes from "navigation/privateRoute";
//import Dashboard from "../Demo/Dashboard/Default";
import PermissionProvider from "services/Auth/PermissionProvider/permissionProvider";
import { useSelector } from "react-redux";

const AdminLayout = Loadable({
  loader: () => import("./components/layout/AdminLayout"),
  loading: Loader,
});

// Function that simulates fetching a permission from remote server
var fetchPermission = function (user) {
  return function (permission) {
    return user?.permissions?.find((x) => x.key === permission);
  };
};
function App() {

  const currentUser = useSelector((state) => state.auth.user);

  const privateRoute = routes.map((route, index) => {
    return route.component ? (
      <PrivateRoute
        key={index}
        path={route.path}
        exact={route.exact}
        name={route.name}
        component={route.component}
      />
    ) : null;
  });
  return (
    <PermissionProvider fetchPermission={fetchPermission(currentUser)}>
      <Router basename="/">
        <Aux>
          <ScrollToTop>
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signout-oidc" component={SignoutOidc} />
                <Route path="/signin-oidc" component={SigninOidc} />
                <Route path="/home" component={Home} />
                <Route path="/" component={AdminLayout} />
                {privateRoute}
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Aux>
      </Router>
    </PermissionProvider>
  );
}

export default App;
