function Item({name, quantity, category}) {
  return (
    <li className="flex, justify-around items-center p-3 m-4 bg-blue-400 rounded-md">
      <span>{name}</span>
      <span> Qty: {quantity},</span>
      <span> Category: {category}</span>
    </li>
  )
}
export default Item;