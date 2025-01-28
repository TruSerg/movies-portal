import { ReactNode, FC, Suspense } from "react";
import { withErrorBoundary } from "react-error-boundary";

import { Box } from "@mantine/core";

import SideBar from "../SideBar/SideBar";
import Container from "../Container";
import LoadingPagesComponent from "../LoadingPagesComponent";
import ErrorBoundaryPage from "../../pages/ErrorBoundaryPage";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Box className="flex bg-gray-100 font-inter xl:flex-col">
        <SideBar />

        <Suspense
          fallback={
            <Box className="flex h-screen w-screen items-center justify-center pl-[15px] pr-[15px]">
              <LoadingPagesComponent errorText="LOADING..." />
            </Box>
          }
        >
          {children}
        </Suspense>
      </Box>
    </Container>
  );
};

export default withErrorBoundary(MainLayout, {
  fallback: <ErrorBoundaryPage />,
  onError(error, info) {
    // Do something with the error
    // E.g. log to an error logging client here
  },
});
