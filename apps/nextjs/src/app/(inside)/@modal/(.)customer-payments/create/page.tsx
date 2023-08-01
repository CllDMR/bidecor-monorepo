import type { NextPage } from "next";

import { CreateCustomerPaymentForm } from "~/components/customer-payment";
import { Modal } from "~/components/modal";

const ModalPage: NextPage<{ params: { id: string } }> = ({
  params: { id },
}) => {
  return (
    <Modal>
      <CreateCustomerPaymentForm customerId={id} />
    </Modal>
  );
};

export default ModalPage;
