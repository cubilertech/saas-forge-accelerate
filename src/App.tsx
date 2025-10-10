import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Index from "./pages/Index";
import PriceUpCaseStudy from "./pages/PriceUpCaseStudy";
import AfterHireCaseStudy from "./pages/AfterHireCaseStudy";
import PipaCaseStudy from "./pages/PipaCaseStudy";
import AICustomerServices from "./pages/AICustomerServices";
import NotFound from "./pages/NotFound";
import ChatWidget from "./components/ui-components/chatBorad";

const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/case-study/priceup" element={<PriceUpCaseStudy />} />
            <Route
              path="/case-study/afterhire"
              element={<AfterHireCaseStudy />}
            />
            <Route path="/case-study/pipa" element={<PipaCaseStudy />} />
            <Route
              path="/services/ai-customer-services"
              element={<AICustomerServices />}
            />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <ChatWidget />
      </TooltipProvider>
    </QueryClientProvider>
  </Provider>
);

export default App;
