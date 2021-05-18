import PropTypes from "prop-types";
import S from "./ErrorStyles";

const Error = ({ text }) => {
  return (
    <S.Container>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

Error.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Error;
