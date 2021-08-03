import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Product from "./pages/Product/Product";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Main" component={Main} />
          <Route exact path="/Product" component={Product} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
