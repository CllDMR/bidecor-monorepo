import type { FC } from "react";

import { Modal } from "~/components/modal";
import { EditSupplierForm } from "~/components/supplier";

const ModalPage: FC<{ params: { id: string } }> = ({ params: { id } }) => {
  return (
    <Modal>
      <EditSupplierForm id={id} />
    </Modal>
  );
};

export default ModalPage;
