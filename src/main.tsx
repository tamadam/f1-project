import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import LanguageProvider from "./languages/LanguageProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 86_400_000, // 1 day = 86_400_000
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <RouterProvider router={router} />
        {/* <ReactQueryDevtools /> */}
      </LanguageProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
