import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import WeeklyOrderComponent from "./components/WeeklyOrderComponent";
import FulfillItemComponent from "./components/FulfillItemComponent";
import OrderItemsComponent from "./components/OrderItemsComponent";

class App extends Component {
  render() {
    return (
      <div className="container-fluid px-lg-5">
        <Router>
          <div>
            <Route path="/" exact component={WeeklyOrderComponent}></Route>
            <Route
              path="/fulfill/:itemname"
              exact
              component={FulfillItemComponent}
            ></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
