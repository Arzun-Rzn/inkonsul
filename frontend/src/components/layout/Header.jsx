import { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";
import "../../styles/components/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    {
      name: "Expertise",
      dropdown: true,
      type: "expertise",
      content: {
        products: ["Siera HR", "Crawayn"],
        services: ["Product Development"],
      },
    },
    {
      name: "Training Academy",
      dropdown: true,
      type: "academy",
      content: [
        {
          title: "Advance HR Program",
          items: [
            "Talent Acquisition",
            "HR Operations",
            "HR Payroll",
            "Labour Law & Compliance",
            "AI in HR & Analytics",
          ],
        },
        {
          title: "Software Training",
          items: [
            "Programming & Development",
            "Web Development",
            "Database & Analytics",
            "Mongo DB",
          ],
        },
        {
          title: "Drone Training",
          items: [
            "Beginner’s Course",
            "Professional Course",
            "Buy Drone",
          ],
        },
        {
          title: "Social Launchpad",
          items: [
            "Content Creation Mastery",
            "Platform Growth Strategies",
            "YouTube Channel Building",
            "Monetization & Income",
          ],
        },
      ],
    },
    { name: "Solutions", dropdown: false },
    { name: "About us", dropdown: false },
  ];

  return (
    <>
      <header className="header">
        <div className="container header-container">
          {/* Mobile Hamburger Icon */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu />
          </button>

          {/* Center Logo */}
          <Link to="/" className="brand">
            <img src="/logo.png" alt="Inkonsul Logo" className="brand-logo" />
            <span className="brand-text">INKONSUL</span>
          </Link>

          <nav 
            className="nav"
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {navItems.map((item, index) => (
              <Link
                to="#"
                className="nav-item"
                key={index}
                onMouseEnter={() => setActiveDropdown(index)}
              >
                <span className="nav-text">{item.name}</span>

                {item.dropdown && (
                  <span className="arrow">
                    <FiChevronDown />
                  </span>
                )}

                {/* DROPDOWN */}
                {item.dropdown && activeDropdown === index && (
                  <div className={`dropdown ${item.type}`}>
                    <div className="dropdown-inner">
                      {item.type === "expertise" && (
                        <div className="dropdown-grid-2">
                          <div>
                            <h4>Products</h4>
                            {item.content.products.map((p, i) => (
                              <div key={i} className="dropdown-item">{p}</div>
                            ))}
                          </div>

                          <div>
                            <h4>Services</h4>
                            {item.content.services.map((s, i) => (
                              <div key={i} className="dropdown-item">{s}</div>
                            ))}
                          </div>
                        </div>
                      )}

                      {item.type === "academy" && (
                        <div className="dropdown-grid-4">
                          {item.content.map((section, i) => (
                            <div key={i}>
                            <Link
                            to={
                                  section.title === "Advance HR Program"
                                    ? "/training/advance-hr-program"
                                    : section.title === "Software Training"
                                    ? "/training/software-training"
                                    : section.title === "Drone Training"
                                    ? "/training/drone-training"
                                    : "/training/social-launchpad"
                                }
                                className="academy-heading-link"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <h4>{section.title}</h4>
                            </Link>
                            {section.items.map((sub, j) => (
                              <Link
                                  key={j}
                                  to={
                                    sub === "Talent Acquisition"
                                      ? "/training/advance-hr-program#talent-acquisition"
                                      : sub === "HR Operations"
                                      ? "/training/advance-hr-program#hr-operations"
                                      : sub === "HR Payroll"
                                      ? "/training/advance-hr-program#hr-payroll"
                                      : sub === "Labour Law & Compliance"
                                      ? "/training/advance-hr-program#labour-law-compliance"
                                      : sub === "AI in HR & Analytics"
                                      ? "/training/advance-hr-program#ai-hr-analytics"
                                      : "#"
                                  }
                                  className="dropdown-item"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                {sub}
                              </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </Link>
            ))}
          </nav>

          <div className="auth">
            <span className="login">Login</span>
            <button className="signup-btn">Sign Up</button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={menuOpen} setIsOpen={setMenuOpen} />
    </>
  );
};

export default Header;
