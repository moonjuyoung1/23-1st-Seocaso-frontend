import React from "react";
//import Nav from "../../components/Nav/Nav";
//import Footer from "../../components/Footer/Footer";
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
    console.log(this.state.starRanking);
  }

  render() {
    const { starRanking, reviewRanking } = this.state;
    return (
      <div className="main">
        {/* <Nav /> */}
        <section>
          <Ranking title="별점 순 ⭐" ranking={starRanking} />
          <Ranking title="리뷰 순 💬" ranking={reviewRanking} />
        </section>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Main;
