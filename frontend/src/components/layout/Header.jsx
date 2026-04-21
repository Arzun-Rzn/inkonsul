import { useState } from "react";
import "../../styles/components/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <div className="logo">
          INKONSUL
        </div>

        {/* Desktop Nav */}
        <nav className="nav">
          <div className="nav-item">Services</div>
          <div className="nav-item">Training</div>
          <div className="nav-item">Solutions</div>
          <div className="nav-item">Careers</div>
          <div className="nav-item">About</div>
          <div className="nav-item">Contact</div>
        </nav>

        <div className="auth">
          <span className="login">Login</span>
          <button className="signup-btn">Sign Up</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <div>Services</div>
          <div>Training</div>
          <div>Solutions</div>
          <div>About</div>
          <div>Careers</div>
          <div>Contact</div>
        </div>
      )}
    </header>
  );
};

export default Header;