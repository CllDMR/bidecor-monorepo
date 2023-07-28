import Link from "next/link";

import { ProductList } from "~/components/product";

const Page = () => {
  return (
    <div>
      <div className="flex items-center px-4 py-6">
        <h1 className="flex-1">Products Page</h1>
        <Link className="btn btn-secondary" href="/products/create">
          Create new Product
        </Link>
      </div>

      <div>
        <ProductList />
      </div>
    </div>
  );
};

export default Page;
