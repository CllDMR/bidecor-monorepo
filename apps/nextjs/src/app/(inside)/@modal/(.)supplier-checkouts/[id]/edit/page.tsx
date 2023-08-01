import type { FC } from "react";

import { Modal } from "~/components/modal";
import { EditSupplierCheckoutForm } from "~/components/supplier-checkout";

const ModalPage: FC<{ params: { id: string; supplierId: string } }> = ({
  params: { id, supplierId },
}) => {
  return (
    <Modal>
      <EditSupplierCheckoutForm id={id} supplierId={supplierId} />
    </Modal>
  );
};

export default ModalPage;
