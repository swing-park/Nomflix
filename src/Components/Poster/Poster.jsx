import PropTypes from "prop-types";
import S from "./PosterStyles";
import noPoster from "@/assets/swing.png";
import { Link } from "react-router-dom";

const Poster = ({ id, imgUrl, title, rating, year, isMovie = false }) => {
  return (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
      <S.Container>
        <S.ImageContainer>
          <S.Image
            bgUrl={
              imgUrl ? `https://image.tmdb.org/t/p/w300${imgUrl}` : noPoster
            }
          />
          <S.Rating>
            <span role="img" aria-label="rating">
              ⭐️
            </span>{" "}
            {rating}/10
          </S.Rating>
        </S.ImageContainer>
        <S.Title>
          {title.length > 18 ? `${title.substring(0, 18)}...` : title}
        </S.Title>
        <S.Year>{year}</S.Year>
      </S.Container>
    </Link>
  );
};

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
