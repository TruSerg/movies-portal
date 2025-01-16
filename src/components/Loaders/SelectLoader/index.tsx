import { FC } from "react";
import { Loader } from "@mantine/core";

interface CustomSelectLoaderProps {
  className?: string;
}

const SelectLoader: FC<CustomSelectLoaderProps> = ({ className }) => {
  return <Loader className={className} size="20" color="#9854f6" />;
};

export default SelectLoader;
