import type { NextPage } from "next";

import { EditCustomerCheckoutForm } from "~/components/customer-checkout";

const Page: NextPage<{ params: { id: string; customerId: string } }> = ({
  params: { id, customerId },
}) => {
  return (
    <div>
      <h1>CustomerCheckout Edit Page</h1>
      <div>
        <EditCustomerCheckoutForm id={id} customerId={customerId} />
      </div>
    </div>
  );
};

export default Page;
