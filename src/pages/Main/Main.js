import React from "react";
import Ranking from "./Ranking/Ranking";
import "./Main.scss";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      starRanking: [],
      reviewRanking: [],
    };
  }

  componentDidMount() {
    fetch("http://10.58.4.92:8000/main")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          starRanking: data.STAR_RANKING,
        });
      });

    fetch("http://10.58.4.92:8000/main")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          reviewRanking: data.REVIEW_RANKING,
        });
      });
  }

  render() {
    const { starRanking, reviewRanking } = this.state;
    return (
      <div className="main">
        <section>
          <Ranking type="star" title="별점 순 ⭐" ranking={starRanking} />
          <Ranking type="review" title="리뷰 순 💬" ranking={reviewRanking} />
        </section>
      </div>
    );
  }
}

export default Main;
