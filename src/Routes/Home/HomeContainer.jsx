import React from "react";
import HomePresenter from "./HomePresenter";
import { movieAPI } from "@/utils/API";

class HomeContainer extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await movieAPI.nowPlaying();
      const {
        data: { results: upComing },
      } = await movieAPI.upComing();
      const {
        data: { results: popular },
      } = await movieAPI.popular();
      this.setState({
        nowPlaying,
        upComing,
        popular,
      });
    } catch {
      this.setState({
        error: "Can't find movie information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { nowPlaying, upComing, popular, error, loading } = this.state;
    return (
      <HomePresenter {...{ nowPlaying, upComing, popular, error, loading }} />
    );
  }
}

export default HomeContainer;
