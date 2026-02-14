"use client"
import { useState } from "react"

export default function NewItem () {

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce")

  function handleSubmit (event) {
    event.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);

    alert(
      `Added: ${name}, quantity: ${quantity}, category: ${category}.`
    );
    setName("");
    setQuantity(1);
    setCategory("produce")
  }

  return (
    <form 
    onSubmit={handleSubmit}
    className="max-w-9/12 mx-auto mt-10 bg-gray-100 rounded-lg shadow-md border border-gray-300">
      <div className="p-6 space-y-5">
      <div className="flex space-x-6">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Item name"
        className="w-full p-2 rounded-md border border-gray-400 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        value={quantity}
        min={1}
        max={99}
        placeholder="Quantity"
        onChange={(e) => setQuantity(e.target.value)}
        className="w-full p-2 rounded-md border border-gray-400 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="w-full p-2 rounded-md border border-gray-400 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">

      <option value="produce">Produce</option>
      <option value="dairy">Dairy</option>
      <option value="bakery">Bakery</option>
      <option value="meat">Meat</option>
      <option value="frozen foods">Frozen Foods</option>
      <option value="canned goods">Canned Goods</option>
      <option value="dry goods">Dry Goods</option>
      <option value="beverages">Beverages</option>
      <option value="snacks">Snacks</option>
      <option value="household">Household</option>
      <option value="other">Other</option>
    </select>
    </div> 
    
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-md  duration-300 hover:-translate-y-1 hover:shadow-lg transition text-2xl">
        +
      </button>
      </div>
    </form>
    
  )
}