import React from 'react';

import './Graph.scss';

class Graph extends React.Component {
  constructor() {
    super();
    this.state = {
      info: '',
    };
  }

  componentDidMount() {
    fetch('/data/Mockdata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          info: data.info,
        });
      });
  }

  render() {
    const { info } = this.state;
    return (
      <section className="main-bot">
        <div className="bot-container">
          <div className="header-container">
            <h2 className="span-info2">별점 그래프</h2>
            <div className="header-right">
              <div className="average-rate">평균 ★{info.rate}</div>
              <div className="average-people">(130명)</div>
            </div>
          </div>
          <div className="graph-container">
            <div className="graph-float">
              <div className="graphs">
                <div className="graph-0 graph">
                  <span className="numbering">1</span>
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
