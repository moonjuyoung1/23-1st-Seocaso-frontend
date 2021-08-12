import React from 'react';
import SearchResult from './SearchResult';

class SearchList extends React.Component {
  render() {
    return (
      <div className="result-cafename">
        <div className="result-title">{this.props.title}</div>
        <ul className="search-result-list">
          {this.props.searchResult.map(search => {
            return <SearchResult key={search.id} search={search} />;
          })}
        </ul>
      </div>
    );
  }
}

export default SearchList;
