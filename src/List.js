export default function List({ itemObj, itemsArr, setItemsArr }) {
  function handleCheck(e, id) {
    const updatedItemPacked = itemsArr.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !e.target.defaultChecked };
      }
      return item;
    });
    setItemsArr(updatedItemPacked);
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
        defaultChecked={itemObj.packed}
        onClick={(e) => {
          handleCheck(e, itemObj.id);
        }}
      />
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.itemQuantity} {itemObj.itemDescription}
      </span>
      <button onClick={removeItem}>❌</button>
    </li>
  );
}
