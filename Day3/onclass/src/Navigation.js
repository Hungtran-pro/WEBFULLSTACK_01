import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./Main";

export default function Navigation() {
  return (
    <div>
      <Router>
        <Route exact={true} path="/">
          <Main />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Router>
    </div>
  );
}

function About() {
  return <h3>Đây là trang giớI thiệu</h3>;
}