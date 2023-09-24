import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route element={<Home />} path="/" />
          <Route element={<ProductDetails />} path="/product/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
