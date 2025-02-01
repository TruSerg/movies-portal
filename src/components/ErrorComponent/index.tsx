import { FC } from "react";
import { useLocation } from "react-router-dom";
import { Image } from "@mantine/core";
import { Box } from "@mantine/core";

import { ROUTES } from "../../routes/routeNames";

import Heading from "../Heading";
import ErrorImage from "../../static/img/error.png";
import CustomLink from "../CustomLink";

interface ErrorComponentProps {
  error: string;
  errorCode?: string;
}

const ErrorComponent: FC<ErrorComponentProps> = ({ error, errorCode }) => {
  const { pathname } = useLocation();

  return (
    <Box className="flex min-h-[80vh] flex-col items-center justify-center">
      <Image src={ErrorImage} width="656" height="51" alt="Error" />
      <Box className="text-7xl md:text-6xl sm:text-5xl">
        <span className="font-vt323">ERROR {errorCode}</span>
      </Box>

      <Image src={ErrorImage} width="656" height="51" alt="Error" />

      <Box className="w-full max-w-[656px] p-5 text-center lg:p-4 sm:p-2">
        <Heading
          tag="h2"
          className="mb-4 text-xl font-semibold text-black dark:text-gray-300 sm:text-lg"
          text={`${error!}`}
        />

        {pathname !== ROUTES.HOME_PAGE ? (
          <CustomLink
            className="whitespace-nowrap rounded-lg bg-purple-500 p-[10px] text-base font-bold text-white transition delay-150 ease-in-out hover:bg-purple-600 dark:bg-purple-600 dark:text-gray-300 dark:hover:bg-purple-700 sm:p-2 sm:text-sm"
            href={ROUTES.HOME_PAGE}
            text="На главную"
          />
        ) : null}
      </Box>
    </Box>
  );
};

export default ErrorComponent;
