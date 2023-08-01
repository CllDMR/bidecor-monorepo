import type { NextPage } from "next";

import { EditSupplierPaymentForm } from "~/components/supplier-payment";

const Page: NextPage<{ params: { id: string; supplierId: string } }> = ({
  params: { id, supplierId },
}) => {
  return (
    <div>
      <h1>SupplierPayment Edit Page</h1>
      <div>
        <EditSupplierPaymentForm id={id} supplierId={supplierId} />
      </div>
    </div>
  );
};

export default Page;
