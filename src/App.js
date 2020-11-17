import { useState } from "react";
import "./App.css";
import Main from "./components/Main";

function App() {
  const [cards, setCards] = useState([
    {
      task: "clean room",
      list: "todo",
      highlight: true,
    },
    {
      task: "Learn Vue",
      list: "doing",
      highlight: true,
    },
    {
      task: "Learn React",
      list: "done",
      highlight: true,
    },
  ]);
  const addCard = () => {
    setCards(
      cards.concat({
        task: "Learn Angular",
        list: "todo",
        highlight: false,
      })
    );
  };
  return (
    <>
      <button onClick={addCard}>Add card</button>
      <div className="App">
        <Nav />
        <Main cards={cards} />
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
