import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Nav.scss";

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <nav>
          <h1>
            <img alt="서카소 로고" src="../images/seocaso_logo.png" />
          </h1>
          <div>
            <div className="search-box">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input type="text" placeholder="카페 또는 주소를 검색해보세요." />
            </div>

            <div>
              <button>로그인</button>
              <button>회원가입</button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Nav);
