import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllProduct from "./components/AllProduct";
import Counter from "./components/Counter";
import ProductDetails from "./components/ProductDetails";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllProduct />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/addProduct" element={<AddProduct />} />
      </Routes>
    </>
  );
}

export default App;
