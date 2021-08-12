import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button className="input-button" onClick={this.handleFetch}>
        {this.props.value}
      </button>
    );
  }
}

export default Button;
