import { FC } from "react";
import { useLocation } from "react-router-dom";
import { Image } from "@mantine/core";
import { Box } from "@mantine/core";

import Heading from "../Heading";
import ErrorImage from "../../static/img/error.png";
import CustomLink from "../CustomLink";

interface ErrorComponentProps {
  error: string;
}

const ErrorComponent: FC<ErrorComponentProps> = ({ error }) => {
  const { pathname } = useLocation();

  return (
    <Box className="flex min-h-[80vh] flex-col items-center justify-center">
      <Image src={ErrorImage} width="656" height="51" alt="Error" />
      <Box className="text-7xl md:text-6xl sm:text-5xl">
        <span className="font-vt323">ERROR</span>
      </Box>

      <Image src={ErrorImage} width="656" height="51" alt="Error" />

      <Box className="w-full max-w-[656px] p-5 text-center lg:p-4 sm:p-2">
        <Heading
          tag="h2"
          className="mb-4 text-xl font-semibold text-black sm:text-lg"
          text={`${error!}`}
        />

        {pathname !== "/" ? <CustomLink href="/" text="На главную" /> : null}
      </Box>
    </Box>
  );
};

export default ErrorComponent;
