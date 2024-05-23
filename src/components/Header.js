import React, { useState, useEffect, useContext } from "react";
import { FaHome } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";

const Header = () => {
  const { loggedIn, setToken, setLoggedIn } = useContext(RoomContext);
  const location = useLocation();

  const handleLogout = () => {
    setToken("");
    setLoggedIn(false);
  };

  // Determine if the current route is '/signin'
  const isSignIn = location.pathname === "/signin";
  const isSignIUp = location.pathname === "/signup";
  const adminDashoard = location.pathname === "/admin/dashboard";

  const isSignupORSignin = isSignIUp | isSignIn;
  const onAdminDashboard = adminDashoard;
  // Define a class for the header text based on whether it's on '/signin' or not
  const headerTextClass = isSignupORSignin ? "text-primary" : "";
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-white  py-6 shadow-lg" : "bg-transparent  py-8"
      } 
        ${onAdminDashboard ? "hidden" : ""} 
        
        fixed z-50 w-full transition-all duration-500`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        <Link to="/">
          {header ? (
            <div>
              <Link
                to="/"
                className="flex justify-center items-center flex-row gap-3"
              >
                <FaHome className="w-6 h-6 text-accent" />
                <span className=" text-primary text-2xl font-primary">
                  Daily Love
                </span>
              </Link>
            </div>
          ) : (
            <div>
              <Link
                to="/"
                className="flex justify-center items-center flex-row gap-3"
              >
                <FaHome className="w-6 h-6 text-accent" />
                <span
                  className={` ${headerTextClass}  text-white text-2xl font-primary`}
                >
                  Daily Love
                </span>
              </Link>
            </div>
          )}
        </Link>
        <nav
          className={` ${headerTextClass} ${
            header ? "text-primary" : "text-white"
          } flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center uppercase`}
        >
          <Link to="/" className="hover:text-accent transition">
            Home
          </Link>

          {loggedIn ? (
            <>
              <Link to="/" className="hover:text-accent transition">
                Rooms
              </Link>
              <button
                onClick={handleLogout}
                className="hover:text-accent transition"
                style={{
                  backgroundColor: "black",
                  padding: "1vw",
                  color: "white",
                }}
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="hover:text-accent transition">
                Sign In
              </Link>
              <Link to="/signup" className="hover:text-accent transition">
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
