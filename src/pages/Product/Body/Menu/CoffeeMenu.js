import React from 'react';

class CoffeeMenu extends React.Component {
  render() {
    const { url } = this.props.menu;
    return (
      <div className="gallery-container">
        <img alt="gallery" className="gallery-image" src={url} />
        <div className="black-wrap"></div>
        <div className="coffee-info">{this.props.children}</div>
      </div>
    );
  }
}

export default CoffeeMenu;
