import { FC, ReactNode } from "react";
import { UnstyledButton } from "@mantine/core";

interface CustomButtonProps {
  text?: string;
  className?: string;
  children: ReactNode;
  handleClick?: () => void;
}

const CustomUnstyledButton: FC<CustomButtonProps> = ({
  text,
  className,
  children,
  handleClick,
}) => {
  return (
    <UnstyledButton onClick={handleClick} className={className}>
      {children ?? text}
    </UnstyledButton>
  );
};

export default CustomUnstyledButton;
