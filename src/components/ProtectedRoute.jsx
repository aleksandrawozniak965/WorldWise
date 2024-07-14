import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContex";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigation = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigation("/");
    },
    [isAuthenticated, navigation]
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
