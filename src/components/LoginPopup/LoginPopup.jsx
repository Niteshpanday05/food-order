import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({setShowLogin}) => {
  const [currState, setCurrentState] = useState("Login");
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
          {currState==="Login"?<></>:<input type="text" placeholder="your name" required />}
          
           <input type="email" placeholder="'your email" required />
            <input type="password" placeholder="'password" required />
        </div>
        <button>{currState==="Sign Up"?"Create an Account":"Login"}</button>
      </form>
    </div>
  );
};

export default LoginPopup;
