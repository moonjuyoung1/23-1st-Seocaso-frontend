import React from 'react';

import LikeBtn from './LikeBtn';
import Stars from './Stars';

import './Top.scss';

/* 평가하기(stars) 기능 로직 정리되면 컴포넌트화 하기 */

class Top extends React.Component {
  constructor() {
    super();
    this.state = {
      infoList: [],
    };
  }

  componentDidMount() {
    fetch('./data/Mockdata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          infoList: data.informations[0],
        });
      });
  }

  render() {
    const { infoList } = this.state;
    console.log(infoList.cafe_image_url);
    return (
      <>
        <section className="top-top">
          <div className="top-backimg">
            <div className="backimg-container">
              <div className="backimg-left"></div>
              <div
                className="backimg"
                style={{
                  background: `no-repeat center/100% url(${infoList.cafe_image})`,
                }}
              >
                <div className="backimg-shadow-left"></div>
                <div className="backimg-shadow-right"></div>
                <div className="backimg-wrap"></div>
              </div>
              <div className="backimg-right"></div>
            </div>
            <div className="backinfo-container">
              <div className="poster-info-container">
                <div className="poster-container">
                  <img
                    alt="poster"
                    className="poster"
                    src={infoList.cafe_image}
                  />
                </div>
                <ul className="limit-info">
                  <li className="limit-info-list">
                    카페 순위•<em>{infoList.review_ranking}</em>
                  </li>
                  <li className="limit-info-list">
                    평점 순위•<em>{infoList.review_ranking}</em>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="top-info-container">
            <div className="top-info">
              <h1 className="cafe-name">{infoList.name}</h1>
              <div className="cafe-category">{infoList.business_hour}</div>
              <div className="cafe-rate">
                평균 ★ {infoList.rate} ({infoList.likes})
              </div>
              <div className="shop-btn-container">
                <LikeBtn />
                <Stars score={0} />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Top;
