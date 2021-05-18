import React from "react";
import SearchPresenter from "./SearchPresenter";
import { tvAPI, movieAPI } from "@/utils/API";

class SearchContainer extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: false,
  };

  componentDidMount() {}

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm(searchTerm);
    }
  };

  updateTerm = ({ target: { value } }) => {
    this.setState({
      searchTerm: value,
    });
  };

  searchByTerm = async (term) => {
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults },
      } = await movieAPI.search(term);
      const {
        data: { results: tvResults },
      } = await tvAPI.search(term);
      this.setState({
        movieResults,
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
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        {...{ movieResults, tvResults, searchTerm, error, loading }}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}

export default SearchContainer;
