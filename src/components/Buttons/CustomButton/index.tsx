import { FC, ReactNode } from "react";
import { Button, MantineRadius } from "@mantine/core";

interface CustomButtonProps {
  form?: string;
  type?: "button" | "submit" | "reset" | undefined;
  color?: string;
  variant?: string;
  radius?: MantineRadius;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  handleClick?: () => void;
}

const CustomButton: FC<CustomButtonProps> = ({
  form,
  type,
  color,
  variant,
  radius,
  disabled,
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
      radius={radius}
      disabled={disabled}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
