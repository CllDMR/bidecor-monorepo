import type { FC } from "react";

import { EditCustomerCheckoutForm } from "~/components/customer-checkout";
import { Modal } from "~/components/modal";

const ModalPage: FC<{ params: { id: string; customerId: string } }> = ({
  params: { id, customerId },
}) => {
  return (
    <Modal>
      <EditCustomerCheckoutForm id={id} customerId={customerId} />
    </Modal>
  );
};

export default ModalPage;
