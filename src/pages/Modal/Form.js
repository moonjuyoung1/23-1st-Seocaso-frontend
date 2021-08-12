import React from 'react';
import Button from './Button';
import Input from './Input';
import Layout from './Layout';
import './Form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signupEmail: '',
      signinEmail: '',
      signupPw: '',
      signinPw: '',
      name: '',
    };
  }

  handleInputs = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    console.log(this.state.email, this.state.pw);
    const { name, signinEmail, signinPw, signupEmail, signupPw } = this.state;
    const { type, title, inputData, changeModalContents } = this.props;

    return (
      <Layout>
        <h2 className="title">{title}</h2>
        <div>
          <form className="input-wrapup">
            {inputData.map((input, idx) => (
              <Input
                key={idx}
                type={input.type}
                text={input.text}
                handleInputs={this.handleInputs}
              />
            ))}
            <Button value={title} />
          </form>
          {type === 'signIn' && (
            <div className="forget-box">
              <div className="forget-pw">
                <button className="forget-pw">
                  비밀번호를 잊어버리셨나요?
                </button>
              </div>
              <div className="account">
                계정이 없으신가요?{' '}
                <button onClick={changeModalContents}>회원가입</button>
              </div>
            </div>
          )}
          {type === 'signUp' && (
            <div className="login-botton">
              이미 가입하셨나요?{' '}
              <button onClick={changeModalContents}>로그인</button>
            </div>
          )}
        </div>
      </Layout>
    );
  }
}

export default Form;
