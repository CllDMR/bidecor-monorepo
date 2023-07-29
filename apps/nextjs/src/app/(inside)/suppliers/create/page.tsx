import type { NextPage } from "next";

import { CreateSupplierForm } from "~/components/supplier";

const Page: NextPage = () => {
  return (
    <div>
      <h1>Supplier Create Page</h1>
      <div>
        <CreateSupplierForm />
      </div>
    </div>
  );
};

export default Page;
