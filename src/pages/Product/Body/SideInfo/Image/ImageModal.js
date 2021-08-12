import React from 'react';
import './ImageModal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';

class ImageModal extends React.Component {
  constructor() {
    super();

    this.state = {
      pageNum: 0,
    };
  }
  nextBtn = () => {
    const { pageNum } = this.state;
    let index = pageNum;
    if (index === 3) {
      index = -1;
    }
    index = index + 1;
    this.setState({
      pageNum: index,
    });
  };

  prvBtn = () => {
    const { pageNum } = this.state;
    let index = pageNum;
    if (index === 0) {
      index = 3 + 1;
    }
    index = index - 1;
    this.setState({
      pageNum: index,
    });
  };

  render() {
    const { pageNum } = this.state;
    const { prvBtn, nextBtn } = this;
    // let transNum = 400 * ((4 - 1) / 2);

    // if (pageNum > 1) {
    //   transNum = 400 * ((4 - 1) / 2) - 400 * (pageNum - 1);
    // }
    return (
      <div className="modal-image">
        <FontAwesomeIcon
          icon={faChevronCircleLeft}
          className="left"
          onClick={prvBtn}
        />
        <div className="carousel-wrapper">
          <div
            className="image-container"
            style={{ transform: `translateX(-${pageNum * 100}%)` }}
          >
            <img src="/images/cafe1.jpg" alt="슬라이드이미지" />
            <img src="/images/cafe2.jpg" alt="슬라이드이미지" />
            <img src="/images/cafe3.jpg" alt="슬라이드이미지" />
            <img src="/images/cafe4.jpg" alt="슬라이드이미지" />
          </div>
        </div>
        <FontAwesomeIcon
          icon={faChevronCircleRight}
          className="right"
          onClick={nextBtn}
        />
        <FontAwesomeIcon
          icon={faTimes}
          onClick={this.props.modal}
          className="mark"
        />
      </div>
    );
  }
}

export default ImageModal;
