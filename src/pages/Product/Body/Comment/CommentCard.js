import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons';

class CommentCard extends React.Component {
  render() {
    const {
      profile_image,
      nickname,
      star_rating,
      content,
      review_like,
      comment_on_review,
    } = this.props.commentList;
    return (
      <li className="comment-card">
        <div className="card-top">
          <div className="top-face">
            <div className="img-container">
              <img alt="profile" src={profile_image} className="top-face-img" />
            </div>
            <div className="top-name">{nickname}</div>
          </div>
          <div className="top-rating">{star_rating}</div>
        </div>
        <div className="card-mid">
          <p className="mid-words">{content}</p>
        </div>
        <div className="card-bot">
          <FontAwesomeIcon icon={faThumbsUp} style={{ color: 'grey' }} />
          <span className="bot-em">{review_like}</span>
          <FontAwesomeIcon icon={faComment} style={{ color: 'grey' }} />
          <span className="bot-em">{comment_on_review}</span>
        </div>
        <div className="card-likes">
          <button className="likes">좋아요</button>
        </div>
      </li>
    );
  }
}

export default CommentCard;
