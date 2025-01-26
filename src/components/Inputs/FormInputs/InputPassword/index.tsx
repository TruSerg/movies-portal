import { ChangeEvent, FC } from "react";
import { Input, PasswordInput } from "@mantine/core";

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
  handleFocus: () => void;
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
  handleFocus,
}) => {
  const { isScreenSm, isScreenLg } = useResize();

  return (
    <Input.Wrapper label={label}>
      <PasswordInput
        value={value}
        name={name}
        radius="md"
        size={isScreenSm ? "xs" : "sm" ? (isScreenLg ? "sm" : "md") : "md"}
        type={type}
        error={error}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </Input.Wrapper>
  );
};

export default InputPassword;
