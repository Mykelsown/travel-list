import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "tootbrush", quantity: 1, packed: true },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <PackingLists />
      <Stats />
    </div>
  );
}

function Header() {
  return <h1>🌴Far Away👜</h1>;
}

function Form() {
  const [iteminput, setItemInput] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);

  function addItemsToList(e) {
    e.preventDefault();
  }

  return (
    <form className="add-form" onSubmit={addItemsToList}>
      <h3>What do you need for your 😍 trip?</h3>
      <select onChange={(e) => setItemQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => (
          <option value={i + 1} key={i}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={iteminput}
        onChange={(e) => setItemInput(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingLists() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <List itemObj={item} key={item.id} />
        ))}
      </ul>
      <Filter />
    </div>
  );
}

function List({ itemObj }) {
  return (
    <li>
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Filter() {
  function clearList(e) {
    e.preventDefault();
  }

  return (
    <form className="actions" onSubmit={clearList}>
      <select id="orderBy">
        <option value={"sort by input value"}>Sort by input order</option>
        <option value={"sort by input value"}>Sort by checked items</option>
        <option value={"sort by input value"}>Sort by name</option>
      </select>
      <button>Clear List</button>
    </form>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>iuewbvciubceiubc</em>
    </footer>
  );
}

export default App;
