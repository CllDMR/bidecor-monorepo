import type { NextPage } from "next";

import { CreateCustomerCheckoutForm } from "~/components/customer-checkout";
import { Modal } from "~/components/modal";

const ModalPage: NextPage<{ params: { id: string } }> = ({
  params: { id },
}) => {
  return (
    <Modal>
      <CreateCustomerCheckoutForm customerId={id} />
    </Modal>
  );
};

export default ModalPage;
