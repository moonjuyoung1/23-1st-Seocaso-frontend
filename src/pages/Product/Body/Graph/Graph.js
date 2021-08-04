import React from 'react';
// import './Body.scss';
// import imgA from '../../../assets/images/backimg1.jpg';
// import imgB from '../../../assets/images/backimg2.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
// import { faComment } from '@fortawesome/free-solid-svg-icons';
// import { ReactComponent as Star } from '../../../assets/images/star.svg';
// import { ReactComponent as StarOn } from '../../../assets/images/starbrown.svg';

class Graph extends React.Component {
  render() {
    return (
      <section className="main-bot">
        <div className="bot-container">
          <div className="header-container">
            <h2 className="span-info2">별점 그래프</h2>
            <div className="header-right">
              <div className="average-rate">평균 ★4.2</div>
              <div className="average-people">(130명)</div>
            </div>
          </div>
          <div className="graph-container">
            <div className="graph-float">
              <div className="graphs">
                <div className="graph-0 graph">
                  <span className="numbering">0</span>
                </div>
                <div className="graph-1 graph"></div>
                <div className="graph-2 graph">
                  <span className="numbering">1</span>
                </div>
                <div className="graph-3 graph"></div>
                <div className="graph-4 graph">
                  <span className="numbering">2</span>
                </div>
                <div className="graph-5 graph"></div>
                <div className="graph-6 graph">
                  <span className="numbering">3</span>
                </div>
                <div className="graph-7 graph"></div>
                <div className="graph-8 graph">
                  <span className="numbering">4</span>
                </div>
                <div className="graph-9 graph"></div>
                <div className="graph-10 graph">
                  <span className="numbering">5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Graph;
