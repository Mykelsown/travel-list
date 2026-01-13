export default function Stats({ itemsArr }) {
  let numOfPackedItems = itemsArr.slice().filter((item) => item.packed);
  let numOfUnpackedItems = itemsArr.slice().length - numOfPackedItems.length;

  if (itemsArr.slice().length === 0) {
    return (
      <footer className="stats">
        <em>📌Start adding items to your list 🗳</em>
      </footer>
    );
  }

  if (numOfUnpackedItems === 0 && numOfPackedItems.length > 0) {
    return (
      <footer className="stats">
        <em>Yay, you are all packed and ready for the trip 😎. LFG😋</em>
      </footer>
    );
  }

  const getPercentageOfUnpacked = () =>
    (numOfUnpackedItems * 100) / itemsArr.slice().length;

  return (
    <footer className="stats">
      <em>
        You have packed {numOfPackedItems.length} items. You have{" "}
        {itemsArr.slice().length - numOfPackedItems.length} items left(
        {getPercentageOfUnpacked().toFixed(2)}%) unpacked
      </em>
    </footer>
  );
}
