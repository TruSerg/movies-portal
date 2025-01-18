import { ReactNode, FC } from "react";
import { Box } from "@mantine/core";

import SideBar from "../SideBar";
import Container from "../Container";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Box className="flex bg-gray-100 xl:flex-col">
        <SideBar />
        {children}
      </Box>
    </Container>
  );
};

export default MainLayout;
