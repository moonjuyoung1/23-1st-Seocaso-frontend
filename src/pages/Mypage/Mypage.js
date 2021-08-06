import React from 'react';
import './Mypage.scss';
class Mypage extends React.Component {
  render() {
    return (
      <>
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
        </div>
        <div className="profile">
          <div className="profile-image">
            <img src="/images/backimg2.jpg" className="profileImage" />
            <div className="profile-content">
              <div>
                <span>moon ju young</span>
              </div>
              <div>
                <span>
                  안녕하세요 저는 강남구에 거주하고 있는 문주영입니다.
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Mypage;
