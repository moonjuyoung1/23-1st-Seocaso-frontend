import React from 'react';
// import './Body.scss';
// import imgA from '../../../assets/images/backimg1.jpg';
// import imgB from '../../../assets/images/backimg2.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
// import { faComment } from '@fortawesome/free-solid-svg-icons';
// import { ReactComponent as Star } from '../../../assets/images/star.svg';
// import { ReactComponent as StarOn } from '../../../assets/images/starbrown.svg';

class Info extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Info;
