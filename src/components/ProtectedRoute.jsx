import { useEffect } from "react";

const ProtectedRoute = ({ isAuthenticated, setShowLogin, children }) => {

  useEffect(() => {
    if (!isAuthenticated) {
      setShowLogin(true);
    }
  }, [isAuthenticated, setShowLogin]);

  if (!isAuthenticated) return null;

  return children;
};

export default ProtectedRoute;