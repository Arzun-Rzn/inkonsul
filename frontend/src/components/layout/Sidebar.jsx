
import React, { useEffect } from "react";
import "../../styles/components/sidebar.css";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const closeSidebar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  

  return (
    <div className="sidebar-overlay">
      <div className="sidebar">
        {/* Close Icon */}
        <button className="sidebar-close" onClick={closeSidebar}>
          <FaTimes />
        </button>

        {/* Top Center Logo + Title */}
        <div className="sidebar-brand">
          <img
            src="/logo.png"
            alt="Inkonsul Logo"
            className="sidebar-logo"
          />
          <h2 className="sidebar-title">INKONSUL</h2>
          <p className="sidebar-subtitle">
            Identify. Integrate. Implement.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="sidebar-links">
          <a href="/expertise">Expertise</a>
          <a href="/training-academy">Training Academy</a>
          <a href="/solutions">Solutions</a>
          <a href="/about">About Us</a>
        </div>

        {/* Bottom Auth Buttons */}
        <div className="sidebar-auth">
          <button className="sidebar-login">Login</button>
          <button className="sidebar-signup">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
