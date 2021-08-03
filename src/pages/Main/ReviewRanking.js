import React from "react";
import ReviewRankList from "./ReviewRankList";
import "./Main.scss";

class ReviewRanking extends React.Component {
  render() {
    return (
      <div className="ranking">
        <div className="ranking-title">리뷰 순 💬</div>
        <div className="ranking-carousel">
          <ul>
            {this.props.reviewRanking.map((star) => {
              return (
                <ReviewRankList
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

export default ReviewRanking;
