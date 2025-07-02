import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";
import logo from "../../../assets/logo/logo.png";
import rlogo from "../../../assets/logo/rlogo.png";
import useReadingProgress from "../../../Hooks/useReadingProgress";

const Navbar = () => {
  const user = null;
  const [activeNav, setActiveNav] = useState("#home");
  const completion = useReadingProgress();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [navbarBg, setNavbarBg] = useState("transparent");

  const scrollToHash = () => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -100; // adjust based on navbar height
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };
  
  useEffect(() => {
    // Wait a bit to ensure everything is rendered
    const timeout = setTimeout(scrollToHash, 200);
  
    return () => clearTimeout(timeout);
  }, []);
  
  
  /* control navbar bg */
  useEffect(() => {
    const handleScroll = () => {
      setNavbarBg(window.pageYOffset > 120 ? "solid" : "transparent");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* control dark mode and save data to local storage */
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    /* store data to local storage */
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navOptions = (
    <>
      <li>
        <a
          href="#acceuil"
          className={activeNav === "#acceuil" ? " active_link" : ""}
          onClick={() => setActiveNav("#acceuil")}
        >
          Acceuil
        </a>
      </li>
      <li>
        <a
          href="#disciplines"
          className={activeNav === "#programmes" ? " active_link" : ""}
          onClick={() => setActiveNav("#programmes")}
        >
          Disciplines
        </a>
      </li>
      <li>
        <a
          href="#equipement"
          className={activeNav === "#facilities" ? " active_link" : ""}
          onClick={() => setActiveNav("#facilities")}
        >
          Equipement
        </a>
      </li>
      <li>
        <a
          href="#enseignants"
          className={activeNav === "#instructors" ? " active_link" : ""}
          onClick={() => setActiveNav("#instructors")}
        >
          Enseignants
        </a>
      </li>
      <li>
        <a
          href="#cours"
          className={activeNav === "#cours" ? " active_link" : ""}
          onClick={() => setActiveNav("#cours")}
        >
          Cours
        </a>
      </li>
      <li>
        <a
          href="#livre"
          className={activeNav === "#livre" ? " active_link" : ""}
          onClick={() => setActiveNav("#livre")}
        >
          Livre
        </a>
      </li>
      <li>
        <a
          href="#baton"
          className={activeNav === "#baton" ? " active_link" : ""}
          onClick={() => setActiveNav("#baton")}
        >
          Bâton
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className={activeNav === "#contactus" ? " active_link" : ""}
          onClick={() => setActiveNav("#contactus")}
        >
          Contact
        </a>
      </li>
      
    </>
  );
  return (
    <>
      {/* for small display */}
      <div className="lg:hidden bg-purple-500 flex justify-center items-center py-2">
        <img className="w-20" src={logo} title="Logo Bâton de Combat. Self-Défense Toulouse" alt="Logo Bâton de Combat. Self-Défense Toulouse" />
      </div>
      <div
        className={`navbar top-0 transition-all ease-out duration-300  text-white lg:fixed z-50 py-3 md:px-8 ${
          navbarBg !== "transparent" ? "navbar_bg" : "lg:py-4 py-5"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost bg-purple-500 lg:hidden hover:bg-majenta-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-purple-500 dark:bg-gray-700 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="cursor-pointer hidden md:block">
            {navbarBg !== "transparent" ? (
              <img className="w-28" src={rlogo} title="Logo Bâton de Combat. Self-Défense Toulouse" alt="Logo Bâton de Combat. Self-Défense Toulouse" />
            ) : (
              <img className="w-28" src={logo} title="Logo Bâton de Combat. Self-Défense Toulouse" alt="Logo Bâton de Combat. Self-Défense Toulouse" />
            )}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            className={`menu menu-horizontal px-1 font-semibold ${
              navbarBg !== "transparent" ? "text-black" : "text-white"
            } text-xl`}
          >
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex justify-center relative w-fit items-center rounded-full">
            
            <div className="absolute inset-0 z-0 flex dark:justify-end justify-start">
              <motion.span
                layout
                transition={{ type: "spring", damping: 15, stiffness: 250 }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-majenta-500 to-purple-500"
              ></motion.span>
            </div>
          </div>
        </div>
        <span
          className="absolute bg-gradient-to-r from-majenta-500 via-purple-500 to-transparent h-1 w-full bottom-0"
          style={{ transform: `translateX(${completion - 101}%)` }}
        ></span>
      </div>
    </>
  );
};

export default Navbar;
