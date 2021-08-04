import React from 'react';
import './Body.scss';

import Info from './Info/Info';
import Menu from './Menu/Menu';
import Graph from './Graph/Graph';
import Comment from './Comment/Comment';
import SideInfo from './SideInfo/SideInfo';
import Recommend from './Recommend/Recommend';
// import imgA from '../../../assets/images/backimg1.jpg';
// import imgB from '../../../assets/images/backimg2.jpg';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
// import { faComment } from '@fortawesome/free-solid-svg-icons';
// import { ReactComponent as Star } from '../../../assets/images/star.svg';
// import { ReactComponent as StarOn } from '../../../assets/images/starbrown.svg';

class Body extends React.Component {
  render() {
    return (
      <div className="body-container">
        <div className="media-query">
          <div className="body-container">
            <div className="main-info">
              <Info />
              <Menu />
              <Graph />
              <Comment />
              <Recommend />
            </div>
            <SideInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
