import Link from "next/link";

export default function StudentInfo() {
  return (
    <section>
      <h2>Name: Tanner Petreman</h2>
      <Link href="https://github.com/Tpetreman99/cprg306-assignments" className="github-link">
      Click here to go to the GitHub repo!
      </Link>
    </section>
  );
}

