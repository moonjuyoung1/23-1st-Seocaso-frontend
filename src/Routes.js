
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/Main" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
