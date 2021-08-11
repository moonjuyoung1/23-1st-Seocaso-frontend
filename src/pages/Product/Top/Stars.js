import React from 'react';

import './Stars.scss';

import TheStar from './TheStar';

import './Top.scss';

/* 평가하기(stars) 기능 로직 정리되면 컴포넌트화 하기 
  빈별 - 찬별
    처음 화면이 로딩되면 찬별이 먼저 보인다 (opacity, z-index, overflow-hidden)
    커서가 찬별 컨테이너의 어느 지점에 도달하면 해당 시작부터 해당지점까지 width 값을 전달한다
    여기서 필요한 것
      ' 어느 지점에 호버할 때' 이벤트 : onMouseEnter 이벤트로 알 수 있을 듯
      0~200px 값을 10으로 나눠 거리를 지정
      마우스 커서가 각 범위위를 호버하면 width가 각 범위 만큼 커진다
      '어느 지점에 호버할 때' 위치 값(지정할 수 있음?)
      MouseEvent.clientX로 해당 좌표값을 찾을 수 있다.
*/

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.score || 0,
    };
  }

  hoverStar = e => {
    const starX = e.nativeEvent.offsetX;
    const starWidth = e.currentTarget.offsetWidth;
    let index = e.currentTarget.getAttribute('index');
    let score;

    if (starWidth * 0.5 < starX) {
      this.setState({
        rating: parseInt(index),
      });
      score = parseInt(index);
    }
    if (starX < starWidth * 0.5) {
      score = parseInt(index) - 0.5;
      this.setState({
        rating: index - 0.5,
      });
    }
    return score;
  };

  clickStar = e => {
    let score = this.hoverStar(e);
    this.props.postStar(score);
  };

  // outStar = e => {
  //   this.setState({
  //     rating: this.clickStar(e),
  //   });
  // };

  render() {
    const MAP = [1, 2, 3, 4, 5];
    return (
      <>
        <div className="rate-container">
          <div className="rate-words">평가하기</div>
          <div className="rate-stars">
            {MAP.map(index => (
              <TheStar
                key={index}
                index={index}
                clickStar={this.clickStar}
                rating={this.state.rating}
                hoverStar={this.hoverStar}
                outStar={this.outStar}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Stars;
