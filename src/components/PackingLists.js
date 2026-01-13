import { useState } from "react";
import List from "./List";

export default function PackingLists({ itemsArr, setItemsArr }) {
  const [sort, setSort] = useState("sbio");
  let sortedItems;

  function clearList(e) {
    e.preventDefault();
    setItemsArr([]);
  }

  function sortItems() {
    if (sort === "sbio") {
      sortedItems = itemsArr.slice();
    }

    if (sort === "sbci") {
      sortedItems = itemsArr.slice().sort((a, b) => b.packed - a.packed);
    }

    if (sort === "sbn") {
      sortedItems = itemsArr
        .slice()
        .sort((a, b) => a.itemDescription.localeCompare(b.itemDescription));
    }
  }
  sortItems();

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) =>
          item.itemDescription !== "" ? (
            <List
              itemObj={item}
              itemsArr={itemsArr}
              setItemsArr={setItemsArr}
              key={item.id}
            />
          ) : (
            ""
          )
        )}
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
