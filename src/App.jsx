import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin}   setIsAuthenticated={setIsAuthenticated} />}

      <div className="app">
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path="/" element={<Home />} />

          {/* Protected Routes */}
          <Route
            path="/cart"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                setShowLogin={setShowLogin}
              >
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route

            path="/order"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                setShowLogin={setShowLogin}
              >
                <PlaceOrder />
              </ProtectedRoute>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;