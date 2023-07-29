import type { NextPage } from "next";

import { EditProductForm } from "~/components/product";

const Page: NextPage<{ params: { id: string } }> = ({ params: { id } }) => {
  return (
    <div>
      <h1>Product Edit Page</h1>
      <div>
        <EditProductForm id={id} />
      </div>
    </div>
  );
};

export default Page;
