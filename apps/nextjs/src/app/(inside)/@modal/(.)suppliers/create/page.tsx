import type { NextPage } from "next";

import { Modal } from "~/components/modal";
import { CreateSupplierForm } from "~/components/supplier";

const ModalPage: NextPage = () => {
  return (
    <Modal>
      <CreateSupplierForm />
    </Modal>
  );
};

export default ModalPage;
