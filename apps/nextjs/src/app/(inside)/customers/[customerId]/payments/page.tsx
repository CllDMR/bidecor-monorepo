import type { NextPage } from "next";
import Link from "next/link";

import { CustomerPaymentList } from "~/components/customer-payment";

const Page: NextPage<{ params: { customerId: string } }> = ({
  params: { customerId },
}) => {
  return (
    <div>
      <div className="flex items-center px-4 py-6">
        <h1 className="flex-1">CustomerPayments Page</h1>
        <Link
          className="btn btn-secondary"
          href={`/customers/${customerId}/payments/create`}
        >
          Create new CustomerPayment
        </Link>
      </div>

      <div>
        <CustomerPaymentList customerId={customerId} />
      </div>
    </div>
  );
};

export default Page;
