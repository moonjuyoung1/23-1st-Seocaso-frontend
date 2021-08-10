import React from 'react';
import SearchList from './SearchList';
import './Search.scss';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResult: [],
    };
  }
  componentDidMount() {
    fetch('/data/SearchResultData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          searchResult: data,
        });
      });
  }

  render() {
    return (
      <div className="search-result-box">
        <div className="result-address">
          <SearchList
            title="카페명 검색 결과"
            searchResult={this.state.searchResult}
          />
          <SearchList
            title="주소 검색 결과"
            searchResult={this.state.searchResult}
          />
        </div>
      </div>
    );
  }
}

export default Search;
