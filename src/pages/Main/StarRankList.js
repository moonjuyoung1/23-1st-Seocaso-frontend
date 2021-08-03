import React from "react";
import "./Main.scss";

class StarRankList extends React.Component {
  render() {
    return (
      <li>
        {/* li 자체를 클릭해야 product로 넘어가도록 */}
        <img alt="카페 이미지 썸네일" src={this.props.image} />
        <div>{this.props.name}</div>
        <div>{this.props.address}</div>
        <div>평균★{this.props.star}</div>
      </li>
    );
  }
}

export default StarRankList;
