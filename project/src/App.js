import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Payment from "./components/pages/Payment";
import Navbar from "./components/Navbar/Navbar";
import { States } from "./States";
function App() {
  return (
    <div className="App">
      <States>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/payment" element={<Payment />}></Route>
          </Routes>
        </BrowserRouter>
      </States>
    </div>
  );
}

export default App;
