import { FC, ReactNode } from "react";
import { DateValue, YearPickerInput } from "@mantine/dates";

import { useResize } from "../../../hooks";

interface YearPickerComponentProps {
  rightSection: ReactNode;
  label: string;
  placeholder: string;
  handleChange?: (value: DateValue) => void;
}

const YearPickerComponent: FC<YearPickerComponentProps> = ({
  rightSection,
  label,
  placeholder,
  handleChange,
}) => {
  const { isScreenSm } = useResize();

  return (
    <YearPickerInput
      clearable
      size={isScreenSm ? "sm" : "md"}
      radius="md"
      minDate={new Date("01.01.1895")}
      maxDate={new Date()}
      rightSection={rightSection}
      label={label}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default YearPickerComponent;
