import React from 'react';

class Modal extends React.Component {
  render() {
    return <div className="modal-login" onClick={this.props.checkLogin}></div>;
  }
}

export default Modal;
