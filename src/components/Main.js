import React from "react";
import ListContainer from "./ListContainer";

import Panel from "muicss/lib/react/panel";
export default function Main(props) {
  const todoList = props.cards.filter((card) => card.list === "todo");
  const doingList = props.cards.filter((card) => card.list === "doing");
  const doneList = props.cards.filter((card) => card.list === "done");

  return (
    <main>
      <Panel>
        <ListContainer
          cardAdded={props.cardAdded}
          cards={todoList}
          showForm={true}
          name="Todo"
        />
      </Panel>
      <Panel>
        <ListContainer
          cardAdded={props.cardAdded}
          cards={doingList}
          showForm={true}
          name="Doing"
        />
      </Panel>

      <Panel>
        <ListContainer
          cardAdded={props.cardAdded}
          cards={doneList}
          showForm={true}
          name="Done"
        />
      </Panel>
    </main>
  );
}
