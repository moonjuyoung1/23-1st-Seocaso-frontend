import React from 'react';
// import './Body.scss';
import imgA from '../../../../assets/images/backimg1.jpg';
import imgB from '../../../../assets/images/backimg2.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
// import { faComment } from '@fortawesome/free-solid-svg-icons';
// import { ReactComponent as Star } from '../../../assets/images/star.svg';
// import { ReactComponent as StarOn } from '../../../assets/images/starbrown.svg';

class SideInfo extends React.Component {
  render() {
    return (
      <div className="main-side">
        <h2 className="side-top">인테리어</h2>
        <div className="side-mid">
          <img className="interior" alt="interior" src={imgB} />
          <img className="interior" alt="interior" src={imgA} />
          <img className="interior" alt="interior" src={imgA} />
          <img className="interior" alt="interior" src={imgA} />
          <img className="interior" alt="interior" src={imgA} />
          <img className="interior" alt="interior" src={imgA} />
          <div className="dark-wrap"></div>
        </div>
      </div>
    );
  }
}

export default SideInfo;
