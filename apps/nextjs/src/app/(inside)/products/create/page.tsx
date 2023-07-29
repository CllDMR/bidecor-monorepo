import type { NextPage } from "next";

import { CreateProductForm } from "~/components/product";

const Page: NextPage = () => {
  return (
    <div>
      <h1>Product Create Page</h1>
      <div>
        <CreateProductForm />
      </div>
    </div>
  );
};

export default Page;
