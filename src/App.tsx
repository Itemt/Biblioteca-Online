
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LibraryProvider } from "@/context/LibraryContext";

import Layout from "@/components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BookDetail from "./pages/BookDetail";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <LibraryProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/books/:id" element={<BookDetail />} />
                <Route path="/books/add" element={<AddBook />} />
                <Route path="/books/edit/:id" element={<EditBook />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LibraryProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

