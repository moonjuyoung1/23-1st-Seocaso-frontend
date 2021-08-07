import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Main 컴포넌트
import Main from './pages/Main/Main';

// Product 컴포넌트
import Product from './pages/Product/Product';
import SignupModal from './pages/Signup/SignupModal';
import LoginModal from './pages/Login/LoginModal';
import Nav from './components/Nav/Login/Login';
import Mypage from './pages/Mypage/Mypage';
import Modal from './pages/Modal/Modal';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/Main" component={Main} />
          <Route exact path="/Product" component={Product} />
          <Route exact path="/SignupModal" component={SignupModal} />
          <Route exact path="/LoginModal" component={LoginModal} />
          <Route exact path="/Mypage" component={Mypage} />
          <Route exact path="/Modal" component={Modal} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
