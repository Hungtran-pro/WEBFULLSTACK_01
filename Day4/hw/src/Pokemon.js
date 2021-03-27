import axios from "axios";
import { getPokemon } from "./axios";
import React, { useEffect, useState } from "react";
import { getByPlaceholderText } from "@testing-library/dom";

export default function Pokemon() {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const changName = (event) => {
    setName(event.target.value);
  };

  const fetchPokemon = () => {
    setLoading(true);
    getPokemon(name)
      .then((res) => {
        setLoading(false);
        setData(res.data);
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        setData(null);
      });
  };

  return (
    <div>
      <input type="text" value={name} onChange={changName}></input>
      <button onClick={() => fetchPokemon()}>Search</button>
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <div>
          <p>Thông tin: {data.name} </p>
          <p>Cân nặng: {data.weight} </p>
          <img src={data?.sprites?.other["official-artwork"]?.front_default} />
        </div>
      ) : (
        <p>Không có thông tin</p>
      )}
    </div>
  );
}
