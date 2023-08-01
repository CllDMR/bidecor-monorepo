import type { NextPage } from "next";

import { CreateCustomerForm } from "~/components/customer";

const Page: NextPage = () => {
  return (
    <div>
      <h1>Customer Create Page</h1>
      <div>
        <CreateCustomerForm />
      </div>
    </div>
  );
};

export default Page;
