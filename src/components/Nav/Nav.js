import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Nav.scss';
import SignupModal from '../../pages/Signup/SignupModal';
import LoginModal from '../../pages/Login/LoginModal';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      loginOnModal: false,
      signupOnModal: false,
      profile: [],
    };
  }

  handleChange = e => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  enterInsertValue = e => {
    if (e.key === 'Enter') {
      this.props.history.push({
        pathname: `/Search/${this.state.searchInput}`,
        state: { keyword: this.state.searchInput },
      });
    }
    this.setState({
      searchInput: '',
    });
  };

  goToMypage = () => {
    this.props.history.push('/Mypage');
  };

  goToMain = () => {
    this.props.history.push('/Main');
  };

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
    const { searchInput } = this.state;
    const { handleChange, enterInsertValue } = this;
    return (
      <nav className="nav">
        <div className="nav-wrapper">
          <img
            alt="서카소 로고"
            src="../../images/seocaso_logo.png"
            onClick={this.goToMain}
          />
          <div className="search">
            <div className="search-box">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input
                type="text"
                value={searchInput}
                placeholder="카페 또는 주소를 검색해보세요."
                onChange={handleChange}
                onKeyPress={enterInsertValue}
              />
            </div>
            {localStorage.getItem('TOKEN') ? (
              <div className="login">
                <div>다슬님</div>
                <div onClick={this.goToMypage}>
                  <img alt="프로필사진" src="../../images/profilephoto.png" />
                </div>
              </div>
            ) : (
              <div className="not-login">
                <button className="nav-button" onClick={this.hadleLoginModal}>
                  로그인
                </button>
                {this.state.loginOnModal && (
                  <LoginModal
                    checkLogin={this.hadleLoginModal}
                    checkSignup={this.hadleSignupModal}
                    checkonSign={this.hadleSignupLoginModal}
                  />
                )}
                <button
                  className="nav-button signup-button "
                  onClick={this.hadleSignupModal}
                >
                  회원가입
                </button>
                {this.state.signupOnModal && (
                  <SignupModal
                    checkLogin={this.hadleLoginModal}
                    checkSignup={this.hadleSignupModal}
                    checkonSign={this.hadleSignupLoginModal}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
