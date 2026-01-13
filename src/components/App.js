import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import PackingLists from "./PackingLists";
import Stats from "./Stats";

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
      <Stats itemsArr={itemsArr} />
    </div>
  );
}

export default App;
