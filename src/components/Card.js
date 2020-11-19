import React, { useState } from "react";

export default function Card(props) {
  const [number, setNumber] = useState(0);
  function substract() {
    setNumber(number - 1);
  }
  function add() {
    setNumber(number + 1);
  }
  return (
    <article className={props.highlight ? "hilight" : ""}>
      <h2>{props.task}</h2>
      <button onClick={substract}> - </button>
      <h2>{number}</h2>
      <button onClick={add}> + </button>
    </article>
  );
}
