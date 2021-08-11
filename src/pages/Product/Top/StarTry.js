import React from 'react';

import './Stars.scss';

import './Top.scss';

/* 평가하기(stars) 기능 로직 정리되면 컴포넌트화 하기 */

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating || null,
      temp_rate: null,
    };
  }

  mouseOver = rating => {
    this.setState(param => ({
      rating,
      temp_rate: param.rate,
    }));
  };

  mouseOut = rating => {
    this.setState(param => ({
      rating: param.temp_rate,
    }));
  };

  rating = rating => {
    this.setState({
      rating,
      temp_rate: rating,
    });
  };

  render() {
    // const { rate } = this.state;
    let starArry = [];
    for (let i = 0; i < 10; i++) {
      let starSrc = '../../../assets/images/GreyStar.svg';
      if (this.state.rating >= i && this.state.rating !== null) {
        starSrc = '../../../assets/images/YellowStar.svg';
      }
      starArry.push(
        <image
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            width: '40px',
            height: '40px',
            direction: i % 2 === 0 ? 'ltr' : 'rtl',
          }}
          src={starSrc}
          onMouseOver={() => this.mouseOver(i)}
          onMouseOut={() => this.mouseOut(i)}
          onClick={() => this.rate(i)}
        />
      );
    }
    return (
      <>
        <div className="rate-container">
          <div className="rate-words">평가하기</div>
          <div className="rate-stars">{starArry}</div>
        </div>
      </>
    );
  }
}

export default Stars;
