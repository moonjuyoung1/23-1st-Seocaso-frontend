import React from 'react';

class CoffeeMenu extends React.Component {
  render() {
    const { url } = this.props.menu;
    return <div className="gallery-container">{this.props.children};</div>;
  }
}

export default CoffeeMenu;
