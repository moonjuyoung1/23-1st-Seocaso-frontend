import React from 'react';
import ImageModal from './ImageModal';

class Image extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: false,
    };
  }

  handleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleModal}>이미지</button>
        {this.state.modal && <ImageModal modal={this.handleModal} />}
      </div>
    );
  }
}

export default Image;
