import { withRouter } from "react-router-dom";
import * as S from "./HeaderStyles";

const Header = ({ location: { pathname } }) => {
  return (
    <S.Header>
      <S.List>
        <S.Item currentRoute={pathname === "/"}>
          <S._Link to="/">Movies</S._Link>
        </S.Item>
        <S.Item currentRoute={pathname === "/tv"}>
          <S._Link to="/tv">TV</S._Link>
        </S.Item>
        <S.Item currentRoute={pathname === "/search"}>
          <S._Link to="/search">Search</S._Link>
        </S.Item>
      </S.List>
    </S.Header>
  );
};

export default withRouter(Header);
