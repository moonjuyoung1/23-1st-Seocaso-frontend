import React from 'react';
import './SignupModal.scss';
import LoginModal from '../Login/LoginModal';
import { withRouter } from 'react-router-dom';

class SignupModal extends React.Component {
  constructor() {
    super();
    this.state = {
      nickname: '',
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
        nickname: this.state.nickname,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
    this.props.history.push('/Main');
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
      <>
        <div className="signup-modal" onClick={this.props.checkSignup}>
          <div className="signup-box" onClick={e => e.stopPropagation()}>
            <header>
              <img src="/images/seocaso_logo.png" className="header-image" />
            </header>
            <h2 className="title">회원가입</h2>
            <section>
              <div>
                <div>
                  <form className="input-wrapup">
                    <div>
                      <input
                        type="text"
                        className="input-name"
                        placeholder="이름"
                        onChange={this.handleInput}
                        name="nickname"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="input-email"
                        placeholder="이메일"
                        onChange={this.handleInput}
                        name="email"
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        className="input-pw"
                        placeholder="비밀번호"
                        onChange={this.handleInput}
                        name="password"
                      />
                    </div>
                    <button className="input-button" onClick={this.handleFetch}>
                      회원가입
                    </button>
                  </form>
                  <div className="login-botton">
                    이미 가입하셨나요?{' '}
                    <button onClick={this.props.checkonSign}>로그인</button>
                  </div>
                  <div className="row-line">
                    <hr />
                    <span>OR</span>
                  </div>
                  <button className="input-facebook">
                    Facebook 으로 로그인
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(SignupModal);
