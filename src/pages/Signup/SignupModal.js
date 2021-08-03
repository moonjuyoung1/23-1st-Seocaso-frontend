import React from 'react';
import "./SignupModal.scss";
import LoginModal from '../Login/LoginModal';

class SignupModal extends React.Component {

  constructor() {
    super();
    this.state = {
      nickname : '',
      password : '',
      email : '',
    }
  }
  
  handleFetch = () => {
    fetch("http://10.58.4.232:8000/users/signin", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        nickname: this.state.nickname,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log("결과: ", result));
    
  }

  hadleLoginModal = () => {
    this.setState({
      loginOnModal: !this.state.loginOnModal,
    });
    if (this.state.signupOnModal === false)  {
      this.state.signupOnModal === true
    }
  };

  handleInputName = (e) => {
    this.setState({
      nickname : e.target.value
    });
  };

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
    console.log(this.state.nickname)
    console.log(this.state.email)
    console.log(this.state.password)

    return (      
      <>
        <div className='signup-modal' onClick={this.props.checkSignup}>
          <div className='signup-box' onClick={(e) => e.stopPropagation()}>
            <header><img src="/images/seocaso_logo.png" className='header-image' /></header>
            <h2 className='title'>회원가입</h2>
            <section>
              <div>
                <div>
                  <form className='input-wrapup'>
                    <div>
                      <input type='text'
                      className='input-name'
                      placeholder='이름'
                      onChange={this.handleInputName}
                      />                                         
                    </div>
                    <div>  
                      <input type='text'
                      className='input-email'
                      placeholder='이메일'
                      onChange={this.handleInputEmail}
                      />                                                            
                    </div>
                    <div>  
                      <input type='password'
                      className='input-pw'
                      placeholder='비밀번호'
                      onChange={this.handleInputPw}
                      />                      
                    </div>                      
                      <button className='input-button'
                      onClick={this.handleFetch}>회원가입</button>     
                  </form>
                  <div className='login-botton'>이미 가입하셨나요? <button onClick={this.hadleLoginModal}>로그인</button>
                  {this.state.loginOnModal && <LoginModal />}
                  </div>  
                  <div className='row-line'>
                    <hr />
                    <span>OR</span>
                  </div>
                  <button className='input-facebook'>Facebook 으로 로그인</button>

                </div>  
              </div>
            </section>
          
          </div>
        </div>
      </>
    );
  }
}

export default SignupModal;



//<img src="/images/seocaso_logo.png"/>
