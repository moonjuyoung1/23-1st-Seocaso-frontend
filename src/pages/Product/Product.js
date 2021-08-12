import React from 'react';

import Top from './Top/Top';
import Body from './Body/Body';

import { API } from '../../config';

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      infoList: [],
    };
  }

  //   fetch(`${API.CAFE_RATE}${cafeId}/star-rating`)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         infoList: data.informations,
  //       });
  //     });

  componentDidMount() {
    fetch(`${API.CAFE_INFO}1`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          infoList: data.informations,
        });
      });
  }

  render() {
    return (
      <>
        <Top infoList={this.state.infoList} />
        <Body infoList={this.state.infoList} />
        <div></div>
      </>
    );
  }
}

export default Product;
