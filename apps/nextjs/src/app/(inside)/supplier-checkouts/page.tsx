import Link from "next/link";

import { SupplierCheckoutList } from "~/components/supplier-checkout";

const Page = () => {
  return (
    <div>
      <div className="flex items-center px-4 py-6">
        <h1 className="flex-1">SupplierCheckouts Page</h1>
        <Link className="btn btn-secondary" href="/supplier-checkouts/create">
          Create new SupplierCheckout
        </Link>
      </div>

      <div>
        <SupplierCheckoutList />
      </div>
    </div>
  );
};

export default Page;
