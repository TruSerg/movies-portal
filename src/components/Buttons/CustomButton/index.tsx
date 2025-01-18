import { FC, ReactNode } from "react";
import { Button } from "@mantine/core";

interface CustomButtonProps {
  form?: string;
  type?: string;
  color?: string;
  variant?: string;
  className?: string;
  children: ReactNode;
  handleClick?: () => void;
}

const CustomButton: FC<CustomButtonProps> = ({
  form,
  type,
  color,
  variant,
  className,
  children,
  handleClick,
}) => {
  return (
    <Button
      form={form}
      type={type}
      color={color}
      variant={variant}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
