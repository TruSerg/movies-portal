import { ChangeEvent, FC } from "react";
import { Input } from "@mantine/core";

import { useResize } from "../../../../hooks";

interface InputTextProps {
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

const InputText: FC<InputTextProps> = ({
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
      <Input
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

export default InputText;
