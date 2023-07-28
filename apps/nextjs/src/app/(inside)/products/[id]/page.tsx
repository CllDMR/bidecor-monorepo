import { useRouter } from "next/router";

import { api } from "~/utils/api";

const Page = () => {
  const router = useRouter();
  const id =
    router.query.id && Array.isArray(router.query.id)
      ? router.query.id[0] ?? ""
      : router.query.id ?? "";

  const [product] = api.product.byId.useSuspenseQuery(id);

  if (!product) return <div className="">Product not found with {id} !</div>;

  return (
    <div>
      <h1>Product Page</h1>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              {product.name} - {product.id}
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium, officia temporibus exercitationem ullam hic
              recusandae dolores deserunt, placeat blanditiis sit nam illo
              perspiciatis dicta culpa quidem architecto quaerat odit id.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
