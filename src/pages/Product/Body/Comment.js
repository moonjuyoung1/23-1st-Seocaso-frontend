import React from 'react';

import CommentCard from './Comment/CommentCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';

import './Comment.scss';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
    };
  }

  componentDidMount() {
    fetch('/data/Mockdata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data.comment,
        });
      });
  }

  render() {
    const { commentList } = this.state;
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
              <FontAwesomeIcon
                className="go-css go-left"
                onClick=""
                icon={faChevronCircleLeft}
                style={{ color: '#fafafa' }}
              />
              <FontAwesomeIcon
                className="go-css go-right"
                onClick=""
                icon={faChevronCircleRight}
                style={{ color: '#fafafa' }}
              />
              {commentList.map(commentList => (
                <CommentCard commentList={commentList} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Comment;
