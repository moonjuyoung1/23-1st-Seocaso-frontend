import React from 'react';

class Like extends React.Component {
  render() {
    const { image, cafename } = this.props;
    return (
      <li>
        <div className="images-container">
          <img alt="#" src={image} />
        </div>
        <div className="cafe-name">{cafename}</div>
      </li>
    );
  }
}

export default Like;
