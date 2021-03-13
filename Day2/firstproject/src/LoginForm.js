import React, { Component } from "react";
import "./login.css";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pass: "123123",
      user: "web48",
      userInput: "",
      passInput: "",
      remember: false,
    };
  }

  render() {
    return (
      <div id="login">
        <input
          type="text"
          value={this.state.userInput}
          placeholder="username"
          onChange={(event) => {
            this.setState({
              userInput: event.target.value,
            });
          }}
        ></input>
        <input
          type="password"
          placeholder="passo"
          value={this.state.passInput}
          onChange={(event) => {
            this.setState({
              passInput: event.target.value,
            });
          }}
        ></input>
        <p id="error"></p>
        <button
          type="button"
          onClick={() => {
            if (
              this.state.pass === this.state.passInput &&
              this.state.user === this.state.userInput
            ) {
              alert("hi");
            } else {
              document.getElementById("error").innerHTML = "wrong pass";
            }
            console.log(this.state.remember);
            if (this.state.remember === false) {
              this.setState({
                passInput: "",
                userInput: "",
              });
            }
          }}
        >
          login
        </button>
        <input
          type="checkbox"
          value={this.state.remember}
          onChange={(event) => {
            this.setState({
              remember: event.target.checked,
            });
          }}
        ></input>
      </div>
    );
  }
}