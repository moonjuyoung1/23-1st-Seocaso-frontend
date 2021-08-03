import React from 'react';
import "./LoginModal.scss";
import SignupModal from '../Signup/SignupModal';




class LoginModal extends React.Component {

  constructor() {
    super();
    this.state = {
      password : '',
      email : '',
    }
  }
  

  handleFetch = () => {
    fetch("http://10.58.4.232:8000/users/signin", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password        
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log("결과: ", result));

      
    
  }

  handleInputEmail = (e) => {
    this.setState({
      email : e.target.value

    })
  }

  handleInputPw = (e) => {
    this.setState({
      password : e.target.value

    })
  }
  

  render() {
    return (
      <>
        <div className='modal-login' onClick={this.props.checkLogin}>
          <div className='login-box'onClick={(e) => e.stopPropagation()}>
            <header><img src="/images/seocaso_logo.png" className='header-image'/></header>
            <h2 className='title'>로그인</h2>
            <section>
              <div>
                <div>
                  <form className='input-wrapup'>
                    <input type='text'
                    className='input-email'
                    placeholder='이메일'  
                    onChange={this.handleInputEmail}                  
                    />
                    <input type='password'
                    className='input-pw'
                    placeholder='비밀번호'
                    onChange={this.handleInputPw}
                    />                    
                    <button className='input-button'
                    onClick={this.handleFetch}
                    >로그인</button>
                  </form>
                  <div className='forget-box'>
                    <div className='forget-pw'><button className='forget-pw'>비밀번호를 잊어버리셨나요?</button></div>                  
                    <div className='account'>계정이 없으신가요? <button>회원가입</button>                    
                    </div>                  
                  </div>
                </div>  
                <div className='row-linebox'>
                    <hr />
                    <span>OR</span>
                  </div>
                  <button className='input-facebook'>Facebook 으로 로그인</button>

              </div>
            </section>
          
          </div>
        </div>
      </>
    );
  }
}

export default LoginModal;

