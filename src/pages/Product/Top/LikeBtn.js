import React from 'react';

import './LikeBtn.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCaretDown } from '@fortawesome/free-solid-svg-icons';

class LikeBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
    };
  }

  addLike = () => {
    let count = this.state.likes + 1;
    this.setState({
      likes: count,
    });
  };

  minusLike = () => {
    let count = this.state.likes - 1;
    this.setState({
      likes: count,
    });
  };
  // btnClrChange = () => {
  //   if (this.state.likes > 0) {
  //     return 'shop-bton-words-contianer-disabled';
  //   }
  // };

  // 좋아요 버튼 변경 애니메이션
  // 버튼을 누르면 like state가 변경된다
  // 변경된 스테이트를 조건으로 줘서
  // 컨테이너 + 버튼1 + 버튼2의 클래스를 변경하여 스타일을 변경한다

  render() {
    let { likes } = this.state;
    return (
      <div className="shop-btn-merge">
        <button
          className={likes > 0 ? 'shop-btn-disabled' : 'shop-btn'}
          onClick={likes > 0 ? this.minusLike : this.addLike}
        >
          <div className="shop-btn-words-container">
            <FontAwesomeIcon
              className={likes > 0 ? 'cross-disabled' : 'cross'}
              icon={faPlus}
              style={{ fontSize: 17 }}
            />
            <span className="see">보고싶어요</span>
            <div className="shop-btn-word"></div>
          </div>
        </button>
        <button className={likes > 0 ? 'shop-btn2-disabled' : 'shop-btn2'}>
          <FontAwesomeIcon
            className="triangle"
            icon={faCaretDown}
            style={{ fontSize: 17 }}
          />
        </button>
      </div>
    );
  }
}

export default LikeBtn;
