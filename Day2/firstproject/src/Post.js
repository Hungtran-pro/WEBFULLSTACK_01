import React, { Component } from "react";

export default class Post extends Component {
  render() {
    let {name, age} = this.props;
    return (
      <div>
        <p>
          This is {name} with {age}
        </p>
      </div>
    );
  }
}
