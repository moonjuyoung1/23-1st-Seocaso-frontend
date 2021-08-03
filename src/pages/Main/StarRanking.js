import React from "react";
import StarRankList from "./StarRankList";
import "./Main.scss";

class StarRanking extends React.Component {
  render() {
    return (
      <div className="ranking">
        <div className="ranking-title">별점 순 ⭐</div>
        <div className="ranking-carousel">
          <ul>
            {this.props.starRanking.map((star) => {
              return (
                <StarRankList
                  key={star.id}
                  image={star.image}
                  name={star.cafeName}
                  address={star.address}
                  star={star.star}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default StarRanking;
