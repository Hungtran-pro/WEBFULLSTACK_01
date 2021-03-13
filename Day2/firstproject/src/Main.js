import React, { Component } from "react";
import Post from "./Post";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classWeb: 48,
      textWelcome : '',
    };
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.classWeb}</p>
        <p>{this.state.textWelcome}</p>
        <button
          onClick={() => {
            this.setState({
              classWeb: this.state.classWeb + 1,
            });
          }}
        >
          Plus
        </button>
        <button
          onClick={() => {
            this.setState({
              classWeb: this.state.classWeb - 1,
            });
          }}
        >
          Minus
        </button>
        <input type="text" onChange={(event) => {
            this.setState({
                textWelcome: event.target.value
            })
        }}></input>
        <p>Hello World;</p>
        <Post name={"hung"} age={20} />
        <Post name={"tran"} age={10} />
      </div>
    );
  }
}
