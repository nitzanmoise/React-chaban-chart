import React from "react";
import Card from "./Card";
import AddCardForm from "./AddCardForm";

export default function ListContainer(props) {
  const form = props.showForm ? (
    <AddCardForm cardAdded={props.cardAdded} />
  ) : (
    ""
  );
  return (
    <section>
      <h1>{props.name}</h1>
      {props.cards.map((card) => {
        return <Card key={card._id} {...card} />;
      })}
      {form}
    </section>
  );
}
