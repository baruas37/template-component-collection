import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/preview/search/search001">Search 001</Link>
        </li>
        <li></li>
      </ul>
    </main>
  );
}
