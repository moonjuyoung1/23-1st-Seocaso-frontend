import React from 'react';

import Info from './Info';
import Menu from './Menu';
import Graph from './Graph';
import Comment from './Comment';
import SideInfo from './SideInfo';
// import Recommend from './Recommend';

import './Body.scss';

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      menuList: [],
      imageList: [],
    };
  }

  componentDidMount() {
    fetch('./data/Mockdata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          menuList: data.menus,
          imageList: data.recommendation,
        });
      });
  }

  render() {
    const { imageList, menuList } = this.state;
    return (
      <div className="body-container">
        <div>
          <div className="body-container">
            <div className="main-info">
              <Info />
              <Menu type="menu" title="메뉴" menu={menuList} />
              <Graph />
              <Comment />
              <Menu type="recommend" title="추천" menu={imageList} />
            </div>
            <SideInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
