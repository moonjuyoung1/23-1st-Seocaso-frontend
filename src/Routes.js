import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Mypage from './pages/MyPage/Mypage';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/Mypage" component={Mypage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
