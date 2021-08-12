import React from 'react';
import { withRouter } from 'react-router-dom';
import './ReviewModal.scss';

class ReviewModal extends React.Component {
  render() {
    const { handleModal, clickInsertValue, saveValue } = this.props;
    return (
      <div className="review-modal-bg" onClick={handleModal}>
        <div className="review-modal" onClick={e => e.stopPropagation()}>
          <div className="review-btns">
            <div onClick={handleModal}>X</div>
            <div onClick={clickInsertValue}>코멘트 작성</div>
          </div>
          <div className="content-write">
            <textarea
              onChange={saveValue}
              placeholder="이 카페에 대한 생각을 자유롭게 표현해주세요."
            ></textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ReviewModal);
