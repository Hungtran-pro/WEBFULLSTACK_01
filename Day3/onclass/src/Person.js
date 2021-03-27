import React, { useState } from "react";

export default function Person(props) {
  let item = props.item;
  let index = props.index;
  const [color, setColor] = useState("black");

  const changeColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(`#${randomColor}`);
  }

  return (
    
      <li key={index} style={{ color: color }}>
        {" "}
        {item.name} {item.age}
     
      <input
      checked={props.checkList.includes(index)}
        onChange={() => props.handleCheckBox(index)}
        type="checkBox"
      />
      <button onClick={() => changeColor()}>changeColor</button>
      <button onClick={() => props.editUser(index)}>Edit</button>
      <button onClick={() => props.remove(index)}>remove</button>
      </li>
  );
}
