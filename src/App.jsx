import React, { useState } from "react";
import Item from "./components/Item";
import "./App.css";
import ItemPrice from "./components/ItemPrice";
import Form from "./components/Form";
const itemsData = [
  { id: 1, price: 23, name: "Nirma" },
  { id: 2, price: 33, name: "Surfexel" },
  { id: 3, price: 43, name: "Tide" },
  { id: 4, price: 50, name: "Ghadhi" },
];

function App() {
  const [items, setItems] = useState(itemsData);

  function clickEvent(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              name:
                item.name === "Popcorn"
                  ? itemsData.find((it) => it.id === id).name
                  : "Popcorn",
            }
          : item
      )
    );
  }

  return (
    <>
      {Form()}

      {items.map((item) => (
        <div key={item.id}>
          <Item id={item.id} name={item.name} />
          <ItemPrice id={item.id} price={item.price} />
          <button onClick={() => clickEvent(item.id)}>Change Name</button>
        </div>
      ))}
    </>
  );
}

export default App;
