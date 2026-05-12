import {
  FiWifi,
  FiBookOpen,
  FiCpu,
  FiBriefcase,
  FiTarget,
  FiUserCheck,
  FiDownload,
} from "react-icons/fi";
import certificateImage from "../../../assets/images/hr-certificate.png";

import "../../../styles/sections/programHighlights.css";

const ProgramHighlights = () => {
  return (
    <section className="program-highlights">
      <div className="container highlights-container">

        {/* LEFT */}
        <div className="highlights-left">
          <h2>Programme Highlights</h2>
          <p>
            Designed to equip learners with practical, strategic,
            and technology-enabled HR capabilities for the future of work.
          </p>

          <div className="highlight-grid">

            <div className="highlight-card">
              <FiWifi className="highlight-icon" />
              <h3>Live Online Learning</h3>
              <p>
                Interactive weekend sessions designed for working
                professionals and aspiring HR leaders.
              </p>
            </div>

            <div className="highlight-card">
              <FiBookOpen className="highlight-icon" />
              <h3>Industry-Relevant Curriculum</h3>
              <p>
                Covers HR operations, talent acquisition,
                payroll, labour law, HR analytics, AI,
                and employee relations.
              </p>
            </div>

            <div className="highlight-card">
              <FiCpu className="highlight-icon" />
              <h3>AI-Enabled HR Learning</h3>
              <p>
                Learn how AI and automation are transforming
                HR practices, decision-making,
                and workforce management.
              </p>
            </div>

            <div className="highlight-card">
              <FiBriefcase className="highlight-icon" />
              <h3>Practical Case Studies</h3>
              <p>
                Build real-world understanding through
                case studies, business scenarios,
                and application-oriented learning.
              </p>
            </div>

            <div className="highlight-card">
              <FiTarget className="highlight-icon" />
              <h3>Capstone Project</h3>
              <p>
                Strengthen your industry-ready outlook
                through guided project work and
                practical problem-solving.
              </p>
            </div>

            <div className="highlight-card">
              <FiUserCheck className="highlight-icon" />
              <h3>Career Support</h3>
              <p>
                Get support with resume building,
                LinkedIn profile optimisation,
                interview preparation, and job search readiness.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="certificate-panel">
          <h3>HR Programme Certification</h3>

          <p>
            Upon successful completion of the programme,
            participants will receive a Certificate of
            Completion in HR Management from Inkonsul Technologies.
          </p>

        <div className="certificate-box">
            <img
                src={certificateImage}
                alt="HR Programme Certificate"
                className="certificate-image"
            />
        </div>

          {/* Future brochure button */}
          {/*
          <button className="brochure-btn">
            <FiDownload />
            Download Brochure
          </button>
          */}

          <div className="certificate-note">
            Earn a professional certificate that validates
            your HR knowledge, future-ready skills,
            and programme completion.
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProgramHighlights;