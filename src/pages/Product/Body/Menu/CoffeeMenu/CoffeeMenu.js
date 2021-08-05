import React from 'react';
// import './Body.scss';
// import imgA from '../../../../assets/images/backimg1.jpg';
// import imgB from '../../../../assets/images/backimg2.jpg';
// import imgC from '../../../../assets/images/backimg3.jpg';
// import imgD from '../../../../assets/images/backimg4.jpg';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
// import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
// import { faComment } from '@fortawesome/free-solid-svg-icons';
// import { ReactComponent as Star } from '../../../assets/images/star.svg';
// import { ReactComponent as StarOn } from '../../../assets/images/starbrown.svg';

class CoffeeMenu extends React.Component {
  render() {
    const { url, name, price } = this.props;
    return (
      <div className="gallery-container">
        <img alt="gallery" className="gallery-image" src={url} />
        <div className="black-wrap"></div>
        <div className="coffee-info">
          <p className="coffee-name">{name}</p>
          <p className="coffee-name">{price}</p>
        </div>
      </div>
    );
  }
}

export default CoffeeMenu;
