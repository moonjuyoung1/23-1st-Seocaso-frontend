//StarRating.js
import React, { Component } from 'react';
import SingleStar from './SingleStar';
import './StarRating.scss';

export default class StarRating extends Component {
  constructor(props) {
    super(props);
    // 해당 유저가 별점을 평가한 이력이 있다면 값을 가져와야 함으로 스테이트를 아래처럼 설정
    this.state = { rating: props.starRatingForDetail || 0 };
  }

  // 호버스타 함수
  // 빈별에 마우스가 올라 갔을 때 일어나는 함수
  // 이벤트 핸들러는 모든 브라우저에서 이벤트를 동일하게 처리하기 위한 이벤트 래퍼 '합성 이벤트'객체를 전달 받는다.

  hoverStar = e => {
  // starX = 이벤트가 진행중인 노드의 가로 넓이
  // nativeEvent = 브라우저의 고유 이벤트가 필요할 때 사용하는 속성
    // ex) onMouseLeave = event.nativeEvent.mouseout
    // DOM Event 일때 nativeEvent 속성을 사용
    // offsetX = 이벤트와 타겟노드의 패딩 끝 사이의 X좌표 값을 제공
    const starX = e.nativeEvent.offsetX;
  // starWidth = 별의 가로 크기 
    // e.currentTarget.offsetWidth = 현재타겟의 가로 값을 가져온다
    const starWidth = e.currentTarget.offsetWidth;
  // nthstar('nthstar'값을 가지고 있는 문자열) = 이벤트가 발생하는 현재 타겟의 'nthstar'의 지정된 값을 반환 (별의 인덱스)
  // 이 말인 즉슨 nthstar가 가지고 있는 특정 속성 값을 변수nthstar에 저장하는 것이다 (index)
    let nthstar = e.currentTarget.getAttribute('nthstar');
  // starRatingForPost = 이는 setState, fetch Post, fet GET 비동기 함수로 인해서 포스트시 동기화 되지못해서 따로 변수를 선언하여 스타레이팅 값을 POST한다 (포스트 별점 값)
    let starRatingForPost;

    // 이벤트가 발생할 시
      // 만약 반으로 나눈 별의 가로 길이 값이 이벤트가 발생한 (시작 - 마우스 좌표) 값보다 작으면 
      // 포스트 별점값에 이벤트가 일어나는 별의 인덱스 값을 준다
    // 그리고 별점 스테이트에 이벤트가 일어나는 별의 인덱스를 지정한다.
    if (starWidth * 0.5 < starX) {
      starRatingForPost = parseInt(nthstar);
      this.setState({
        rating: parseInt(nthstar),
      });
    }

    // 만약 별의 가로 길이가 이벤트가 발생한 (시작 - 마우스 좌표)를 반으로 나눈 값보다 작으면 
      // 포스트 별점값에 이벤트가 일어나는 별의 인덱스 값에 -.5를 한 값을 할당한다
      // 그리고 별점 스테이트에 이벤트가 일어나는 별의 인덱스 값에 -.5를 한 값을 할당한다.
    if (starX < starWidth * 0.5) {
      starRatingForPost = parseInt(nthstar) - 0.5;
      this.setState({
        rating: nthstar - 0.5,
      });
    }

    // 그리고 값으로 포스트 별점 값을 반환한다. 
    // hoverStar 이벤트 (별에 마우스가 올라가면) 발생하면 해당 별점을 반환한다.
    return starRatingForPost;
  };

  // 클릭 이벤트가 발생하면
  // starRatingForPost에 hoverStar 함수의 이벤트 값을 전달한다.
  // this.props.postStar = 매개변수로 들어오는 값을 rating에 넣어서 보낸다.
  clickStar = e => {
    let starRatingForPost = this.hoverStar(e);
    this.props.postStar(starRatingForPost);
  };

  // STAR = [1,2,3,4,5] 
  // nth = key값 즉 인덱스 값을 준다. 
    // 이게 위의 nthstar에게 전달된다
    
  render() {
    return (
      <div className="starContainer">
        {STAR.map(nth => (
          <SingleStar
            key={nth}
            nthstar={nth}
            clickStar={this.clickStar}
            rating={this.state.rating}
            hoverStar={this.hoverStar}
          />
        ))}
      </div>
    );
  }
}

const STAR = [1, 2, 3, 4, 5];

//SingleStar.js
import React, { Component } from 'react';
import './SingleStar.scss';

export default class SingleStar extends Component {
  render() {
    const { nthstar, rating, clickStar, hoverStar } = this.props;
    // nthstar = 인덱스
    // (마우스가 움직일때) hoverStar = 마우스 위치에 맞춰서 값을 전달한다
    // (클릭할 때) 호버스타의 값을 포스트한다.
    
  // rating = state값으로 사용자가 이미 지정했던 값을 불러온 값 || 0
    // 별의 값(1,2,3,4,5)에서 클릭하여 전달한 별의 값을 뺐을때 0.5와 같다면 반별을 보여준다
      // 해당 nthstar는 마우스가 올라간 nthstar로 지정된다.
      // hlafStar는 clip css를 사용하여 별의 반만 보여준다
    // 해당 nthstar 별의 값이 클릭한 값과 같거나 작다면 fullstar를 준다.
    return (
      <div
        className="blankStar"
        nthstar={nthstar}
        onMouseMove={hoverStar}
        onClick={clickStar}
      >
        {nthstar - rating === 0.5 && (
          <span className="halfStar" nthstar={nthstar} />
        )}
        {nthstar <= rating && <span className="fullStar" nthstar={nthstar} />}
      </div>
    );
  }
}