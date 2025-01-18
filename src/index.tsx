import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { MantineProvider } from "@mantine/core";

import AppRoutes from "./routes/Routes";

import { store } from "./store";

import MainLayout from "./components/MainLayout";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <MantineProvider>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </MantineProvider>
    </Provider>
  </BrowserRouter>,
);
