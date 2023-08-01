"use client";

import type { NextPage } from "next";
import { notFound } from "next/navigation";

import { api } from "~/utils/api";
import { Modal } from "~/components/modal";

const ModalPage: NextPage<{ params: { id: string } }> = ({
  params: { id },
}) => {
  const [customerPayment] = api.customerPayment.byId.useSuspenseQuery(id);

  if (!customerPayment) notFound();

  return (
    <Modal>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{customerPayment.id}</h2>
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
    </Modal>
  );
};

export default ModalPage;
