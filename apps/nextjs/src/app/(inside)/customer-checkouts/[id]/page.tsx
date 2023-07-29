"use client";

import type { NextPage } from "next";

import { api } from "~/utils/api";

const Page: NextPage<{ params: { id: string } }> = ({ params: { id } }) => {
  const [customerCheckout] = api.customerCheckout.byId.useSuspenseQuery(id);

  if (!customerCheckout)
    return <div className="">CustomerCheckout not found with {id} !</div>;

  return (
    <div>
      <h1>CustomerCheckout Page</h1>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{customerCheckout.id}</h2>
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
