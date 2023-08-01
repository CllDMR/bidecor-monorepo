import type { NextPage } from "next";

import { CreateSupplierCheckoutForm } from "~/components/supplier-checkout";

const Page: NextPage<{ params: { supplierId: string } }> = ({
  params: { supplierId },
}) => {
  return (
    <div>
      <h1>SupplierCheckout Create Page</h1>
      <div>
        <CreateSupplierCheckoutForm supplierId={supplierId} />
      </div>
    </div>
  );
};

export default Page;
