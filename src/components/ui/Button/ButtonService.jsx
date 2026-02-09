import { Link } from "react-router-dom";
import "./ButtonService.css";

const ButtonService = ({ to, children, variant = "primary", ...props }) => {
  if (to) {
    return (
      <Link to={to} className={`btn btn-${variant}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`btn btn-${variant}`} {...props}>
      {children}
    </button>
  );
};

export default ButtonService;
