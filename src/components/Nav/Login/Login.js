import React from 'react';
import LoginModal from '../../../pages/Login/LoginModal';
import SignupModal from '../../../pages/Signup/SignupModal';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loginOnModal : false,
      signupOnModal : false,
    }
  }
  
  hadleLoginModal = () => {
    this.setState({
      loginOnModal: !this.state.loginOnModal,
    });
  };

  hadleSignupModal = () => {
    this.setState({
      signupOnModal: !this.state.signupOnModal,
    })
  }



  
  render() {
      console.log(this.state.loginOnModal);
      console.log(this.state.signupOnModal);

    return (
      <>
        <button onClick = {this.hadleLoginModal}>
          로그인</button>
        {this.state.loginOnModal && <LoginModal checkLogin={this.hadleLoginModal} checkSignup={this.hadleSignupModal}/  >}
        <button onClick = {this.hadleSignupModal}>
          회원가입</button>
        {this.state.signupOnModal && <SignupModal checkSignup={this.hadleSignupModal} checkLogin={this.hadleLoginModal}/>}
      </>
    );
  }
}

export default Login;