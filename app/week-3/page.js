import GroceryItemList from "./GroceryItemList";
import NavLinks from "../components/nav";

export default function Page() {
  return (
    <div>
      <main style={{ padding: "1.5rem" }}>
        <NavLinks />
        <h1 className="page-headers">Week 3: Shopping List</h1>
        <GroceryItemList />
      </main>
    </div>
  );
}