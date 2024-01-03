import { Binoculars, MagnifyingGlass, UserCircle, Users } from "phosphor-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  // Uncomment and modify according to your authentication logic
  // const { isAuthenticated, user } = useAuthState();
  // const authDispatch = useAuthDispatch();
  // const navigate = useNavigate();

  const location = useLocation();

  // Uncomment and modify according to your authentication logic
  // const handleLogout = () => {
  //   authDispatch({ type: "LOGOUT" });
  // };

  // Uncomment and modify according to your authentication logic
  // const handleLogin = () => {
  //   navigate("/login");
  // };

  const isLinkActive = (path) => location.pathname === path;

  return (
    <header>
      <nav className="bg-green-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/discovery" className="text-2xl font-bold">
            STUDENTCONNECT
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/search" className="text-lg nav-link">
              <MagnifyingGlass size={32} />
            </Link>
            <Link
              to="/discovery"
              className={`text-lg nav-link ${
                isLinkActive("/discovery") ? "active" : ""
              }`}
            >
              <Binoculars size={32} />
            </Link>
            <Link
              to="/start-fundraiser"
              className={`text-lg nav-link ${
                isLinkActive("/start-fundraiser") ? "active" : ""
              }`}
              id="nav-item"
            >
              <Users size={32} />
            </Link>

            <Link
              to="/start-fundraiser"
              className={`text-lg nav-link ${
                isLinkActive("/start-fundraiser") ? "active" : ""
              }`}
              id="nav-item"
            >
              <UserCircle size={32} />
            </Link>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .nav-link {
          text-decoration: none;
        }

        .nav-link.active {
          border-bottom: 2px solid #ffffff; // Change the color as per your design
        }
      `}</style>
    </header>
  );
}
