import React from 'react';

import './SideInfo.scss';

class SideInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      info: [],
    };
  }

  componentDidMount() {
    fetch('/data/Mockdata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          info: data.menu[0].url,
        });
      });
  }

  render() {
    let { info } = this.state;
    return (
      <div className="main-side">
        <h2 className="side-top">인테리어</h2>
        <div className="side-mid">
          <img className="interior" alt="interior" src={info} />
          <img className="interior" alt="interior" src={info} />
          <img className="interior" alt="interior" src={info} />
          <img className="interior" alt="interior" src={info} />
          <img className="interior" alt="interior" src={info} />
          <img className="interior" alt="interior" src={info} />
          <div className="dark-wrap"></div>
        </div>
      </div>
    );
  }
}

export default SideInfo;
