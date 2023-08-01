import type { FC } from "react";

import { EditCustomerForm } from "~/components/customer";
import { Modal } from "~/components/modal";

const ModalPage: FC<{ params: { id: string } }> = ({ params: { id } }) => {
  return (
    <Modal>
      <EditCustomerForm id={id} />
    </Modal>
  );
};

export default ModalPage;
