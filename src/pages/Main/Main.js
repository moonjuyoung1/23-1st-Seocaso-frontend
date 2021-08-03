import React from "react";
import Nav from "../../components/Nav/Nav";
import StarRanking from "./StarRanking";
import ReviewRanking from "./ReviewRanking";
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
          <StarRanking starRanking={starRanking} />
          <ReviewRanking reviewRanking={reviewRanking} />
        </section>
        <Footer />
      </div>
    );
  }
}

export default Main;
