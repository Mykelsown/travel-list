import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

export default function Form({ itemsArr, setItemsArr }) {
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
      <h3>What do you need for your trip? Pack with us 😜</h3>
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
      <button disabled= { itemDescription === "" ? true: false}>Add</button>
    </form>
  );
}
