import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "tootbrush", quantity: 1, packed: true },
// ];

function App() {
  const [itemsStats, setItemsStats] = useState([]);
  return (
    <div className="app">
      <Header />
      <Form itemsStats={itemsStats} setItemsStats={setItemsStats} />
      <PackingLists itemsStats={itemsStats} setItemsStats={setItemsStats} />
      <Stats />
    </div>
  );
}

function Header() {
  return <h1>🌴Far Away👜</h1>;
}

function Form({ itemsStats, setItemsStats }) {
  const [itemDescription, setItemDescription] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);

  const item = { itemDescription, itemQuantity, id: Date.now() };

  function addItemsToList(e) {
    e.preventDefault();

    setItemsStats(() => [...itemsStats, item]);
    setItemDescription("");
    setItemQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={addItemsToList}> 
      <h3>What do you need for your 😍 trip?</h3>
      <select value={itemQuantity} onChange={(e) => setItemQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => (
          <option value={i + 1} key={i}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingLists({ itemsStats, setItemsStats }) {
  return (
    <div className="list">
      <ul>
        {itemsStats.map((item) => (
          <List
            itemObj={item}
            itemsArr={itemsStats}
            setItemsArr={setItemsStats}
            key={item.id}
          />
        ))}
      </ul>
      <Filter />
    </div>
  );
}

function List({ itemObj, itemsArr, setItemsArr }) {
  const [checked, setChecked] = useState(false);
  function handleCheck(e) {
    setChecked(() => e.target.checked);
  }

  function removeItem() {
    const itemsToDeleteIndex = itemsArr.findIndex(
      (item) => item.id === itemObj.id
    );
    setItemsArr(itemsArr.toSpliced(itemsToDeleteIndex, 1));
  }

  return (
    <li>
      <input
        type="checkbox"
        defaultChecked={checked}
        onClick={(e) => {
          handleCheck(e);
        }}
      />
      <span style={checked ? { textDecoration: "line-through" } : {}}>
        {itemObj.itemQuantity} {itemObj.itemDescription}
      </span>
      <button onClick={removeItem}>❌</button>
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
