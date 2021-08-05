import React from 'react';
// import './Body.scss';
// import imgA from '../../../assets/images/backimg1.jpg';
// import imgB from '../../../../assets/images/backimg2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
// import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
// import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

// import { ReactComponent as Star } from '../../../assets/images/star.svg';
// import { ReactComponent as StarOn } from '../../../assets/images/starbrown.svg';

class CommentCard extends React.Component {
  render() {
    const { url, id, stars, comment, thumb, talk } = this.props;
    return (
      <li className="comment-card">
        <div className="card-top">
          <div className="top-face">
            <div className="img-container">
              <img alt="profile" src={url} className="top-face-img"></img>
            </div>
            <div className="top-name">{id}</div>
          </div>
          <div className="top-rating">{stars}</div>
        </div>
        <div className="card-mid">
          <p className="mid-words">{comment}</p>
        </div>
        <div className="card-bot">
          <FontAwesomeIcon icon={faThumbsUp} style={{ color: 'grey' }} />
          <span className="bot-em">{thumb}</span>
          <FontAwesomeIcon icon={faComment} style={{ color: 'grey' }} />
          <span className="bot-em">{talk}</span>
        </div>
        <div className="card-likes">
          <button className="likes">좋아요</button>
        </div>
      </li>
    );
  }
}

export default CommentCard;
