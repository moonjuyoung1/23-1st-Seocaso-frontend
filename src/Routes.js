import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Main 컴포넌트
import Footer from './components/Footer/Footer';
// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Footer" component={Footer} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
