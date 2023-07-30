import type { NextPage } from "next";
import Link from "next/link";

import { SupplierPaymentList } from "~/components/supplier-payment";

const Page: NextPage<{ params: { supplierId: string } }> = ({
  params: { supplierId },
}) => {
  return (
    <div>
      <div className="flex items-center px-4 py-6">
        <h1 className="flex-1">SupplierPayments Page</h1>
        <Link
          className="btn btn-secondary"
          href={`/suppliers/${supplierId}/payments/create`}
        >
          Create new SupplierPayment
        </Link>
      </div>

      <div>
        <SupplierPaymentList supplierId={supplierId} />
      </div>
    </div>
  );
};

export default Page;
