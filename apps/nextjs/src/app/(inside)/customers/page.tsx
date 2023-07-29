import Link from "next/link";

import { CustomerList } from "~/components/customer";

const Page = () => {
  return (
    <div>
      <div className="flex items-center px-4 py-6">
        <h1 className="flex-1">Customers Page</h1>
        <Link className="btn btn-secondary" href="/customers/create">
          Create new Customer
        </Link>
      </div>

      <div>
        <CustomerList />
      </div>
    </div>
  );
};

export default Page;
