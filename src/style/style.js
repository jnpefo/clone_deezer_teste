import styled from 'styled-components';

const Card = styled.div`
  img {
    border-radius: 25px;
  }
  max-width: 250px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin: 0 auto;
`;

const Corpo = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    display: flex;
    justify-content: center;
  }
  h3 {
    display: flex;
    justify-content: center;
  }
`;

export {
  Card,
  Grid,
  Corpo,
}
