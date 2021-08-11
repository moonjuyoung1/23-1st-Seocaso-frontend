import React from 'react';

import './Graph.scss';

class Graph extends React.Component {
  constructor() {
    super();
    this.state = {
      info: {},
    };
  }

  componentDidMount() {
    fetch('./data/Mockdata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          info: data.informations[0],
        });
      });
  }

  /* 그래프 기능구현
    방법 1 
    ㄴ 맵함수를 통해 객체의 값에 85px를 곱해서 height를 주고 children을 통해서 스팬을 넣는다
    방법 2
    ㄴ 각 파일들이 있는 상태에서 객체의 키값이 맞는 클래스네임을 지정해서 들어오는 값이 변경될 때 마다 변경한다.
    ㄴ switch를 통해 일일이 지정한다. 
    조건 1 : 데이터를 85px : 100% 기준으로 곱해서 height를 변경시킨다.
    - 데이터 : data.evaluation_graphs[0] 객체에 0.5 ~ 5까지 들어있음
    - 
  */

  graphList = () => {
    let valueArry = Object.values(this.state.info.evaluation_graphs);
    let max = valueArry.reduce((prev, cur) => {
      return prev > cur ? prev : cur;
    });
    let current = valueArry.map(i => {
      return (i / max) * 88;
    });
    return current;
  };

  changeColor = height => {
    if (height === 88) {
      return '#996633';
    }
  };

  render() {
    const { info } = this.state;

    let max =
      info.id &&
      info.evaluation_graphs.reduce((prev, cur) => {
        return prev > cur ? prev : cur;
      });

    let percent =
      info.id &&
      info.evaluation_graphs.map(i => {
        return (i / max) * 88;
      });

    return (
      <section className="main-bot">
        <div className="bot-container">
          <div className="header-container">
            <h2 className="span-info2">별점 그래프</h2>
            <div className="header-right">
              <div className="average-rate">
                평균 ★{info.star_rating_ranking}
              </div>
              <div className="average-people">(130명)</div>
            </div>
          </div>
          <div className="graph-container">
            <div className="graph-float">
              <div className="graphs">
                <div
                  className="graph-1 graph"
                  style={{
                    height: info.id && percent[0],
                    backgroundColor: info.id && this.changeColor(percent[0]),
                  }}
                ></div>
                <div
                  className="graph-2 graph"
                  style={{
                    height: info.id && percent[1],
                    backgroundColor: info.id && this.changeColor(percent[1]),
                  }}
                >
                  <span className="numbering">1</span>
                </div>
                <div
                  className="graph-3 graph"
                  style={{
                    height: info.id && percent[2],
                    backgroundColor: info.id && this.changeColor(percent[2]),
                  }}
                ></div>
                <div
                  className="graph-4 graph"
                  style={{
                    height: info.id && percent[3],
                    backgroundColor: info.id && this.changeColor(percent[3]),
                  }}
                >
                  <span className="numbering">2</span>
                </div>
                <div
                  className="graph-5 graph"
                  style={{
                    height: info.id && percent[4],
                    backgroundColor: info.id && this.changeColor(percent[4]),
                  }}
                ></div>
                <div
                  className="graph-6 graph"
                  style={{
                    height: info.id && percent[5],
                    backgroundColor: info.id && this.changeColor(percent[5]),
                  }}
                >
                  <span className="numbering">3</span>
                </div>
                <div
                  className="graph-7 graph"
                  style={{
                    height: info.id && percent[6],
                    backgroundColor: info.id && this.changeColor(percent[6]),
                  }}
                ></div>
                <div
                  className="graph-8 graph"
                  style={{
                    height: info.id && percent[7],
                    backgroundColor: info.id && this.changeColor(percent[7]),
                  }}
                >
                  <span className="numbering">4</span>
                </div>
                <div
                  className="graph-9 graph"
                  style={{
                    height: info.id && percent[8],
                    backgroundColor: info.id && this.changeColor(percent[8]),
                  }}
                ></div>
                <div
                  className="graph-10 graph"
                  style={{
                    height: info.id && percent[9],
                    backgroundColor: info.id && this.changeColor(percent[9]),
                  }}
                >
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
