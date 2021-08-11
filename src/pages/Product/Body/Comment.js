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
      count: 0,
    };
  }

  componentDidMount() {
    fetch('./data/Mockdata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data.reviews,
        });
      });
  }

  ClickRight = () => {
    this.setState(zero => ({ count: zero.count + 1 }));
  };

  ClickLeft = () => {
    this.setState(zero => ({ count: zero.count - 1 }));
  };

  render() {
    console.log(this.state.commentList);
    const { commentList, count } = this.state;
    let marginLeft = count * -300;
    let marginRight = count * -300;
    let rightEnd = commentList.length * -300 + 900;
    return (
      <section className="comment-section">
        <div className="comment-container">
          <header className="comment-header">
            <div className="comment-left">
              <h2 className="comment-name">리뷰</h2>
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
            <ul
              className="card-lists"
              style={{
                marginLeft: `${marginLeft}px`,
                marginRight: `${marginRight}px`,
              }}
            >
              <FontAwesomeIcon
                className="go-css go-left"
                onClick={this.ClickLeft}
                icon={faChevronCircleLeft}
                style={{
                  color: '#fafafa',
                  display: marginLeft === 0 ? 'none' : 'block',
                }}
              />
              <FontAwesomeIcon
                className="go-css go-right"
                onClick={this.ClickRight}
                icon={faChevronCircleRight}
                style={{
                  color: '#fafafa',
                  display: marginRight < rightEnd ? 'none' : 'block',
                }}
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
