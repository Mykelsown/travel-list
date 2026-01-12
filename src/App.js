import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "tootbrush", quantity: 1, packed: true },
// ];

function App() {
  const [itemsArr, setItemsArr] = useState([]);
  return (
    <div className="app">
      <Header />
      <Form itemsArr={itemsArr} setItemsArr={setItemsArr} />
      <PackingLists itemsArr={itemsArr} setItemsArr={setItemsArr} />
      <Stats />
    </div>
  );
}

function Header() {
  return <h1>🌴Far Away👜</h1>;
}

function Form({ itemsArr, setItemsArr }) {
  const [itemDescription, setItemDescription] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);

  const item = { itemDescription, itemQuantity, id: Date.now(), packed: false };

  function addItemsToList(e) {
    e.preventDefault();

    setItemsArr(() => [...itemsArr, item]);
    setItemDescription("");
    setItemQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={addItemsToList}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={itemQuantity}
        onChange={(e) => setItemQuantity(Number(e.target.value))}
      >
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

function PackingLists({ itemsArr, setItemsArr }) {
  const [sort, setSort] = useState("sbio");
  let sortedItems;

  function clearList(e) {
    e.preventDefault();
    setItemsArr([]);
  }

  function sortItems() {
    if (sort === "sbio") {
      sortItems = itemsArr;
    }

    if (sort === "sbci") {
      sortItems = itemsArr.sort((a, b) => a.packed.localeCompare(b.packed));
    }

    if (sort === "sbn") {
      sortItems = itemsArr.sort((a, b) =>
        a.itemDescription.localeCompare(b.itemDescription)
      );
    }
  }
  sortItems();

  return (
    <div className="list">
      <ul>
        {sortItems.map((item) => (
          <List
            itemObj={item}
            itemsArr={itemsArr}
            setItemsArr={setItemsArr}
            key={item.id}
          />
        ))}
      </ul>

      <form className="actions" onSubmit={clearList}>
        <select
          id="orderBy"
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
          }}
        >
          <option disabled>Sort by:</option>
          <option value="sbio">input order</option>
          <option value="sbci">checked items</option>
          <option value="sbn">items name</option>
        </select>
        <button>Clear List</button>
      </form>
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

// function Filter({ itemsArr }) {

//   return (

//   );
// }

function Stats() {
  return (
    <footer className="stats">
      <em>iuewbvciubceiubc</em>
    </footer>
  );
}

export default App;
