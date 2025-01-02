import React from "react";
import { NavLink } from "react-router-dom";
import "../others/Navbar.css";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF", width: "100%", padding: '7px' }}
    >
      <div className="container-fluid p-2">
        {/* Logo */}
        <NavLink className="navbar-brand" to="/" aria-label="Home">
          <img
            src="images/newlogo.jpg"
            className="navbar-logo"
            alt="Company Logo"
            style={{marginTop: '-8px', width: '250px', height: 'auto', marginLeft: '100px'}}
          />
        </NavLink>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto nav-menu" style={{ marginRight: '160px' }}>
            {[
              { path: "/signup", label: "Signup" },
              { path: "/about", label: "About" },
              { path: "/product", label: "Product" },
              { path: "/pricing", label: "Pricing" },
              { path: "/support", label: "Support" },
            ].map((item) => (
              <li className="nav-item" key={item.path}>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link${isActive ? " active" : ""}`
                  }
                  to={item.path}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
