import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Nav.scss";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      popular: [],
      showModal: false,
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
        pathname: "/SearchTest",
        state: { test: this.state.searchInput },
      });
    }
  };

  handleModal = () => {
    this.setState({
      showModal: true,
    });
  };

  handleModalRemove = () => {
    this.setState({
      showModal: false,
    });
  };

  componentDidMount() {
    fetch("/data/SearchResultData.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          popular: data,
        });
      });
  }

  render() {
    const { searchInput, showModal, popular } = this.state;
    const { handleModal, handleChange, enterInsertValue, handleModalRemove } =
      this;
    return (
      <div className="nav">
        <nav>
          <img alt="서카소 로고" src="../images/seocaso_logo.png" />
          <div className="search">
            <div className="search-box">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input
                type="text"
                value={searchInput}
                placeholder="카페 또는 주소를 검색해보세요."
                onClick={handleModal}
                onChange={handleChange}
                onKeyPress={enterInsertValue}
              />
              <div
                className="searchResultBox"
                style={{ display: showModal && "block" }}
              >
                <div>
                  <FontAwesomeIcon
                    icon={faTimes}
                    onClick={handleModalRemove}
                    className="modal-close-icon"
                  />
                  <p>인기검색어</p>
                  <div>
                    {popular.map((el) => {
                      return <div key={el.id}>{el.cafeName}</div>;
                    })}
                  </div>
                </div>
              </div>
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
        </nav>
      </div>
    );
  }
}

export default withRouter(Nav);
