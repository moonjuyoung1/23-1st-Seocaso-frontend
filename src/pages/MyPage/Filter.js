import React from 'react';
import './Filter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Filter extends React.Component {
  render() {
    return (
      <div className="modal">
        <div className="container">
          <FontAwesomeIcon
            icon={faTimes}
            onClick={this.props.modal}
            className="xmark"
          />
          <header>평가한 카페</header>

          <div>
            <ul>
              <li>담은 순</li>
              <li>담은 역순</li>
              <li>평균 별점순</li>
              <li>평균 별점 역순</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
