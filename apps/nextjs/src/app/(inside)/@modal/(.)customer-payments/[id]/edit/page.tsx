import type { FC } from "react";

import { EditCustomerPaymentForm } from "~/components/customer-payment";
import { Modal } from "~/components/modal";

const ModalPage: FC<{ params: { id: string; customerId: string } }> = ({
  params: { id, customerId },
}) => {
  return (
    <Modal>
      <EditCustomerPaymentForm id={id} customerId={customerId} />
    </Modal>
  );
};

export default ModalPage;
