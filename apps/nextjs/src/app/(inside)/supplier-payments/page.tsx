import Link from "next/link";

import { SupplierPaymentList } from "~/components/supplier-payment";

const Page = () => {
  return (
    <div>
      <div className="flex items-center px-4 py-6">
        <h1 className="flex-1">SupplierPayments Page</h1>
        <Link className="btn btn-secondary" href="/supplier-payments/create">
          Create new SupplierPayment
        </Link>
      </div>

      <div>
        <SupplierPaymentList />
      </div>
    </div>
  );
};

export default Page;
