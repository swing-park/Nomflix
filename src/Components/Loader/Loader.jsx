import S from "./LoaderStyles";

const Loader = () => {
  return (
    <S.Container>
      <span role="img" aria-label="Loading">
        Loading...⏰
      </span>
    </S.Container>
  );
};

export default Loader;
