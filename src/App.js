import React from "react";
import HomePage from "./page/homepage/homepage.component";
import ShopPage from "./page/shop/shop.component";
import Header from "./component/header/header.component";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
