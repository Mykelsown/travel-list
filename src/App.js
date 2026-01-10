const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  return (
    <div>
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
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
    </div>
  );
}

function PackingLists() {
  return (
    <div className="list">
      <ul className="">
        <List />
      </ul>
      <Filter />
    </div>
  );
}

function List() {
  return (
    <>
      <li></li>
    </>
  );
}

function Filter() {
  return (
    <form className="actions">
      <select id="orderBy">
        <option value={"sort by input value"}>Sort by input order</option>
        <option value={"sort by input value"}>Sort by checked items</option>
        <option value={"sort by input value"}>Sort by name</option>
      </select>
      <button>Clear List</button>
    </form>
  );
}

function Stats() {}

export default App;
