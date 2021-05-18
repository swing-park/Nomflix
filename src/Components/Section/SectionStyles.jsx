import styled from "styled-components";

const Section = {
  Container: styled.div`
    :not(:last-child) {
      margin-bottom: 50px;
    }
  `,
  Title: styled.span`
    font-size: 16px;
    font-weight: 600;
  `,
  Grid: styled.div`
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 125px);
    grid-gap: 25px;
  `,
};

export default Section;
