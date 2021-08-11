import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Nav.scss";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  enterInsertValue = (e) => { 
    if (e.key === "Enter") {
      this.props.history.push({
        pathname: "/Search",
        state: { keyword: this.state.searchInput },
      });
    }
  };

  render() {
    const { searchInput } = this.state;
    const { handleChange, enterInsertValue } =
      this;
    return (
      
        <nav className="nav">
          <div className="nav-wrapper">
            <img alt="서카소 로고" src="../images/seocaso_logo.png" />
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
              {/* merge후 로그인시 .login / 비로그인시 .not-login 보이도록 하기*/}
              <div className="not-login">
                <button>로그인</button>
                <button>회원가입</button>
              </div>
              <div className="login">
                <div>다슬님</div>
                <div>
                  <img alt="프로필사진" src="../../images/profilephoto.png" />
                </div>
              </div>
            </div>

          </div>
          
        </nav>
     
    );
  }
}

export default withRouter(Nav);
