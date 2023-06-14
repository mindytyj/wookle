import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ShowNavBar({ children }) {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [location]);

  return showNav === true && children;
}
