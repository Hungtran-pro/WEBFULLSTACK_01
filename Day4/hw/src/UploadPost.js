import React, { useState } from "react";
import { useHistory } from "react-router";
import "./UploadPost.css";

export default function UploadPost(props) {
  let history = useHistory();
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [text, setText] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeImgSource = (event) => {
    setImg(event.target.value);
  };

  const changeText = (event) => {
    setText(event.target.value);
  };

  const Submit = () => {
    if (name == "" || img == "" || text == "") {
      alert("Điền đầy đủ vào!");
    } else {
      let postTmp = {
        name: name,
        img: img,
        text: text,
      };
      props.addList(postTmp);
      // console.log(post);s
      history.push("/");
    }
  };

  const Cancel = () => {
    history.push("/");
  };

  return (
    <div className="flexCol container">
      <div id="title">Bài đăng</div>
      <div id="name">
        <input
          type="text"
          placeholder="Tên"
          value={name}
          onChange={changeName}
        ></input>
      </div>
      <div id="img">
        <input
          type="text"
          placeholder="Chèn link ảnh"
          value={img}
          onChange={changeImgSource}
        ></input>
      </div>
      <div id="text">
        <input
          type="text"
          placeholder="Bài viết"
          value={text}
          onChange={changeText}
        ></input>
      </div>
      <div className="flexRow btn">
        <button id="btnSubmit" type="button" onClick={Submit}>
          Submit
        </button>
        <button id="btnCancel" type="button" onClick={Cancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
