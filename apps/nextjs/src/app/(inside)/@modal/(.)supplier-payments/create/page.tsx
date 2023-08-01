import type { NextPage } from "next";

import { Modal } from "~/components/modal";
import { CreateSupplierPaymentForm } from "~/components/supplier-payment";

const ModalPage: NextPage<{ params: { supplierId: string } }> = ({
  params: { supplierId },
}) => {
  return (
    <Modal>
      <CreateSupplierPaymentForm supplierId={supplierId} />
    </Modal>
  );
};

export default ModalPage;
