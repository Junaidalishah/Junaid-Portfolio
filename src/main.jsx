import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DarkModeProvider } from "./context/DarkModeContext";
import App from "./App";
import { Toaster } from "react-hot-toast";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <DarkModeProvider>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster position="top-center" />
    </QueryClientProvider>
  </DarkModeProvider>
);
