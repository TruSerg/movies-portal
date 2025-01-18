import { ChangeEvent, FC } from "react";
import { Input } from "@mantine/core";

import { useResize } from "../../../hooks";
import { IconSearch } from "@tabler/icons-react";

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
  const { isScreenSm, isScreenLg } = useResize();

  return (
    <Input
      size={isScreenSm ? "xs" : "sm" ? (isScreenLg ? "sm" : "md") : "md"}
      radius="md"
      rightSection={<IconSearch size={14} stroke={1.5} />}
      value={searchValue}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default BasicInput;
