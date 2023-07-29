import type { NextPage } from "next";

import { CreateCustomerCheckoutForm } from "~/components/customer-checkout";

const Page: NextPage<{ params: { customerId: string } }> = ({
  params: { customerId },
}) => {
  return (
    <div>
      <h1>CustomerCheckout Create Page</h1>
      <div>
        <CreateCustomerCheckoutForm customerId={customerId} />
      </div>
    </div>
  );
};

export default Page;
