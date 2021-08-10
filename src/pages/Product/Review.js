import React from 'react';
import { withRouter } from 'react-router-dom';
import ReviewModal from './ReviewModal';
import './Review.scss';

class Review extends React.Component {
  constructor() {
    super();
    this.state = {
      isModal: false,
      content: '',
      writeContent: '',
    };
  }

  handleModal = () => {
    this.setState({
      isModal: !this.state.isModal,
    });
  };

  saveValue = e => {
    this.setState({
      content: e.target.value,
    });
  };

  clickInsertValue = () => {
    this.setState({
      writeContent: this.state.content,
    });
    this.handleModal();
  };

  render() {
    const { writeContent, isModal } = this.state;
    return (
      <>
        {!writeContent ? (
          <div className="review-box">
            <p>좋은 평가네요. 다슬님의 생각을 글로 남겨보세요.</p>
            <div className="review-box-btn" onClick={this.handleModal}>
              코멘트 남기기
            </div>

            {isModal && (
              <ReviewModal
                handleModal={this.handleModal}
                clickInsertValue={this.clickInsertValue}
                saveValue={this.saveValue}
              />
            )}
          </div>
        ) : (
          <div className="review-content">{writeContent}</div>
        )}
      </>
    );
  }
}

export default withRouter(Review);
