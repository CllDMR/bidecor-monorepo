import type { NextPage } from "next";

import { CreateCustomerForm } from "~/components/customer";
import { Modal } from "~/components/modal";

const ModalPage: NextPage = () => {
  return (
    <Modal>
      <CreateCustomerForm />
    </Modal>
  );
};

export default ModalPage;
