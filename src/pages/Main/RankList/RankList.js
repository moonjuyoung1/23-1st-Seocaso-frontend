import React from 'react';
import './RankList.scss';

class RankList extends React.Component {
  render() {
    const { image, name, address } = this.props;
    return (
      <li className="carousel-list">
        {/* li 자체를 클릭해야 product로 넘어가도록 */}
        <img alt="카페 이미지 썸네일" src={image} />
        <div>{name}</div>
        <div>{address}</div>
        {this.props.children}
      </li>
    );
  }
}

export default RankList;
