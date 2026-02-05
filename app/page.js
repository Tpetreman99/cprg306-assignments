import Link from "next/link";
import NavLinks from "./components/nav";

export default function Page() {
  return (
    <main style={{ padding: "1.5rem" }}>
      <h1 className="page-headers">CPRG 306: Web Development 2 - Assignments</h1>
      <NavLinks />
    </main>
  );
}