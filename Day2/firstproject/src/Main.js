import React, { Component } from "react";
import { withRouter } from "react-router";

class Main extends Component {

  // componentDidMount(){

  // }

  handleRouter = (url) => {
    this.props.history.push(url);
  };
  goToLogin = () => {
    this.handleRouter("/Login");
  };
  goToRegister = () => {
    this.handleRouter("/Register");
  };

  render() {
    return (
      <div>
        <button onClick={this.goToLogin}>Login</button>
        <button onClick={this.goToRegister}>Register</button>
      </div>
    );
  }
}

export default withRouter(Main);
