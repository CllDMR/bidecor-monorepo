import type { NextPage } from "next";

import { CreateSupplierPaymentForm } from "~/components/supplier-payment";

const Page: NextPage<{ params: { supplierId: string } }> = ({
  params: { supplierId },
}) => {
  return (
    <div>
      <h1>SupplierPayment Create Page</h1>
      <div>
        <CreateSupplierPaymentForm supplierId={supplierId} />
      </div>
    </div>
  );
};

export default Page;
