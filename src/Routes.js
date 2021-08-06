import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Search 컴포넌트
import Search from './pages/Search/Search';

// Product 컴포넌트
import Product from './pages/Product/Product';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Search" component={Search} />
          <Route exact path="/Product" component={Product} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
