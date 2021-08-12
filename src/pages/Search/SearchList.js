import React from 'react';

class SearchList extends React.Component {
  render() {
    const { title, results } = this.props;
    return (
      <div className="result-cafename">
        <div className="result-title">{title}</div>
        {results && results.length === 0 && (
          <div className="no-result">검색결과가 없습니다.</div>
        )}
        <ul className="search-result-list">
          {results &&
            results.map(keyword => {
              return (
                <li key={keyword.id}>
                  <img alt="검색결과" src={keyword.image} />
                  <div>{keyword.name}</div>
                  <div>{keyword.address}</div>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default SearchList;
