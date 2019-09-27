import styled from "styled-components";

export const Title = styled.h1`
  font-size: 25px;
  color: ${props => (props.error ? "red" : "#7159c1")};
  font-family: Arial, Helvetica, sans-serif;

  p {
    font-size: 15px;
    color: black;
  }
`;