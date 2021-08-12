import React from 'react';

class Input extends React.Component {
  render() {
    const { type, text, handleInputs } = this.props;

    return (
      <input
        type={type}
        className="input-email"
        placeholder={text}
        onChange={handleInputs}
        name={type}
      />
    );
  }
}

export default Input;
