"use client";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import itemsArray from "./items.json";
import { useState } from "react";
import NavLinks from "../components/nav";

export default function Page() {
  const [items, setItems] = useState(itemsArray);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main style={{ padding: "1.5rem" }}>
      <NavLinks/>
      <h1 className="page-headers">Week 6: Sortable Shopping List</h1>
      <NewItem onAddItem={handleAddItem}/>
      <div className="pt-6">
        <ItemList items={items}/>
      </div>
    </main>
  );
}