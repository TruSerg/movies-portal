import { ChangeEvent, FC } from "react";
import { Input } from "@mantine/core";

interface BasicInputProps {
  searchValue: string;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const BasicInput: FC<BasicInputProps> = ({
  searchValue,
  placeholder,
  handleChange,
}) => {
  return (
    <Input
      value={searchValue}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default BasicInput;
