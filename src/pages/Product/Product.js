import React from 'react';
import Top from './Top/Top';
import Body from './Body/Body';

class Product extends React.Component {
  render() {
    return (
      <div className="bgccolor">
        <Top />
        <Body />
        <div></div>
      </div>
    );
  }
}

export default Product;
