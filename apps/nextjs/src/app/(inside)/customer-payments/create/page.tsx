import type { NextPage } from "next";

import { CreateCustomerPaymentForm } from "~/components/customer-payment";

const Page: NextPage<{ params: { customerId: string } }> = ({
  params: { customerId },
}) => {
  return (
    <div>
      <h1>CustomerPayment Create Page</h1>
      <div>
        <CreateCustomerPaymentForm customerId={customerId} />
      </div>
    </div>
  );
};

export default Page;
