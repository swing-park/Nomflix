import PropTypes from "prop-types";
import S from "./DetailStyles";
import Helmet from "react-helmet";
import Loader from "@/Components/Loader/Loader";
import Error from "@/Components/Error/Error";

const DetailPresenter = ({ result, error, loading }) => {
  return !loading ? (
    <>
      <S.Container>
        <Helmet>
          <title>
            {result.original_title
              ? result.original_title
              : result.original_name}{" "}
            | Nomflix
          </title>
        </Helmet>
        <S.BackDrop
          bgUrl={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
        />
        <S.Content>
          <S.Cover
            bgUrl={
              result.poster_path
                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                : require("@/assets/swing.png").default
            }
          />
          <S.Data>
            <S.Title>
              {result.original_title
                ? result.original_title
                : result.original_name}
            </S.Title>
            <S.ItemContainer>
              <S.Item>
                {result.release_date
                  ? result.release_date.substring(0, 4)
                  : result.first_air_date.substring(0, 4)}
              </S.Item>
              <S.Divider>•</S.Divider>
              <S.Item>
                {result.runtime ? result.runtime : result.episode_run_time[0]}{" "}
                min
              </S.Item>
              <S.Divider>•</S.Divider>
              <S.Item>
                {result.genres &&
                  result.genres.map((genre, index) =>
                    index === result.genres.length - 1
                      ? genre.name
                      : `${genre.name}/`
                  )}
              </S.Item>
            </S.ItemContainer>
            <S.OverView>{result.overview}</S.OverView>
          </S.Data>
        </S.Content>
      </S.Container>
      {error && <Error text={error} />}
    </>
  ) : (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
