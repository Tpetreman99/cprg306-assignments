function Item({name, quantity, category}) {
  return (
    <li className="flex, justify-around items-center p-3 m-4 bg-blue-400 rounded-md">
      <span className= "">{name}</span>
      <span className= ""> Qty: {quantity}</span>
      <span className= ""> {category}</span>
    </li>
  )
}
export default Item;