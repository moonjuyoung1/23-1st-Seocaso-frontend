import React from 'react';
import Form from './Form';

class Modal extends React.Component {
  render() {
    const { type, closeModal, changeModalContents } = this.props;
    return (
      <div className="modal-login" onClick={closeModal}>
        <Form
          type={type}
          title={type === 'signUp' ? '회원가입' : '로그인'}
          inputData={type === 'signUp' ? SIGNUP_DATA : SIGNIN_DATA}
          changeModalContents={changeModalContents}
        />

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
    type: 'singupEmail',
    text: '이메일',
  },
  {
    type: 'signupPw',
    text: '비밀호',
  },
];

const SIGNIN_DATA = [
  {
    type: 'signinEmail',
    text: '이메일',
  },
  {
    type: 'signinPw',
    text: '비밀번호',
  },
];

export default Modal;
