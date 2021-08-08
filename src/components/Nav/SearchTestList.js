import React from "react";
import SearchTestResult from "./SearchTestResult";

class SearchTestList extends React.Component {
  render() {
    return (
      <div className="result-cafename">
        <div className="result-title">{this.props.title}</div>
        <ul className="search-result-list">
          {this.props.filterResult.length === 0 && (
            <div className="no-result">검색결과가 없습니다.</div>
          )}
          {this.props.filterResult.map((search) => {
            return <SearchTestResult key={search.id} search={search} />;
          })}
        </ul>
      </div>
    );
  }
}

export default SearchTestList;
