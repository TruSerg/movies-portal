import { ChangeEvent, FC } from "react";
import { Input } from "@mantine/core";

import { useResize } from "../../../hooks";
import { IconSearch } from "@tabler/icons-react";

interface BasicInputProps {
  className: string;
  searchValue: string;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const BasicInput: FC<BasicInputProps> = ({
  className,
  searchValue,
  placeholder,
  handleChange,
}) => {
  const { isScreenSm, isScreenLg } = useResize();

  return (
    <Input
      className={className}
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
