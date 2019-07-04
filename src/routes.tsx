import { Switch, Route } from "react-router";
import * as React from 'react';
import HomePage from "./pages/homePage";

const Routes = () =>
  <Switch>
    <Route exact path="/" component={HomePage} />
  </Switch>

export default Routes;