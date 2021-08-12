import React from 'react';

import { API } from '../../../config';

import Info from './Info';
import Menu from './Menu';
import Graph from './Graph';
import Comment from './Comment';
import SideInfo from './SideInfo';
import Review from './Review';
// import Recommend from './Recommend';

import './Body.scss';

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      menuList: [],
      imageList: [],
      reviewList: [],
    };
  }
  componentDidMount() {
    fetch(`${API.CAFE_INFO}1/menus`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          menuList: data.menus,
        });
      });
    fetch(`${API.CAFE_INFO}1/recommendation`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          imageList: data.recommendation,
        });
      });
    fetch(`${API.CAFE_INFO}1/review`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviewList: data.reviews,
        });
      });
  }

  // 별점이 들어오면 코멘트 등장
  render() {
    const { imageList, menuList, reviewList } = this.state;
    const { infoList } = this.props;
    return (
      <div className="body-container">
        <div>
          <Review />
          <div className="body-container">
            <div className="main-info">
              <Info infoList={infoList} />
              <Menu type="menu" title="메뉴" menu={menuList} />
              <Graph info={infoList} />
              <Comment commentList={reviewList} />
              <Menu type="recommend" title="추천" menu={imageList} />
            </div>
            <SideInfo infoList={infoList} />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
