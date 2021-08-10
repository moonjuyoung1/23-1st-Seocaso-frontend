import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Main 컴포넌트
import Review from './pages/Product/Review';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/review" component={Review} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
