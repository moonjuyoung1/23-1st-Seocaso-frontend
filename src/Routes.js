import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Search from './pages/Search/Search';
import Product from './pages/Product/Product';
import Image from './pages/Product/Body/SideInfo/Image/Image';
import mypage from './pages/MyPage/Mypage';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/mypage" component={mypage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
