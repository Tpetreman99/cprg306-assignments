"use client";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import itemsArray from "./items.json";
import { useState } from "react";
import NavLinks from "../../components/nav";
import MealIdeas from "./MealIdeas";
import { useUserAuth } from "../../contexts/AuthContext";

export default function Page() {
  const [items, setItems] = useState(itemsArray);
  const [selectItemName, setSelectItemName] = useState("");
  const { user } = useUserAuth();

  if (!user) {
    return <p>Please log in to view your shopping list.</p>;
  }

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleItemSelect(item) {
    const itemName = item.name.split(",")[0].trim();
    setSelectItemName(itemName);
  }

  return (
    <main style={{ padding: "1.5rem" }}>
      <NavLinks />
      <h1 className="page-headers">Shopping list with meal ideas</h1>

      <div className="flex flex-col md:flex-row gap-8 pt-6 items-start">
        <div className="w-full md:w-1/2">
          <NewItem onAddItem={handleAddItem} />

          <div className="pt-6">
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <MealIdeas ingredient={selectItemName} />
        </div>
      </div>
    </main>
  );
}