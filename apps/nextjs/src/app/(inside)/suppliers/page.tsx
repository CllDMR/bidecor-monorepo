import Link from "next/link";

import { SupplierList } from "~/components/supplier";

const Page = () => {
  return (
    <div>
      <div className="flex items-center px-4 py-6">
        <h1 className="flex-1">Suppliers Page</h1>
        <Link className="btn btn-secondary" href="/suppliers/create">
          Create new Supplier
        </Link>
      </div>

      <div>
        <SupplierList />
      </div>
    </div>
  );
};

export default Page;
