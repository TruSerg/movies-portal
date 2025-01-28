import { FC } from "react";

import { Image } from "@mantine/core";
import { Box } from "@mantine/core";

import ErrorImage from "../../static/img/error.png";

interface LoadingPagesComponentProps {
  errorText: string;
}
const LoadingPagesComponent: FC<LoadingPagesComponentProps> = ({
  errorText,
}) => {
  return (
    <Box className="flex flex-col items-center justify-center">
      <Image src={ErrorImage} width="656" height="51" alt="Error" />
      <Box className="text-7xl md:text-6xl sm:text-5xl">
        <span className="font-vt323">{errorText}</span>
      </Box>

      <Image src={ErrorImage} width="656" height="51" alt="Error" />
    </Box>
  );
};

export default LoadingPagesComponent;
