import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { Toaster } from "./components/ui/sonner";
import { AxiosClientProvider } from "./providers/AxiosClientProvider";

export const App = () => {
  return (
    <BrowserRouter>
      <AxiosClientProvider>
        <Router />
      </AxiosClientProvider>
      <Toaster richColors />
    </BrowserRouter>
  );
};
