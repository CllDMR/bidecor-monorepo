import type { NextPage } from "next";

import { EditCustomerPaymentForm } from "~/components/customer-payment";

const Page: NextPage<{ params: { id: string; customerId: string } }> = ({
  params: { id, customerId },
}) => {
  return (
    <div>
      <h1>CustomerPayment Edit Page</h1>
      <div>
        <EditCustomerPaymentForm id={id} customerId={customerId} />
      </div>
    </div>
  );
};

export default Page;
