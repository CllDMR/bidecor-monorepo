import type { NextPage } from "next";

import { EditSupplierCheckoutForm } from "~/components/supplier-checkout";

const Page: NextPage<{ params: { id: string; supplierId: string } }> = ({
  params: { id, supplierId },
}) => {
  return (
    <div>
      <h1>SupplierCheckout Edit Page</h1>
      <div>
        <EditSupplierCheckoutForm id={id} supplierId={supplierId} />
      </div>
    </div>
  );
};

export default Page;
