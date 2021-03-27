import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import Post from "./Post";
import "./Main.css";

export default function Main(props) {
  const history = useHistory();
  let post = props.post;

  const handleHistoty = () => {
    history.push("/uploadPost");
  };

  const removePost = (index) => {
    post.splice(index, 1);
  };

  const renderPosts = (items, index) => {
    return <Post post={items} index={index} removePost={removePost} />;
  };

  return (
    <div className="flexCol">
      <div id="title">
        <h2>Danh sách bài đăng</h2>
      </div>
      <div id="btn">
        <button onClick={handleHistoty}>Đăng bài</button>
      </div>
      <div className="flexCol">
        {post && post.length == 0 ? (
          <Rong />
        ) : (
          post && post.map(renderPosts)
        )}
      </div>
    </div>
  );
}

function Rong() {
  return <div>Không có gì đâu mà xem, đi viết bài đi!😑</div>;
}
