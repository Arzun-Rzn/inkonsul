import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../../../styles/sections/HRCurriculum.css";
import EnquiryFormModal from "../../layout/common/EnquiryFormModal";

const modules = [
  { id: '01', title: 'Evolution and Trends in HRM', description: 'Exploring the historical shift from personnel management to strategic human capital leadership in the digital age.', icon: '📈' },
  { id: '02', title: 'Talent Acquisition and Development', description: 'Advanced strategies for sourcing, identifying, and nurturing high-potential talent within competitive markets.', icon: '👥', slug: "talent-acquisition", },
  { id: '03', title: 'HR Operations Management', description: 'Streamlining core HR processes to drive organizational efficiency and employee experience excellence.', icon: '⚙️', slug: "hr-operations", },
  { id: '04', title: 'Payroll Management', description: 'Comprehensive understanding of compensation structures, benefits administration, and payroll systems.', icon: '💵', slug: "hr-payroll", },
  { id: '05', title: 'Performance Management', description: 'Implementing robust frameworks for continuous feedback, goal alignment, and merit-based advancement.', icon: '📊' },
  { id: '06', title: 'Labour Law Statutory Compliances', description: 'Navigating complex legal frameworks and ensuring absolute adherence to contemporary labour regulations.', icon: '⚖️',  slug: "labour-law-compliance", },
  { id: '07', title: 'HR Analytics', description: 'Leveraging data-driven insights to predict workforce trends and make informed strategic talent decisions.', icon: '🔍' },
  { id: '08', title: 'AI and Automation in HR', description: 'Harnessing artificial intelligence and robotic process automation to redefine the future of human resources.', icon: '🤖',  slug: "ai-hr-analytics", },
  { id: '09', title: 'Employee Relations', description: 'Building a culture of trust, managing industrial relations, and fostering a collaborative workplace ecosystem.', icon: '🤝' },
  { id: '10', title: 'Strategic HR Leadership', description: 'Developing the executive mindset required to lead organizational transformation and cultural change at scale.', icon: '⭐' },
];

const HRCurriculum = () => {
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();

  return (
    <section className="curriculum-container">
      <div className="curriculum-header">
        <h1>Programme Curriculum</h1>
        <p>A future-ready curriculum designed to build strategic, operational, and technology-enabled HR capabilities.</p>
      </div>

      <div className="curriculum-grid">
        {modules.map((module) => (
          <div
            key={module.id}
            id={module.slug}
            className={`module-card ${
              location.hash === `#${module.slug}`
                ? "highlight-card"
                : ""
            }`}
          >
            <div className="icon-wrapper">{module.icon}</div>
            <span className="module-number">MODULE {module.id}</span>
            <h3>{module.title}</h3>
            <p>{module.description}</p>
          </div>
        ))}
        
        <div className="cta-card">
            <div className="cta-content">
                <h2>Ready to Lead the Future of HR?</h2>

                <p>
                Get complete access to the full programme syllabus,
                detailed module breakdown, learning outcomes,
                tools covered, and certification roadmap.
                </p>

                <ul className="cta-points">
                <li>10 in-depth HR modules</li>
                <li>AI & Analytics integrated curriculum</li>
                <li>Real-world case studies & capstone project</li>
                <li>Career support & interview preparation</li>
                <li>Industry-recognised certification</li>
                </ul>

                <button
                  className="enroll-btnn"
                  onClick={() => setOpenModal(true)}
                >
                  ENROLL NOW
                </button>
            </div>

        <div className="grad-cap-icon">🎓</div>
      </div>
       <EnquiryFormModal
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
       />
    </div>
    </section>
  );
};

export default HRCurriculum;