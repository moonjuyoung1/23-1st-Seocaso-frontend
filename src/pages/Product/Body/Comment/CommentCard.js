import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons';

class CommentCard extends React.Component {
  render() {
    const { url, id, stars, comment, thumb, talk } = this.props.commentList;
    return (
      <li className="comment-card">
        <div className="card-top">
          <div className="top-face">
            <div className="img-container">
              <img alt="profile" src={url} className="top-face-img" />
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
