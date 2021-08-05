import React from 'react';
import CommentCard from './CommentCard/CommentCard';
// import './Body.scss';
// import imgA from '../../../assets/images/backimg1.jpg';
// import imgB from '../../../../assets/images/backimg2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
// import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

// import { ReactComponent as Star } from '../../../assets/images/star.svg';
// import { ReactComponent as StarOn } from '../../../assets/images/starbrown.svg';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/Mockdata.json')
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
                className="go-left"
                onClick=""
                icon={faChevronCircleLeft}
                style={{ color: '#fafafa' }}
              />
              <FontAwesomeIcon
                className="go-right"
                onClick=""
                icon={faChevronCircleRight}
                style={{ color: '#fafafa' }}
              />
              {commentList.map(commentList => (
                <CommentCard
                  url={commentList.url}
                  id={commentList.id}
                  stars={commentList.stars}
                  comment={commentList.comment}
                  thumb={commentList.thumb}
                  talk={commentList.talk}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Comment;
