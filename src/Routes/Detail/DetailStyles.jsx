import styled from "styled-components";

const Detail = {
  Container: styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
  `,
  BackDrop: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.bgUrl});
    background-size: cover;
    background-position: center center;
    filter: blur(3px);
    opacity: 0.5;
    z-index: 0;
  `,
  Content: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  `,
  Cover: styled.div`
    width: 30%;
    background-image: url(${(props) => props.bgUrl});
    background-size: cover;
    background-position: center center;
    height: 100%;
    border-radius: 5px;
  `,
  Data: styled.div`
    width: 70%;
    margin-left: 10px;
  `,
  Title: styled.div`
    font-size: 32px;
    margin-bottom: 20px;
  `,
  ItemContainer: styled.div`
    margin: 20px 0px;
  `,
  Item: styled.span``,
  Divider: styled.span`
    margin: 0px 10px;
  `,
  OverView: styled.p`
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
    width: 50%;
  `,
};

export default Detail;
