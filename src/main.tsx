import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import "./index.css";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
      <Toaster richColors />
    </BrowserRouter>
  </StrictMode>
);
