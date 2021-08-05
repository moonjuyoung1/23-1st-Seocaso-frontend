import React from "react";
import Nav from "../../components/Nav/Nav";
import Ranking from "./Ranking";
import Footer from "./Footer";
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
    fetch("/data/StarRankingData.json", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          starRanking: data,
        });
      });

    fetch("/data/ReviewRankingData.json", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          reviewRanking: data,
        });
      });
  }

  render() {
    const { starRanking, reviewRanking } = this.state;
    return (
      <div className="main">
        <Nav />
        <section>
          <Ranking title="별점 순 ⭐" ranking={starRanking} />
          <Ranking title="리뷰 순 💬" ranking={reviewRanking} />
        </section>
        <Footer />
      </div>
    );
  }
}

export default Main;
