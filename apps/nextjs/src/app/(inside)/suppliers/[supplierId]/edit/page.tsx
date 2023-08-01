import type { NextPage } from "next";

import { EditSupplierForm } from "~/components/supplier";

const Page: NextPage<{ params: { id: string } }> = ({ params: { id } }) => {
  return (
    <div>
      <h1>Supplier Edit Page</h1>
      <div>
        <EditSupplierForm id={id} />
      </div>
    </div>
  );
};

export default Page;
