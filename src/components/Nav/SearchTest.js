import React from "react";
import { withRouter } from "react-router-dom";
import SearchTestList from "./SearchTestList";
import "./SearchTest.scss";

class SearchTest extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResult: [],
    };
  }
  componentDidMount() {
    fetch("/data/SearchResultData.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          searchResult: data,
        });
      });
  }

  render() {
    const { searchResult } = this.state;
    const searchKeyword = this.props.location.state.test;
    const searchNameResult = searchResult.filter((search) =>
      search.cafeName.includes(searchKeyword)
    );

    const searchAdrResult = searchResult.filter((search) =>
      search.address.includes(searchKeyword)
    );

    return (
      <div className="search-result-box">
        <div className="result-address">
          <SearchTestList
            title="카페명 검색 결과"
            searchResult={searchResult}
            filterResult={searchNameResult}
          />
          <SearchTestList
            title="주소 검색 결과"
            searchResult={searchResult}
            filterResult={searchAdrResult}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(SearchTest);
