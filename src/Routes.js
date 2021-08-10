import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import SearchTest from "./components/Nav/SearchTest";
import Product from "./pages/Product/Product";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Nav" component={Nav} />
          <Route exact path="/SearchTest" component={SearchTest} />
          <Route exact path="/Product" component={Product} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
