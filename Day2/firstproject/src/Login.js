import React, { Component } from "react";
import { withRouter } from "react-router";

class Login extends Component {
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

  goToMain = () => {
    this.handleRouter("/");
  };

  validateAccount() {
    let usersList = JSON.parse(localStorage.getItem("user"));
    let flat = true;
    usersList.forEach((e) => {
      if (
        e.username === this.state.userName &&
        e.password === this.state.pass
      ) {
        flat = false;
        // break;
      }
    });
    if (!flat) {
      console.log("congrats");
      this.goToMain();
    } else console.log("wrong");
  }

  render() {
    return (
      <div id="login" className="flexCol">
        <h2 id="title">login account</h2>
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
            type="password"
            placeholder="password"
            value={this.state.pass}
            onChange={(event) => {
              this.setState({
                pass: event.target.value,
              });
            }}
          ></input>
          {/* <div className="flexRow" id="boxCheck">
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
              </div> */}
          <input
            className="submit-btn"
            type="submit"
            value="Sign in"
            onClick={() => {
              this.validateAccount();
            }}
          ></input>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
