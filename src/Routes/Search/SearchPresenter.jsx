import PropTypes from "prop-types";
import S from "./SearchStyles";
import Helmet from "react-helmet";
import Section from "@/Components/Section/Section";
import Loader from "@/Components/Loader/Loader";
import Error from "@/Components/Error/Error";
import Poster from "@/Components/Poster/Poster";

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm,
}) => {
  return (
    <S.Container>
      <Helmet>
        <title>Search | Nomflix</title>
      </Helmet>
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          placeholder="Search Movies or TV Shows..."
          value={searchTerm}
          onChange={updateTerm}
        />
      </S.Form>
      {!loading ? (
        <>
          {movieResults && movieResults.length > 0 && (
            <Section title="Movie Results">
              {movieResults.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imgUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={
                    movie.release_date && movie.release_date.substring(0, 4)
                  }
                  isMovie={true}
                />
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV Results">
              {tvResults.map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  imgUrl={show.poster_path}
                  title={show.original_name}
                  rating={show.vote_average}
                  year={
                    show.first_air_date && show.first_air_date.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
          {error && <Error text={error} />}
        </>
      ) : (
        <Loader />
      )}
    </S.Container>
  );
};

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
