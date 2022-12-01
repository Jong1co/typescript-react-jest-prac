import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "../pages/AddProduct";
import Home from "../pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-product' element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
