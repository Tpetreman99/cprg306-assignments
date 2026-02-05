import StudentInfo from "./StudentInfo";
import NavLinks from "../components/nav";

export default function Page() {
  return (
    <main style={{ padding: "1.5rem" }}>
      <NavLinks />
      <h1 className="page-headers">Week-2: Introduction</h1>
      <StudentInfo />
    </main>
  );
}