import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { PressProvider } from "../PressContext";
import styled from "styled-components";
import Nav from "../component/Nav";
import ContentContainer from "../component/ContentContainer";
import PressContent from "../component/PressContent";
import MyPress from "../component/MyPress";

const App = () => {
  const Container = styled.div`
    width: 70vw;
    margin: 50px auto;
    height: 400px;
    background-color: #110133;
    color: white;
  `;

  return (
    <div>
      <PressProvider>
        <Container>
          <Nav />

          <Switch>
            <Route path="/" exact={true} component={ContentContainer} />
            <Route path="/fullPressList" component={PressContent} />
            <Route path="/myPressList" component={MyPress} />
            <Route
              render={({ location }) => (
                <div>
                  <h2>이 페이지는 존재하지 않습니다:</h2>
                  <p>{location.pathname}</p>
                </div>
              )}
            />
          </Switch>
        </Container>
      </PressProvider>
    </div>
  );
};

export default App;
