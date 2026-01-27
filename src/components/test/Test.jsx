import { useState } from "react";
import "./Test.css"; // optional, for active class

function Test() {
  const [menu, setMenu] = useState("home");

  const menus = ["home", "about", "contact"];

  return (
    <nav>
      <ul className="menu">
        {menus.map((item) => (
          <li
            key={item}
            className={menu === item ? "active" : ""}
            onClick={() => setMenu(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Test;
