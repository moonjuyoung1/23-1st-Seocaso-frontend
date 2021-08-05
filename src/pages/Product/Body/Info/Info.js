import React from 'react';
// import './Body.scss';
// import imgA from '../../../assets/images/backimg1.jpg';
// import imgB from '../../../assets/images/backimg2.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
// import { faComment } from '@fortawesome/free-solid-svg-icons';
// import { ReactComponent as Star } from '../../../assets/images/star.svg';
// import { ReactComponent as StarOn } from '../../../assets/images/starbrown.svg';

class Info extends React.Component {
  constructor() {
    super();
    this.state = {
      infoList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/Mockdata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          infoList: data.info,
        });
      });
  }

  render() {
    const { infoList } = this.state;
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
          <span className="span-info">{infoList.hour}</span>
          <span className="span-info">{infoList.location}</span>
        </div>
      </section>
    );
  }
}

export default Info;
