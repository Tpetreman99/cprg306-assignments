"use client";
import Item from "./item";
import { useState } from "react";


export default function ItemList({items}) {
  const [sortBy, setSortBy] = useState("name");


  const sortedItems = items.slice().sort((a, b) => {
    if (sortBy === "category"){
      return String(a.category).localeCompare(String(b.category));
    }
    return String(a.name).localeCompare(String(b.name));
  });

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <button type="button"
        onClick={() => setSortBy("name")}
        className={`rounded px-2 text-sm ${
          sortBy === "name" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
        }`}>
        Sort by name
        </button>
        <button type="button"
        onClick={() => setSortBy("category")}
        className={`rounded px-2 text-sm ${
          sortBy === "category" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
        }`}>
          Sort by category
          </button>
      </div>

      <ul className="grid grid-cols-3 gap-4">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  )
}
