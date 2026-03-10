"use client";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import itemsArray from "./items.json";
import { useState } from "react";
import NavLinks from "../components/nav";
import MealIdeas from "./MealIdeas";

export default function Page() {
  const [items, setItems] = useState(itemsArray);
  const [selectItemName, setSelectItemName] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleItemSelect(item) {
    const itemName = item.name.split(",")[0].trim();
    selectItemName(itemName);
  }

  return (
    <main style={{ padding: "1.5rem" }}>
      <NavLinks/>
      <h1 className="page-headers">Week 8: API integration | Meal suggestions</h1>
      <NewItem onAddItem={handleAddItem}/>
      <div className="pt-6">
        <ItemList items={items}
          onItemSelect={handleItemSelect}/>
      </div>

      <MealIdeas ingredient={selectItemName}/>
    </main>
  );
}