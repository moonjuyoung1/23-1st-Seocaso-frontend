import React from 'react';

import './Stars.scss';

import TheStar from './TheStar';

import './Top.scss';

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
