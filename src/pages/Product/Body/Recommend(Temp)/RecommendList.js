import React from 'react';

class RecommendList extends React.Component {
  render() {
    const { url, name } = this.props;
    return (
      <div className="gallery-container">
        <img alt="gallery" className="gallery-image" src={url} />
        <div className="black-wrap"></div>
        <div className="coffee-info">
          <p className="coffee-name">{name}</p>
        </div>
      </div>
    );
  }
}

export default RecommendList;
