import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { PUBLIC_ROUTES } from "./publicRoutes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={PUBLIC_ROUTES.AddEmployee.path}
          component={PUBLIC_ROUTES.AddEmployee.component}
        ></Route>
        <Route
          exact
          path={PUBLIC_ROUTES.HomePage.path}
          component={PUBLIC_ROUTES.HomePage.component}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
