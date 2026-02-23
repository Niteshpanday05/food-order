import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./LoginPopup.css";

const LoginPopup = ({ setShowLogin, setIsAuthenticated }) => {
  const [currState, setCurrentState] = useState("Login");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // prevent form submit reload

    // 1️⃣ Mark user as authenticated
    setIsAuthenticated(true);

    // 2️⃣ Get attempted route
    const redirectPath = sessionStorage.getItem("redirectAfterLogin") || "/";

    // 3️⃣ Navigate to that route
    navigate(redirectPath, { replace: true });

    // 4️⃣ Clean up
    sessionStorage.removeItem("redirectAfterLogin");
    setShowLogin(false);
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleLogin}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
          {currState === "Login" ? null : <input type="text" placeholder="Your name" required />}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit">{currState === "Sign Up" ? "Create an Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing I agree to the terms of use and privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrentState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
