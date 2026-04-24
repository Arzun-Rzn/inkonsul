import {
  FaInstagram,
  FaGithub,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

import "../../styles/components/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT - Brand */}
        <div className="footer-brand">
          <div className="footer-brand-header">
            <img src="/logo.png" alt="Inkonsul Logo" className="brand-logo" />
            <h2>INKONSUL</h2>
          </div>


          <p>
            Building intelligent HR platforms and digital solutions
            for modern businesses.
          </p>

          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* CENTER - Links */}
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Solutions</a>
            <a href="#">Careers</a>
          </div>

          <div>
            <h4>Resources</h4>
            <a href="#">Blogs</a>
            <a href="#">Training</a>
            <a href="#">Support</a>
          </div>

          <div>
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>

        {/* RIGHT - Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: contact@inkonsul.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Inkonsul. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;