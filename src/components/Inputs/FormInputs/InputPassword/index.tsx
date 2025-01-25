import { ChangeEvent, FC } from "react";
import { Input, PasswordInput } from "@mantine/core";

import { useResize } from "../../../../hooks";

interface FormInputProps {
  value: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputPassword: FC<FormInputProps> = ({
  value,
  name,
  label,
  type,
  placeholder,
  handleChange,
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
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Input.Wrapper>
  );
};

export default InputPassword;
