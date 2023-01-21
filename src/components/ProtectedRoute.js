import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children, ...props }) => {
  return (
    <Route {...props}>
      {isLoggedIn ? children : <Redirect to="/signin" />}
    </Route>
  );
};

export default ProtectedRoute;
