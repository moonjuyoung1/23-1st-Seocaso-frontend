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
    const imgWidth = 20;
    const imgViewLength = 5;
    const imgTranslate = imgWidth * imgViewLength;
    if (currentIndex === 0) {
      this.setState({
        currentIndex: currentIndex - imgTranslate / 2,
      });
    } else {
      this.setState({
        currentIndex: currentIndex + imgTranslate / 2,
      });
    }
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
                  cafeName={rank.cafe_name}
                  address={rank.cafe_address}
                  star={rank.cafe_avg_rating}
                />
              );
            })}
          </ul>
          <div
            className={
              "carousel-btn left-btn " + (!currentIndex ? "btn-remove" : "")
            }
            onClick={this.handleButtonClick}
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} />
          </div>
          <div
            className={
              "carousel-btn right-btn " + (currentIndex ? "btn-remove" : "")
            }
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
