import PropTypes from "prop-types";
import S from "./HomeStyles";
import Helmet from "react-helmet";
import Section from "@/Components/Section/Section";
import Loader from "@/Components/Loader/Loader";
import Error from "@/Components/Error/Error";
import Poster from "@/Components/Poster/Poster";

const HomePresenter = ({ nowPlaying, upComing, popular, error, loading }) => {
  return (
    <>
      <Helmet>
        <title>Movies | Nomflix</title>
      </Helmet>
      {!loading ? (
        <S.Container>
          {nowPlaying && nowPlaying.length > 0 && (
            <Section title="Now Playing Movies">
              {nowPlaying.map((movie) => (
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
          {upComing && upComing.length > 0 && (
            <Section title="UpComing Movies">
              {upComing.map((movie) => (
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
          {popular && popular.length > 0 && (
            <Section title="Popular Movies">
              {popular.map((movie) => (
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
          {error && <Error text={error} />}
        </S.Container>
      ) : (
        <Loader />
      )}
    </>
  );
};

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upComing: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
