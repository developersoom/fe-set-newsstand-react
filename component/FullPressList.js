import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import ContentContainer from "./ContentContainer";
import { PressProvider } from "../PressContext";

const FullPressList = () => {
  const Container = styled.div`
    width: 70vw;
    margin: 50px auto;
    height: 400px;
    background-color: #110133;
    color: white;
  `;

  return (
    <Container>
      <h1>흠...</h1>
    </Container>
  );
};

export default FullPressList;
