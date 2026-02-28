export default function Item({name, quantity, category}) {
  return (
    <li className= "flex bg-white border border-gray-200 rounded-lg p-4 shadow-sm justify-between items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ">
      <div>
        <p className="text-lg font-bold text-gray-900 capitalize">{name}</p>
        <p className="text-sm text-gray-500 capitalize">Category: {category}</p>
      </div>
      <span className="bg-blue-100 text-blue-800 text-sm font-medium p-2 rounded-full">
        Qty: {quantity}
      </span>
    </li>
  )
};

