import React from 'react';

import './Info.scss';

class Info extends React.Component {
  constructor() {
    super();
    this.state = {
      infoList: [],
    };
  }

  componentDidMount() {
    fetch('./data/Mockdata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          infoList: data.informations[0],
        });
      });
  }

  render() {
    const { infoList } = this.state;
    console.log(infoList);
    return (
      <section className="main-top">
        <header className="about-cafe">
          <h2 className="cafe-jungbo">카페 정보</h2>
          <div className="more-container">
            <div className="more">
              더보기
              {/* <a alt="more" href={'#'}></a> */}
            </div>
          </div>
        </header>
        <div className="cafe-location">
          <span className="span-info">
            <strong>{infoList.name}</strong>
          </span>
          <span className="span-info">{infoList.business_hour}</span>
          <span className="span-info">{infoList.address}</span>
        </div>
      </section>
    );
  }
}

export default Info;
