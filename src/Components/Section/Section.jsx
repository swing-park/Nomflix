import Proptypes from "prop-types";
import S from "./SectionStyles";

const Section = ({ title, children }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Grid>{children}</S.Grid>
    </S.Container>
  );
};

Section.propTypes = {
  title: Proptypes.string.isRequired,
  children: Proptypes.oneOfType([
    Proptypes.arrayOf(Proptypes.node),
    Proptypes.node,
  ]),
};

export default Section;
