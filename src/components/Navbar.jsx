import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/cpelogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed w-full top-0 z-10">
        <div className="bg-green-700 h-1 w-full"></div> {/* Green line on top */}
        <div className="bg-[#1E1E1E] opacity-100">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <button
                  onClick={toggleMenu}
                  className="navbarbutton"
                  aria-controls="mobile-menu"
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Icon when menu is closed */}
                  <svg
                    className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                  {/* Icon when menu is open */}
                  <svg
                    className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0">
                  <img className="h-14 w-15" src={logo} alt="CPE Logo" />
                </div>
                <h1 className="ml-3 text-white text-m font-bold my-3.5">
                  COMPUTER ENGINEERING
                </h1>
                <div className="hidden sm:block sm:ml-6 my-2">
                  <div className="flex space-x-4">
                    <Link to="/" className="navbarlink">
                      Home
                    </Link>
                    <Link to="/about" className="navbarlink">
                      About
                    </Link>
                    <Link to="/faculty" className="navbarlink">
                      Faculty & Staff
                    </Link>
                    <Link to="/research" className="navbarlink">
                      Research
                    </Link>
                    <Link to="/studentoa" className="navbarlink">
                      Student O&A
                    </Link>
                    <a href="#" className="navbarlink">
                      Student Achievers
                    </a>
                    <a href="#" className="navbarlink">
                      Community
                    </a>
                    <a href="#" className="navbarlink">
                      Alumni
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu, show/hide based on menu state. */}
          <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`} id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="navbarmobilelink">
                Home
              </Link>
              <Link to="/about" className="navbarmobilelink">
                About
              </Link>
              <Link to="/faculty" className="navbarmobilelink">
                Faculty & Staff
              </Link>
              <Link to="/research" className="navbarmobilelink">
                Research
              </Link>
              <a href="#" className="navbarmobilelink">
                Student O&A
              </a>
              <a href="#" className="navbarmobilelink">
                Student Achievers
              </a>
              <a href="#" className="navbarmobilelink">
                Community
              </a>
              <a href="#" className="navbarmobilelink">
                Alumni
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
