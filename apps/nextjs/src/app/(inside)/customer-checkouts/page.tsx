import Link from "next/link";

import { CustomerCheckoutList } from "~/components/customer-checkout";

const Page = () => {
  return (
    <div>
      <div className="flex items-center px-4 py-6">
        <h1 className="flex-1">CustomerCheckouts Page</h1>
        <Link className="btn btn-secondary" href="/customer-checkouts/create">
          Create new CustomerCheckout
        </Link>
      </div>

      <div>
        <CustomerCheckoutList />
      </div>
    </div>
  );
};

export default Page;
