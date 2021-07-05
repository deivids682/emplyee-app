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
          path={PUBLIC_ROUTES.addEmployee.path}
          component={PUBLIC_ROUTES.addEmployee.component}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
