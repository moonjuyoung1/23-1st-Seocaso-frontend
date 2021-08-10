import React from 'react';
import LoginModal from '../../../pages/Login/LoginModal';
import SignupModal from '../../../pages/Signup/SignupModal';
import Modal from '../../../pages/Modal/Modal';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loginOnModal: false,
      signupOnModal: false,
      Modal: true,
    };
  }

  hadleLoginModal = () => {
    this.setState({
      loginOnModal: !this.state.loginOnModal,
    });
  };

  hadleSignupModal = () => {
    this.setState({
      signupOnModal: !this.state.signupOnModal,
    });
  };

  hadleSignupLoginModal = () => {
    this.setState({
      signupOnModal: !this.state.signupOnModal,
      loginOnModal: !this.state.loginOnModal,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.hadleLoginModal}>로그인</button>
        {this.state.loginOnModal && (
          <Modal type="signIn" checkLogin={this.hadleLoginModal} />
          // <LoginModal
          //   checkLogin={this.hadleLoginModal}
          //   checkSignup={this.hadleSignupModal}
          //   checkonSign={this.hadleSignupLoginModal}
          // />
        )}
        <button onClick={this.hadleSignupModal}>회원가입</button>
        {this.state.signupOnModal && (
          // <SignupModal
          //   checkLogin={this.hadleLoginModal}
          //   checkSignup={this.hadleSignupModal}
          //   checkonSign={this.hadleSignupLoginModal}
          // />
          <Modal type="signUp" checkSignup={this.hadleSignupModal} />
        )}
      </>
    );
  }
}

export default Login;
