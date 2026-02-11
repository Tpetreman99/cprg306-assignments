import NewItem from "./NewItem";
import NavLinks from "../components/nav";

export default function Page() {
  return (
    <main style={{ padding: "1.5rem" }}>
      <NavLinks/>
      <h1 className="page-headers">Week 5: Basic Interactivity</h1>
      <NewItem/>
    </main>
  )
}