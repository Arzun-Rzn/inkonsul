import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import "../../styles/components/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
  { name: "Services", dropdown: true },
  { name: "Training", dropdown: true },
  { name: "Solutions", dropdown: true },
  { name: "Careers", dropdown: true },
  { name: "About", dropdown: false },
  { name: "Contact", dropdown: false },
];

  return (
    <header className="header">
      <div className="header-container">

        {/* Mobile Menu Button */}
       <div 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
       >
          <HiOutlineMenu />
       </div>

        {/* Logo */}
        <div className="logo">
          INKONSUL
        </div>

      <nav className="nav">
        {navItems.map((item, index) => (
          <div className="nav-item" key={index}>
            <span className="nav-text">{item.name}</span>
            {item.dropdown && (
              <span className="arrow">
                <FiChevronDown />
              </span>
            )}
          </div>
        ))}
      </nav>

        <div className="auth">
          <span className="login">Login</span>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <div>Services</div>
          <div>Training</div>
          <div>Solutions</div>
          <div>Careers</div>
          <div>About</div>
          <div>Contact</div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
    </header>
  );
};

export default Header;