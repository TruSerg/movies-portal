import { FC } from "react";
import { Rating } from "@mantine/core";

interface ControlledRateComponentProps {
  value: number;
  handleChange: (value: number) => void;
}
const ControlledRateComponent: FC<ControlledRateComponentProps> = ({
  value,
  handleChange,
}) => {
  return <Rating value={value} onChange={handleChange} size="lg" count={10} />;
};

export default ControlledRateComponent;
