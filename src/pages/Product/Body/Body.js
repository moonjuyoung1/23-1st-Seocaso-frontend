import React from 'react';
import './Body.scss';
import imgA from '../../../assets/images/backimg1.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import { ReactComponent as Star } from '../../../assets/images/star.svg';
// import { ReactComponent as StarOn } from '../../../assets/images/starbrown.svg';

class Body extends React.Component {
  render() {
    return (
      <div className="body-container">
        <div className="media-query">
          <div className="body-container">
            <div className="main-info">
              <section className="main-top">
                <header className="about-cafe">
                  <h2 className="cafe-jungbo">카페 정보</h2>
                  <div className="more-container">
                    <div className="more">
                      더보기
                      {/* <a alt="more" href={'#'}></a> */}
                    </div>
                  </div>
                </header>
                <div className="cafe-location">
                  <span className="span-info">
                    <strong>모리츠 플라츠</strong>
                  </span>
                  <span className="span-info">점심 12시부터 저녁 10시까지</span>
                  <span className="span-info">
                    서울특별시 마포구 서교동 와우산로 174
                  </span>
                </div>
              </section>
              <section className="main-mid">
                <div className="mid-container">
                  <h2 className="gallery-head">갤러리</h2>
                  <div className="gallery">
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
                    </div>
                    <div className="gallery-container">
                      <img alt="gallery" className="gallery-image" src={imgA} />
                    </div>
                    <div className="gallery-container">
                      <img alt="gallery" className="gallery-image" src={imgA} />
                    </div>
                  </div>
                </div>
              </section>
              <section className="main-bot"></section>
            </div>
            <div className="main-side">
              <article className="main-top"></article>
              <article className="main-mid"></article>
              <article className="main-bot"></article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
