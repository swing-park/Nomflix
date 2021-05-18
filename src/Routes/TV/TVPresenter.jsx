import PropTypes from "prop-types";
import S from "./TVStyles";
import Helmet from "react-helmet";
import Section from "@/Components/Section/Section";
import Loader from "@/Components/Loader/Loader";
import Error from "@/Components/Error/Error";
import Poster from "@/Components/Poster/Poster";

const TVPresenter = ({ topRated, airingToday, popular, error, loading }) => {
  return (
    <>
      <Helmet>
        <title>TV Shows | Nomflix</title>
      </Helmet>
      {!loading ? (
        <S.Container>
          {topRated && topRated.length > 0 && (
            <Section title="Top Rated Shows">
              {topRated.map((show) => (
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
          {popular && popular.length > 0 && (
            <Section title="Popular Shows">
              {popular.map((show) => (
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
          {airingToday && airingToday.length > 0 && (
            <Section title="Airing Today Shows">
              {airingToday.map((show) => (
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
        </S.Container>
      ) : (
        <Loader />
      )}
    </>
  );
};

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  airingToday: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
