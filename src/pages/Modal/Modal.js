import React from 'react';
import Form from './Form';

class Modal extends React.Component {
  render() {
    const { type } = this.props;
    return (
      <div className="modal-login" onClick={this.props.checkLogin}>
        {type === 'signUp' && (
          <Form type="signUp" title="회원가입" inputData={SIGNUP_DATA} />
        )}
        {type === 'signIn' && (
          <Form type="signIn" title="로그인" inputData={SIGNIN_DATA} />
        )}

        {/* <Form type="signUp" title="회원가입" inputData={SIGNUP_DATA} />
        <Form type="signIn" title="로그인" inputData={SIGNIN_DATA} /> */}
      </div>
    );
  }
}

const SIGNUP_DATA = [
  {
    type: 'name',
    text: '이름',
  },
  {
    type: 'email',
    text: '이메일',
  },
  {
    type: 'password',
    text: '비밀번호',
  },
];

const SIGNIN_DATA = [
  {
    type: 'email',
    text: '이메일',
  },
  {
    type: 'password',
    text: '비밀번호',
  },
];

export default Modal;
