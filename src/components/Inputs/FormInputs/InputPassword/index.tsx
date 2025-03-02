import { ChangeEvent, FC } from "react";
import { PasswordInput } from "@mantine/core";

import { useResize } from "../../../../hooks";

interface FormInputProps {
  value: string;
  name: string;
  label: string;
  type: string;
  error: string;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
}

const InputPassword: FC<FormInputProps> = ({
  value,
  name,
  label,
  type,
  error,
  placeholder,
  handleChange,
  handleBlur,
}) => {
  const { isScreenSm } = useResize();

  return (
    <PasswordInput
      label={label}
      value={value}
      name={name}
      radius="md"
      size={isScreenSm ? "sm" : "md"}
      type={type}
      error={error}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default InputPassword;
