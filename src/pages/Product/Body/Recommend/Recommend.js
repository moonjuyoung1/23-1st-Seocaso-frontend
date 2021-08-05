import React from 'react';
// import './Body.scss';
import imgA from '../../../../assets/images/backimg1.jpg';
import imgB from '../../../../assets/images/backimg2.jpg';
import imgC from '../../../../assets/images/backimg3.jpg';
import imgD from '../../../../assets/images/backimg4.jpg';
// import imgE from '../../../../assets/images/backimg5.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
// import { faComment } from '@fortawesome/free-solid-svg-icons';
// import { ReactComponent as Star } from '../../../assets/images/star.svg';
// import { ReactComponent as StarOn } from '../../../assets/images/starbrown.svg';

class Recommend extends React.Component {
  constructor() {
    super();
    this.state = {
      collectionList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/Mockdata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          menuList: data,
        });
      });
  }

  render() {
    return (
      <section className="recommend-section">
        <div className="mid-container">
          <h2 className="gallery-head">추천</h2>
          <div className="gallery">
            <div className="gallery-container">
              <img alt="gallery" className="gallery-image" src={imgA} />
              <img alt="gallery" className="gallery-image" src={imgB} />
              <img alt="gallery" className="gallery-image" src={imgC} />
              <img alt="gallery" className="gallery-image" src={imgD} />
              <div className="black-wrap"></div>
              <div className="coffee-info">
                <p className="coffee-name">자연과 함께하는 카페</p>
              </div>
            </div>
            <div className="gallery-container">
              <img alt="gallery" className="gallery-image" src={imgA} />
              <img alt="gallery" className="gallery-image" src={imgB} />
              <img alt="gallery" className="gallery-image" src={imgC} />
              <img alt="gallery" className="gallery-image" src={imgD} />
              <div className="black-wrap"></div>
              <div className="coffee-info">
                <p className="coffee-name">분위기 좋은 카페</p>
              </div>
            </div>
            <div className="gallery-container">
              <img alt="gallery" className="gallery-image" src={imgA} />
              <img alt="gallery" className="gallery-image" src={imgB} />
              <img alt="gallery" className="gallery-image" src={imgC} />
              <img alt="gallery" className="gallery-image" src={imgD} />
              <div className="black-wrap"></div>
              <div className="coffee-info">
                <p className="coffee-name">음악이 힙한 카페</p>
              </div>
            </div>
            <div className="gallery-container">
              <img alt="gallery" className="gallery-image" src={imgA} />
              <img alt="gallery" className="gallery-image" src={imgB} />
              <img alt="gallery" className="gallery-image" src={imgC} />
              <img alt="gallery" className="gallery-image" src={imgD} />
              <div className="black-wrap"></div>
              <div className="coffee-info">
                <p className="coffee-name">공간이 넓은 카페</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Recommend;
