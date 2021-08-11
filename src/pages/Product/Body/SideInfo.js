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
    fetch('./data/Mockdata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          info: data.informations[0].gallery_image,
        });
      });
  }

  render() {
    let { info } = this.state;
    return (
      <div className="main-side">
        <h2 className="side-top">인테리어</h2>
        <div className="side-mid">
          {info.map(url => (
            <img
              className="interior"
              alt="interior"
              src={url.img}
              key={url.index}
            />
          ))}
          <div className="dark-wrap">
            <span className="plus">click for more</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SideInfo;
