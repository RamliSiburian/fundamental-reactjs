import React, { useState } from "react";

function State() {
  //init State
  const [number, setNumber] = useState(0);

  //Create Function Add
  function Add() {
    return setNumber(number + 1);
  }

  //Create Function Less
  function Less() {
    if (number <= 0) {
      setNumber(number = 0);
      return alert('Number cant less then 0 ');
    } else {
      return setNumber(number - 1);

    }
  }
  return (
    // Code Inside div
    <div style={{ marginLeft: "50px" }}>
      <h3>Number will changes when you click Add or Less button</h3>
      <br />
      <h2>{number}</h2>
      <br />
      <button onClick={Add}>Add</button> &nbsp;&nbsp;&nbsp;
      <button onClick={Less}>Less</button>
    </div>
  );
}

export default State;
