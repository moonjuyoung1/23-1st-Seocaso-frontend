import React from 'react';
import './Mypage.scss';

class Evaluation extends React.Component {
  render() {
    const { image, cafename, evaluation } = this.props;
    return (
      <li>
        <div className="images-container" style={{ marginRight: '10px' }}>
          <img alt="#" src={image} style={{ borderRadius: '15px' }} />
        </div>
        <div className="cafe-name">{cafename}</div>
        <div className="cafe-star">{evaluation}</div>
      </li>
    );
  }
}

export default Evaluation;
