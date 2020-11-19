import React, { useState } from "react";

import ReactDOM from "react-dom";
import Button from "muicss/lib/react/button";
import Input from "muicss/lib/react/input";

export default function AddCardForm(props) {
  const [task, setTask] = useState("");
  function clicked(e) {
    e.preventDefault();
    props.cardAdded(task);
  }

  return (
    <div className="AddCardForm">
      <form onSubmit={clicked}>
        <label>Add new card</label>
        <Input
          name="task"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          type="text"
        />
        <Button color="accent" onSubmit={clicked} type="submit">
          Accept
        </Button>
      </form>
    </div>
  );
}
