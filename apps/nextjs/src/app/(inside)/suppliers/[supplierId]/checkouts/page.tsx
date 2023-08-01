import type { NextPage } from "next";
import Link from "next/link";

import { SupplierCheckoutList } from "~/components/supplier-checkout";

const Page: NextPage<{ params: { supplierId: string } }> = ({
  params: { supplierId },
}) => {
  return (
    <div>
      <div className="flex items-center px-4 py-6">
        <h1 className="flex-1">SupplierCheckouts Page</h1>
        <Link
          className="btn btn-secondary"
          href={`/suppliers/${supplierId}/checkouts/create`}
        >
          Create new SupplierCheckout
        </Link>
      </div>

      <div>
        <SupplierCheckoutList supplierId={supplierId} />
      </div>
    </div>
  );
};

export default Page;
