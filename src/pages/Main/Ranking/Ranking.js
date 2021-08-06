import React from "react";
import RankList from "../RankList/RankList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Ranking.scss";

class Ranking extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
    };
  }

  handleButtonClick = () => {
    const { currentIndex } = this.state;
    this.setState({
      currentIndex: !currentIndex ? currentIndex - 50 : currentIndex + 50,
    });
  };

  render() {
    const { currentIndex } = this.state;
    return (
      <div className="ranking">
        <div className="ranking-title">{this.props.title}</div>
        <div className="ranking-carousel">
          <ul style={{ transform: `translateX(${currentIndex}%)` }}>
            {this.props.ranking.map((rank) => {
              return (
                <RankList
                  key={rank.cafe_id}
                  image={rank.cafe_image}
                  name={rank.cafe_name}
                  address={rank.cafe_address}
                >
                  {this.props.type === "star" && (
                    <div>평균★{rank.cafe_avg_rating}</div>
                  )}
                  {this.props.type === "review" && (
                    <div>리뷰★{rank.cafe_review_counts}</div>
                  )}
                </RankList>
              );
            })}
          </ul>
          <div
            className={`carousel-btn left-btn ${!currentIndex && "btn-remove"}`}
            onClick={this.handleButtonClick}
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} />
          </div>
          <div
            className={`carousel-btn right-btn ${currentIndex && "btn-remove"}`}
            onClick={this.handleButtonClick}
          >
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </div>
        </div>
      </div>
    );
  }
}

export default Ranking;
