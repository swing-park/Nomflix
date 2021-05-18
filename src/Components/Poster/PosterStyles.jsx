import styled from "styled-components";

const Poster = {
  Container: styled.div`
    font-size: 12px;
  `,
  Image: styled.div`
    background-image: url(${(props) => props.bgUrl});
    height: 180px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.1s linear;
  `,
  ImageContainer: styled.div`
    margin-bottom: 5px;
    position: relative;
    &:hover {
      div {
        opacity: 0.3;
      }
      span {
        opacity: 1;
      }
    }
  `,
  Rating: styled.span`
    position: absolute;
    bottom: 5px;
    right: 5px;
    opacity: 0;
  `,
  Title: styled.span`
    display: block;
    margin-bottom: 3px;
  `,
  Year: styled.span`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
  `,
};

export default Poster;
