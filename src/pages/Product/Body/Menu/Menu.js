import React from 'react';
// import './Body.scss';
import imgA from '../../../../assets/images/backimg1.jpg';
// import imgB from '../../../assets/images/backimg2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
// import { faComment } from '@fortawesome/free-solid-svg-icons';
// import { ReactComponent as Star } from '../../../assets/images/star.svg';
// import { ReactComponent as StarOn } from '../../../assets/images/starbrown.svg';

class Menu extends React.Component {
  render() {
    return (
      <section className="main-mid">
        <div className="mid-container">
          <h2 className="gallery-head">메뉴</h2>
          <div className="gallery">
            <FontAwesomeIcon
              className="go-left"
              onClick=""
              icon={faChevronCircleLeft}
              style={{ color: '#fafafa' }}
            />
            <FontAwesomeIcon
              className="go-right"
              onClick=""
              icon={faChevronCircleRight}
              style={{ color: '#fafafa' }}
            />
            <div className="gallery-container">
              <img alt="gallery" className="gallery-image" src={imgA} />
              <div className="black-wrap"></div>
              <div className="coffee-info">
                <p className="coffee-name">아메리카노</p>
                <p className="coffee-name">6,000원</p>
              </div>
            </div>
            <div className="gallery-container">
              <img alt="gallery" className="gallery-image" src={imgA} />
              <div className="black-wrap"></div>
              <div className="coffee-info">
                <p className="coffee-name">아메리카노</p>
                <p className="coffee-name">6,000원</p>
              </div>
            </div>
            <div className="gallery-container">
              <img alt="gallery" className="gallery-image" src={imgA} />
              <div className="black-wrap"></div>
              <div className="coffee-info">
                <p className="coffee-name">아메리카노</p>
                <p className="coffee-name">6,000원</p>
              </div>
            </div>
            <div className="gallery-container">
              <img alt="gallery" className="gallery-image" src={imgA} />
              <div className="black-wrap"></div>
              <div className="coffee-info">
                <p className="coffee-name">아메리카노</p>
                <p className="coffee-name">6,000원</p>
              </div>
            </div>
            <div className="gallery-container">
              <img alt="gallery" className="gallery-image" src={imgA} />
              <div className="black-wrap"></div>
              <div className="coffee-info">
                <p className="coffee-name">아메리카노</p>
                <p className="coffee-name">6,000원</p>
              </div>
            </div>
            <div className="gallery-container">
              <img alt="gallery" className="gallery-image" src={imgA} />
              <div className="black-wrap"></div>
              <div className="coffee-info">
                <p className="coffee-name">아메리카노</p>
                <p className="coffee-name">6,000원</p>
              </div>
            </div>
            <div className="gallery-container">
              <img alt="gallery" className="gallery-image" src={imgA} />
              <div className="black-wrap"></div>
              <div className="coffee-info">
                <p className="coffee-name">아메리카노</p>
                <p className="coffee-name">6,000원</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Menu;
