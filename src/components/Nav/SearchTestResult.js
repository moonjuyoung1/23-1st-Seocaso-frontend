import React from "react";

class SearchTestResult extends React.Component {
  render() {
    const { image, cafeName, address } = this.props.search;
    return (
      <li>
        <img alt="검색결과" src={image} />
        <div>{cafeName}</div>
        <div>{address}</div>
      </li>
    );
  }
}

export default SearchTestResult;
