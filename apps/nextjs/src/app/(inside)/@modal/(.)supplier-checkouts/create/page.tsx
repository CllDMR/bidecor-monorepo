import type { NextPage } from "next";

import { Modal } from "~/components/modal";
import { CreateSupplierCheckoutForm } from "~/components/supplier-checkout";

const ModalPage: NextPage<{ params: { supplierId: string } }> = ({
  params: { supplierId },
}) => {
  return (
    <Modal>
      <CreateSupplierCheckoutForm supplierId={supplierId} />
    </Modal>
  );
};

export default ModalPage;
