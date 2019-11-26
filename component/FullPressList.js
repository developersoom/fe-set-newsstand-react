import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { PressProvider } from "../PressContext";
import PressContent from "./PressContent";

const FullPressList = () => {
  const Container = styled.div`
    width: 70vw;
    margin: 50px auto;
    height: 400px;
    background-color: #110133;
    color: white;
  `;

  return (
    <PressProvider>
      <Container>
        <Nav />
        <PressContent />
      </Container>
    </PressProvider>
  );
};

export default FullPressList;
