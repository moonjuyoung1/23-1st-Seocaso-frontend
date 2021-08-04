import React from 'react';
// import './Body.scss';
// import imgA from '../../../assets/images/backimg1.jpg';
import imgB from '../../../../assets/images/backimg2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
// import { ReactComponent as Star } from '../../../assets/images/star.svg';
// import { ReactComponent as StarOn } from '../../../assets/images/starbrown.svg';

class Comment extends React.Component {
  render() {
    return (
      <section className="comment-section">
        <div className="comment-container">
          <header className="comment-header">
            <div className="comment-left">
              <h2 className="comment-name">코멘트</h2>
              <div className="comment-number">1500+</div>
            </div>
            <div className="more-container">
              <div className="more">
                더보기
                {/* <a alt="more" href={'#'}></a> */}
              </div>
            </div>
          </header>
          <div className="card-container">
            <ul className="card-lists">
              <li className="comment-card">
                <div className="card-top">
                  <div className="top-face">
                    <div className="img-container">
                      <img
                        alt="profile"
                        src={imgB}
                        className="top-face-img"
                      ></img>
                    </div>
                    <div className="top-name">베를린우엉된장</div>
                  </div>
                  <div className="top-rating">보고싶어요</div>
                </div>
                <div className="card-mid">
                  <p className="mid-words">
                    구교환, 당신 때문에 기다리는거야....
                  </p>
                </div>
                <div className="card-bot">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    style={{ color: 'grey' }}
                  />
                  <span className="bot-em">299</span>
                  <FontAwesomeIcon icon={faComment} style={{ color: 'grey' }} />
                  <span className="bot-em">302</span>
                </div>
                <div className="card-likes">
                  <button className="likes">좋아요</button>
                </div>
              </li>
              <li className="comment-card">
                <div className="card-top">
                  <div className="top-face">
                    <div className="img-container">
                      <img
                        alt="profile"
                        src={imgB}
                        className="top-face-img"
                      ></img>
                    </div>
                    <div className="top-name">베를린우엉된장</div>
                  </div>
                  <div className="top-rating">보고싶어요</div>
                </div>
                <div className="card-mid">
                  <p className="mid-words">
                    구교환, 당신 때문에 기다리는거야....
                  </p>
                </div>
                <div className="card-bot">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    style={{ color: 'grey' }}
                  />
                  <span className="bot-em">299</span>
                  <FontAwesomeIcon icon={faComment} style={{ color: 'grey' }} />
                  <span className="bot-em">302</span>
                </div>
                <div className="card-likes">
                  <button className="likes">좋아요</button>
                </div>
              </li>
              <li className="comment-card">
                <div className="card-top">
                  <div className="top-face">
                    <div className="img-container">
                      <img
                        alt="profile"
                        src={imgB}
                        className="top-face-img"
                      ></img>
                    </div>
                    <div className="top-name">베를린우엉된장</div>
                  </div>
                  <div className="top-rating">보고싶어요</div>
                </div>
                <div className="card-mid">
                  <p className="mid-words">
                    구교환, 당신 때문에 기다리는거야....
                  </p>
                </div>
                <div className="card-bot">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    style={{ color: 'grey' }}
                  />
                  <span className="bot-em">299</span>
                  <FontAwesomeIcon icon={faComment} style={{ color: 'grey' }} />
                  <span className="bot-em">302</span>
                </div>
                <div className="card-likes">
                  <button className="likes">좋아요</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Comment;
