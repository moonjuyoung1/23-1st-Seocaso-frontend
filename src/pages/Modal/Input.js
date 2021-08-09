import React from 'react';

class Input extends React.Component {
  render() {
    const { key, type, text } = this.props;
    return (
      <input
        type={type}
        className="input-email"
        placeholder={text}
        onChange={this.handleInput}
        name={type}
      />
    );
  }
}

export default Input;
