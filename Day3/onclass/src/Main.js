import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Person from "./Person";

export default function Main() {
  const [name, setName] = useState("hung");
  const [age, setAge] = useState(0);
  const [list, setList] = useState([]);
  const [color, setColor] = useState("");
  const [cancelState, setCancelstate] = useState(true);
  const [btnName, setBtnName] = useState("submit");
  const [index, setIndex] = useState();
  const [checkList, setCheckList] = useState([]);

  useEffect(() => {
    console.log("hello");
  }, []);

  const changeName = (event) => {
    setName(event.target.value);
  };

  const addAge = () => setAge(age + 1);
  const minusAge = () => setAge(age - 1);

  const submit = () => {
    let newList = [...list];
    if (cancelState) {
      let obj = {
        name,
        age,
      };
      newList.push(obj);
      console.log(newList);
      setName("");
      setAge(0);
      setList([...newList]);
    } else {
      newList[index].name = name;
      newList[index].age = age;
      setList([...newList]);
      setBtnName("submit");
      setCancelstate(true);
      setName("");
      setAge(0);
    }
  };

  const remove = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  const editUser = (index) => {
    setCancelstate(false);
    setBtnName("edit");
    setIndex(index);
    let newList = [...list];
    setName(newList[index].name);
    setAge(newList[index].age);
  };

  const cancelBtn = () => {
    console.log("cancel");
    setBtnName("submit");
    setCancelstate(true);
    setName("");
    setAge(0);
  };

  const handleCheckBox = (index) => {
    if (checkList.indexOf(index) == -1) {
      setCheckList([...checkList, index]);
    } else {
      setCheckList([...checkList.filter((item) => item != index)]);
    }
  };

  const deleteAll = () => {
    setList([...list.filter((item, index) => !checkList.includes(index))]);
    setCheckList([])
  };

  const renderItems = (item, index) => {
    return (
      <Person
        item={item}
        index={index}
        remove={remove}
        checkList={checkList}
        handleCheckBox={handleCheckBox}
        editUser={editUser}
      />
    );
  };

  return (
    <div>
      <h3>
        💎 {name} {age}
      </h3>
      <input type="text" value={name} onChange={changeName}></input>
      <button onClick={addAge}>Add</button>
      <button onClick={minusAge}>Minus</button>
      <button onClick={submit}>{btnName}</button>
      <button onClick={cancelBtn} hidden={cancelState}>
        cancel
      </button>
      <button onClick={deleteAll}>DeleteUser</button>
      <ul>{list.map(renderItems)}</ul>
    </div>
  );
}
