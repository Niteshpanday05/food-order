import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Test from "./components/test/Test";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";

const App = () => {

  const[showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/about" element={<About />} />
           <Route path="/menu" element={<Menu />} />

        </Routes>
      </div>
      <Footer/>
    </>
  );
};

export default App;
