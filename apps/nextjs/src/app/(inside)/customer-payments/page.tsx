import Link from "next/link";

import { CustomerPaymentList } from "~/components/customer-payment";

const Page = () => {
  return (
    <div>
      <div className="flex items-center px-4 py-6">
        <h1 className="flex-1">CustomerPayments Page</h1>
        <Link className="btn btn-secondary" href="/customer-payments/create">
          Create new CustomerPayment
        </Link>
      </div>

      <div>
        <CustomerPaymentList />
      </div>
    </div>
  );
};

export default Page;
