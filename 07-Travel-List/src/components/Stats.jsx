export function Stats({ itemsObj }) {
  if (!itemsObj.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  const numItems = itemsObj.length;
  const numPacked = itemsObj.filter((item) => item.packed).length;
  const percentPacked = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You packed everything! Ready to go ✈️"
          : `You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percentPacked})%`}
      </em>
    </footer>
  );
}
