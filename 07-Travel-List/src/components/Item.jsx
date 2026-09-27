export default function Item({ itemObj, onDeleteItemFunc, onToggleItemFunc }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemObj.packed}
        onChange={() => onToggleItemFunc(itemObj.id)}
      />
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button
        onClick={() => {
          onDeleteItemFunc(itemObj.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
