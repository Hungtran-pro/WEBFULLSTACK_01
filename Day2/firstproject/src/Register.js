import React, { Component } from "react";
import { withRouter } from "react-router";
import "./login.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      pass: "",
      rePass: "",
      email: "",
      ac: false,
    };
  }

  handleRouter = (url) => {
    this.props.history.push(url);
  };

  goToLogin = () => {
    this.handleRouter("/Login");
  };

  validateAccount() {
    let { userName } = this.state;
    if (!this.validateName()) {
      document.querySelector("#error").innerHTML = "Wrong username";
    } else if (!this.validatePass()) {
      document.querySelector("#error").innerHTML =
        "Wrong password or re-password";
    } else if (!this.validateTerm()) {
      document.querySelector("#error").innerHTML =
        "You need to accept our terms and conditions";
    } else {
      // alert(`thank ${userName}`);
      // localStorage.setItem('user', this.state.userName);
      // localStorage.setItem('pass', this.state.pass);
      let user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        user.push({
          username: this.state.userName,
          password: this.state.pass,
        });
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        let newList = [];
        newList.push({
          username: this.state.userName,
          password: this.state.pass,
        });
        localStorage.setItem("user", JSON.stringify(newList));
      }
      this.goToLogin();
    }
  }

  validateName() {
    let name = this.state.userName;
    return name.length >= 3 && name.length <= 50 ? true : false;
  }

  validatePass() {
    let { pass, rePass } = this.state;
    return pass === rePass && pass.length >= 6 ? true : false;
  }

  validateTerm() {
    console.log(this.state.ac);
    return this.state.ac;
  }

  render() {
    return (
      <div id="login" className="flexCol">
        <h2 id="title">create account</h2>
        <form action="#" id="loginForm" className="flexCol">
          <input
            className="textBox"
            type="text"
            placeholder="username"
            value={this.state.userName}
            onChange={(event) => {
              this.setState({
                userName: event.target.value,
              });
            }}
          ></input>
          <input
            className="textBox"
            type="email"
            placeholder="email"
            value={this.state.email}
            onChange={(event) => {
              this.setState({
                email: event.target.value,
              });
            }}
          ></input>
          <input
            className="textBox"
            type="password"
            placeholder="password"
            value={this.state.pass}
            onChange={(event) => {
              this.setState({
                pass: event.target.value,
              });
            }}
          ></input>
          <input
            className="textBox"
            type="password"
            placeholder="repeat your password"
            value={this.state.rePass}
            onChange={(event) => {
              this.setState({
                rePass: event.target.value,
              });
            }}
          ></input>
          <p id="error"></p>
          <div className="flexRow" id="boxCheck">
            <input
              type="checkBox"
              id="ac"
              value={this.state.ac}
              onChange={(event) => {
                this.setState({
                  ac: event.target.checked,
                });
              }}
            ></input>
            <label for="ac">I agree to the terms and conditions</label>
          </div>
          <input
            className="submit-btn"
            type="submit"
            value="Sign up"
            onClick={() => {
              console.log(this.state);
              this.validateAccount();
            }}
          ></input>
        </form>
      </div>
    );
  }
}

export default withRouter(Register);