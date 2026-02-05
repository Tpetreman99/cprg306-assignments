import ItemList from "./item-list"
import NavLinks from "../components/nav"

export default function Page() {
  return (
    <main style={{ padding: "1.5rem" }}>
      <NavLinks />
      <h1 className="page-headers">Week 4: Shopping List</h1>
      <ItemList />
    </main>
  )
}