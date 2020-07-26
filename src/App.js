import React from "react";
import HomePage from "./page/homepage/homepage.component";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>

      {/* <HomePage /> */}
    </div>
  );
}

export default App;
