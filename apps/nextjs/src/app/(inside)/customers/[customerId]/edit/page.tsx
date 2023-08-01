import type { NextPage } from "next";

import { EditProductForm } from "~/components/product";

const Page: NextPage<{ params: { customerId: string } }> = ({
  params: { customerId },
}) => {
  return (
    <div>
      <h1>Product Edit Page</h1>
      <div>
        <EditProductForm id={customerId} />
      </div>
    </div>
  );
};

export default Page;
