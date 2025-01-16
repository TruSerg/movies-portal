import { FC, ReactNode } from "react";
import { Modal } from "@mantine/core";

interface CustomModalProps {
  children: ReactNode;
  title: string;
  className?: string;
  opened: boolean;
  handleClose: () => void;
}
const CustomModal: FC<CustomModalProps> = ({
  children,
  title,
  className,
  opened,
  handleClose,
}) => {
  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title={title}
      size="xs"
      centered
      className={className}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
