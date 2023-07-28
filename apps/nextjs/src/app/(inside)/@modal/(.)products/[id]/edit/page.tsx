import type { FC } from "react";

import { Modal } from "~/components/modal";
import { EditProductForm } from "~/components/product";

const ModalPage: FC<{ params: { id: string } }> = ({ params: { id } }) => {
  return (
    <Modal>
      <EditProductForm id={id} />
    </Modal>
  );
};

export default ModalPage;
