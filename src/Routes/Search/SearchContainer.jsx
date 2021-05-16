import React from "react";
import SearchPresenter from "./SearchPresenter";
import { tvAPI, movieAPI } from "@/utils/API";

class SearchContainer extends React.Component {
  state = {
    moviewResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: false,
  };

  componentDidMount() {}

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm(searchTerm);
    }
  };

  searchByTerm = async (term) => {
    this.setState({ loading: true });
    try {
      const {
        data: { results: moviewResults },
      } = await movieAPI.search(term);
      const {
        data: { results: tvResults },
      } = await tvAPI.search(term);
      this.setState({
        moviewResults,
        tvResults,
      });
    } catch {
      this.setState({
        error: "Can't find results.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const { moviewResults, tvResults, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        moviewResults={moviewResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default SearchContainer;
