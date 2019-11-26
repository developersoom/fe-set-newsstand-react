import React from "react";
import styles from "./App.css";
import Main from "../component/Main";
import { Switch, Route, Link } from "react-router-dom";
import FullPressList from "../component/FullPressList";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true} component={Main} />
        <Route path="/fullPressList" component={FullPressList} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
