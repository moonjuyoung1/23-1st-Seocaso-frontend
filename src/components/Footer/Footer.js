import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  constructor(){
    super();
    this.state = {
      count : ''
    }
  }

  componentDidMount(){
    fetch('http://10.58.2.113:8000/cafes/rating-count')
    .then(response => response.json())
    .then(data => {
      this.setState({
        count : data
      })
    })
  }
  
  render() {
    return (
      <footer>
        <div className="footer-count">
          지금까지 <span>★ {this.state.count.RATINGS_COUNT} 개의 평가가</span> 쌓였어요.
        </div>
        <div className="footer-wrap">
          <ul>
            <li>서비스 이용약관</li>
            <li>개인정보 처리방침</li>
            <li>회사 안내</li>
          </ul>
          <dl>
            <dt>고객센터</dt>
            <dd>cocacollllla@gmail.com</dd>
          </dl>
          <dl>
            <dt>제휴 및 대외 협력</dt>
            <dd>http://localhost:3000/</dd>
          </dl>
          <ul>
            <li>서울의 카페를 소개합니다</li>
            <li>대표 김다슬</li>
            <li>서울특별시 강남구 테헤란로 427</li>
          </ul>
          <p>© 2021 by seocaso . All rights reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
