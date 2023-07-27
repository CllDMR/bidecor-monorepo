import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>Suppliers Page</h1>
      <div>
        <ul>
          <li>
            <Link href="/suppliers/1">To Supplier 1</Link>
          </li>
          <li>
            <Link href="/suppliers/1/edit">To Supplier 1 Edit</Link>
          </li>
          <li>
            <Link href="/suppliers/create">To Supplier Create</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
