import { Box } from "@mantine/core";

import LoadingPagesComponent from "../../components/LoadingPagesComponent";
import CustomButton from "../../components/Buttons/CustomButton";
import Heading from "../../components/Heading";

const ErrorBoundaryPage = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gray-100 pl-[15px] pr-[15px]">
      <Box className="flex flex-col gap-5 sm:gap-3">
        <LoadingPagesComponent errorText="ERROR" />

        <Heading
          tag="h2"
          className="text-center text-xl font-semibold text-black dark:text-gray-300 sm:text-lg"
          text="Something went wrong!"
        />

        <CustomButton
          className="m-auto w-full max-w-[100px] whitespace-nowrap rounded-lg bg-purple-500 p-[10px] text-base font-bold text-white transition delay-150 ease-in-out hover:bg-purple-600 dark:bg-purple-600 dark:text-gray-300 dark:hover:bg-purple-700 sm:p-2 sm:text-sm"
          handleClick={() => window.location.reload()}
        >
          Retry
        </CustomButton>
      </Box>
    </main>
  );
};

export default ErrorBoundaryPage;
