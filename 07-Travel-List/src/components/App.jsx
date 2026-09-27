import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import { Stats } from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((currentItems) => [...currentItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleReset() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all the items?",
    );
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onReset={handleReset}
      />
      <Stats itemsObj={items} />
    </div>
  );
}

export default App;
