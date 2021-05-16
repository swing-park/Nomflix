import React from "react";
import TVPresenter from "./TVPresenter";
import { tvAPI } from "@/utils/API";

class TVContainer extends React.Component {
  state = {
    topRated: null,
    airingToday: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: topRated },
      } = await tvAPI.topRated();
      const {
        data: { results: airingToday },
      } = await tvAPI.airingToday();
      const {
        data: { results: popular },
      } = await tvAPI.popular();
      this.setState({
        topRated,
        airingToday,
        popular,
      });
    } catch {
      this.setState({
        error: "Can't find TV information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { topRated, airingToday, popular, error, loading } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        airingToday={airingToday}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}

export default TVContainer;
