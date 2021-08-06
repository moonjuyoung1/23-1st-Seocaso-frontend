import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Nav.scss";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      recent: [],
      searchInput: "",
      starRanking: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  enterInsertValue = (e) => {
    const { searchInput, recent } = this.state;
    if (e.key === "Enter") {
      this.setState(
        {
          recent: recent.concat(searchInput),
          searchInput: "",
        },
        () => {
          sessionStorage.setItem("recent", JSON.stringify(this.state.recent));
        }
      );
    }
  };

  handleClickRemove = () => {
    sessionStorage.clear();
    this.setState({
      recent: [],
    });
  };

  componentDidMount() {
    fetch("/data/StarRankingData.json", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          starRanking: data,
        });
      });

    this.setState({
      recent: JSON.parse(sessionStorage.getItem("recent")) || [],
    });
  }

  render() {
    return (
      <div className="nav">
        <nav>
          <img alt="서카소 로고" src="../images/seocaso_logo.png" />
          <div className="search">
            <div className="search-box">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input
                type="text"
                value={this.state.searchInput}
                placeholder="카페 또는 주소를 검색해보세요."
                onChange={this.handleChange}
                onKeyPress={this.enterInsertValue}
              />
              <div className="searchResultBox">
                <div>
                  <p>
                    최근검색어
                    <span onClick={this.handleClickRemove}>전체삭제</span>
                  </p>
                  <div>
                    {this.state.recent.map((recent, idx) => {
                      return <div key={idx}>{recent}</div>;
                    })}
                  </div>
                </div>
                <div>
                  <p>인기검색어</p>
                  <div>
                    {this.state.starRanking.map((el) => {
                      return <div key={el.id}>{el.cafeName}</div>;
                    })}
                  </div>
                </div>
              </div>
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
