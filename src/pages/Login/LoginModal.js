import React from 'react';
import './LoginModal.scss';
import SignupModal from '../Signup/SignupModal';
import { withRouter } from 'react-router-dom';

class LoginModal extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
    };
  }

  handleFetch = e => {
    e.preventDefault();
    fetch('http://10.58.0.59:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log('결과: ', response);
        if (response.TOKEN) {
          localStorage.setItem('TOKEN', response.TOKEN);
          this.props.history.push('/main');
          // this.props.checkLogin();
        } else {
          alert('아이디/ 비밀번호를 다시 입력해주세요!');
        }
      });
  };

  goToMain = () => {
    this.props.history.push('/main');
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="modal-login" onClick={this.props.checkLogin}>
        <div className="login-box" onClick={e => e.stopPropagation()}>
          <header>
            <img src="/images/seocaso_logo.png" className="header-image" />
          </header>
          <h2 className="title">로그인</h2>

          <div>
            <form className="input-wrapup">
              <input
                type="text"
                className="input-email"
                placeholder="이메일"
                onChange={this.handleInput}
                name="email"
              />
              <input
                type="password"
                className="input-password"
                placeholder="비밀번호"
                onChange={this.handleInput}
                name="password"
              />
              <button className="input-button" onClick={this.handleFetch}>
                로그인
              </button>
            </form>
            <div className="forget-box">
              <div className="forget-pw">
                <button className="forget-pw">
                  비밀번호를 잊어버리셨나요?
                </button>
              </div>
              <div className="account">
                계정이 없으신가요?{' '}
                <button onClick={this.props.checkonSign}>회원가입</button>
              </div>
            </div>
            <div className="row-linebox">
              <hr />
              <span>OR</span>
            </div>

            <button className="input-facebook">Facebook 으로 로그인</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginModal);
