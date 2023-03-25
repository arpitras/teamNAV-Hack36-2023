import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar"  >
          <div className="navbar-container containera"  >
            <div className="logo">
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXUwyncP6YpaTaQ8kxDBTM-bQ8vWkweo4lw&usqp=CAU" className="logo-img"></img>
            </div>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              {/* <GiRocketThruster className="navbar-icon" /> */}
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul   className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item" id="navbar">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Know about us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Donate"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Donate
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <NavLink
                  to="/Ttoe"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                > */}
                  <a href="#footer" className = "nav-links">Talk to our experts</a>
                {/* </NavLink> */}
              </li>
              <li className="nav-item">
                {/* <NavLink
                  to="/Ttoe"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                > */}
                  <a href="http://localhost:3030/profile" className = "nav-links">User Profile</a>
                {/* </NavLink> */}
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Urgent"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Urgent
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;