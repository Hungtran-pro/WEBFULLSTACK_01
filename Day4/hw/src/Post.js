import React from "react";
import "./Post.css";

export default function Post(props) {
  let name = props.post.name;
  let text = props.post.text;
  let img = props.post.img;
  let jobs = props.post.jobs;
  let index = props.index;
  let removePost = props.removePost;
  return (
    <div id="container">
      <div id="name">{name}</div>
      <div id="text">{text}</div>
      <div id="imgDiv">
        <img src={img}></img>
      </div>
      <div id="removeBtn" onClick={removePost(index)}>remove</div>
    </div>
  );
}
