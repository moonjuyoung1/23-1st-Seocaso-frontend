import React from 'react';
import './Top.scss';
import imgA from '../../../assets/images/backimg1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Star } from '../../../assets/images/star.svg';
import { ReactComponent as StarOn } from '../../../assets/images/starbrown.svg';

class Top extends React.Component {
  constructor() {
    super();
    this.state = {
      infoList: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/Mockdata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          infoList: data.info,
        });
      });
  }

  render() {
    const { infoList } = this.state;
    return (
      <div className="container">
        <section className="top-top">
          <div className="top-backimg">
            <div className="backimg-container">
              <div className="backimg-left"></div>
              <div className="backimg">
                <div className="backimg-shadow-left"></div>
                <div className="backimg-shadow-right"></div>
                <div className="backimg-wrap"></div>
              </div>
              <div className="backimg-right"></div>
            </div>
            <div className="backinfo-container">
              <div className="poster-info-container">
                <div className="poster-container">
                  <img alt="poster" className="poster" src={infoList.poster} />
                </div>
                <ul className="limit-info">
                  <li className="limit-info-list">
                    카페 순위•<em>{infoList.order}</em>
                  </li>
                  <li className="limit-info-list">
                    평점 순위•<em>{infoList.order}</em>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="top-info-container">
            <div className="top-info">
              <h1 className="cafe-name">{infoList.name}</h1>
              <div className="cafe-category">{infoList.location}</div>
              <div className="cafe-rate">
                평균 ★ {infoList.rate} ({infoList.likes})
              </div>
              <div className="shop-btn-container">
                <div className="shop-btn-merge">
                  <button className="shop-btn">
                    <div className="shop-btn-words-container">
                      <FontAwesomeIcon icon={faPlus} style={{ fontSize: 17 }} />
                      <span class="see">보고싶어요</span>
                      <div className="shop-btn-word"></div>
                    </div>
                  </button>
                  <button className="shop-btn2">
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      style={{ fontSize: 17 }}
                    />
                  </button>
                </div>
                <div className="rate-container">
                  <div className="rate-words">평가하기</div>
                  <div className="rate-stars">
                    <Star className="rate-star" />
                    <Star className="rate-star" />
                    <Star className="rate-star" />
                    <Star className="rate-star" />
                    <Star className="rate-star" />
                    <div className="rate-stars-after">
                      <StarOn className="rate-star" width={'200px'} />
                      <StarOn className="rate-star" width={'200px'} />
                      <StarOn className="rate-star" width={'200px'} />
                      <StarOn className="rate-star" width={'200px'} />
                      <StarOn className="rate-star" width={'200px'} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Top;
