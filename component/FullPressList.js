import React from "react";
import Nav from "./Nav";
import { PressProvider } from "../PressContext";
import PressContent from "./PressContent";
import {Container} from './styles/ContainerStyle'

const FullPressList = () => {
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
