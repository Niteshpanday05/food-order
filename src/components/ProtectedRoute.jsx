import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, setShowLogin, children }) => {
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      setShowLogin(true);

      // Save attempted path so we can redirect after login
      sessionStorage.setItem("redirectAfterLogin", location.pathname);
    }
  }, [isAuthenticated, setShowLogin, location]);

  if (!isAuthenticated) return null; // don't render protected page yet

  return children;
};

export default ProtectedRoute;