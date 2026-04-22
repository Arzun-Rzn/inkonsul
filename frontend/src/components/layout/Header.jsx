import { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
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
    <header className="header">
      <div className="header-container">


        <div className="logo">INKONSUL</div>

        <nav className="nav">
          {navItems.map((item, index) => (
            <Link
              href="#"
              className="nav-item"
              key={index}
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
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
                            <h4>{section.title}</h4>
                            {section.items.map((sub, j) => (
                              <div key={j} className="dropdown-item">
                                {sub}
                              </div>
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
  );
};

export default Header;