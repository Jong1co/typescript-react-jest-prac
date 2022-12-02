import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddProduct from "../pages/AddProduct";
import Home from "../pages/Home";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Detail from "../pages/Detail";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/product/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
