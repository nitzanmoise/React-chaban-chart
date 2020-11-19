import React, { useState, useEffect } from "react";
import { get, post } from "./modules/rest";
import "./App.css";
import Main from "./components/Main";

function App() {
  const [cards, setCards] = useState([]);

  function cardAdded(task) {
    console.log(task);
    const payload = {
      task,
      highlight: false,
      list: "todo",
    };
    post(payload, cards, setCards);
  }

  useEffect(() => {
    get(setCards);
  }, []);

  const addCard = () => {
    setCards(
      cards.concat({
        task: "Learn Angular",
        list: "todo",
        highlight: false,
        _id: Math.random(),
      })
    );
  };
  return (
    <>
      <button onClick={addCard}>Add card</button>
      <div className="App">
        <Nav />
        <Main cardAdded={cardAdded} cards={cards} />
      </div>
    </>
  );
}

function Nav() {
  const [open, setOpen] = useState();
  const [items, setItems] = useState(["hi", "mom"]);
  function addItem() {
    // Create a copy array
    const nextItems = items.concat("Dammie");
    setItems(nextItems);
  }
  function toggeleNav() {
    setOpen(!open);
  }
  return (
    <nav className={open ? "open Nav" : "Nav"}>
      <h2>Hi I am nav</h2>
      {items.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
      <button onClick={toggeleNav}>Click Me</button>
      <button onClick={addItem}>Add me</button>
    </nav>
  );
}

export default App;
