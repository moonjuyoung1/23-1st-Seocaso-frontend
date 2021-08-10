import React from 'react';
import './Mypage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Evaluation from './Evaluation';
import Filter from './Filter';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faUserCircle,
  faChevronDown,
  faArrowLeft,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import Like from './Like';

class Mypage extends React.Component {
  goToMain = () => {
    this.props.history.push('/');
  };

  constructor() {
    super();
    this.state = {
      evaluation: [],
      modal: false,
      like: [],
      currentIndex: 0,
    };
  }

  hadleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/Likedata.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          evaluation: data,
        });
      });

    fetch('http://localhost:3000/data/Likedata.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          like: data,
        });
      });
  }

  handleButtonClick = () => {
    const { currentIndex } = this.state;
    this.setState({
      currentIndex: !currentIndex ? currentIndex - 50 : currentIndex + 50,
    });
  };

  render() {
    const { evaluation, like, currentIndex } = this.state;
    return (
      <>
        <div className="container">
          <section className="top-top">
            <div className="top-backimg">
              <div className="backimg-container">
                <div className="backimg-left"></div>
                <div className="backimg">
                  <div className="backimg-shadow-left"></div>
                  <div className="backimg-shadow-right"></div>
                  <div className="backimg-wrap"></div>
                </div>
                <div className="backimg-right"></div>
              </div>
              <div className="backinfo-container">
                <div className="poster-info-container">
                  <div className="poster-container">
                    <FontAwesomeIcon icon={faUserCircle} className="poster" />
                  </div>
                </div>
              </div>
            </div>
            <div className="top-info-container">
              <div className="top-info">
                <h1 className="cafe-name">
                  사용자 이름
                  <FontAwesomeIcon
                    icon={faCog}
                    className="cog"
                    onClick={this.hadleModal}
                  />
                  {this.state.modal && <Filter />}
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="arrow"
                    onClick={this.goToMain}
                  />
                </h1>

                <div className="cafe-rate">
                  아이템들의 사이와 양 끝에 균일한 간격을 만들어 줍니다. 주의!
                  IE와 엣지(Edge)에서는 지원되지 않습니다👎 이 웹사이트의 메뉴
                  부분은 브라우저 폭이 1024px 이상일 때 space-evenly가
                  적용되도록 했는데요, IE와 엣지에서만 space-around로 적용이
                  되도록 처리해 두었어요.
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="main-container">
          <div className="content-container">
            <section>
              <div className="like-container">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="chevron"
                  onClick={this.hadleModal}
                />
                {this.state.modal && <Filter modal={this.hadleModal} />}
                <h2 className="content">평가한 카페 📝</h2>
                <div className="image-content">
                  <ul style={{ transform: `translateX(${currentIndex}%)` }}>
                    {evaluation.map(el => {
                      return (
                        <Evaluation
                          key={el.id}
                          image={el.image}
                          cafename={el.cafeName}
                          evaluation={el.evaluation}
                        />
                      );
                    })}
                  </ul>
                  <FontAwesomeIcon
                    icon={faChevronCircleLeft}
                    className="circle-left"
                    onClick={this.handleButtonClick}
                  />
                  <FontAwesomeIcon
                    icon={faChevronCircleRight}
                    className="circle-right"
                    onClick={this.handleButtonClick}
                  />
                </div>
              </div>
              <div className="evaluation-container">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="chevron"
                  onClick={this.hadleModal}
                />
                {this.state.modal && <Filter modal={this.hadleModal} />}
                <h2 className="content">좋아요 한 카페 👍</h2>
                <div className="image-content">
                  <ul>
                    {like.map(el => {
                      return (
                        <Like
                          key={el.id}
                          image={el.image}
                          cafename={el.cafeName}
                          evaluation={el.evaluation}
                        />
                      );
                    })}
                  </ul>
                  <FontAwesomeIcon
                    icon={faChevronCircleLeft}
                    className="circle-left"
                  />
                  <FontAwesomeIcon
                    icon={faChevronCircleRight}
                    className="circle-right"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default Mypage;
