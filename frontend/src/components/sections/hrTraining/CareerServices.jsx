import React, { useState } from "react";
import "../../../styles/sections/CareerServices.css";
import EnquiryFormModal from "../../layout/common/EnquiryFormModal";

const services = [
  {
    title: "Resume & Cover Letter",
    desc: "Crafting narrative-driven documentation that highlights executive trajectory and strategic impact.",
    icon: "📄"
  },
  {
    title: "Navigating Job Search",
    desc: "Strategic deployment in high-level markets and accessing the unlisted executive opportunity landscape.",
    icon: "🔍"
  },
  {
    title: "Interview Preparation",
    desc: "Refining behavioral responses and board-level communication strategies for critical assessments.",
    icon: "💬"
  },
  {
    title: "LinkedIn Profile Optimisation",
    desc: "Building a commanding digital presence that attracts top-tier recruiters and corporate boards.",
    icon: "👤"
  }
];

const CareerServices = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="ink-career-section">
      <div className="ink-container">
        <header className="ink-header">
          <h1>Inkonsul Career Services</h1>
          <p>Empowering executive transitions through strategic guidance, high-impact branding, and exclusive career navigation protocols.</p>
        </header>

        <div className="ink-grid-wrapper">
          {/* This represents the connecting line behind the cards */}
          <div className="ink-connecting-line"></div>
          
          <div className="ink-services-grid">
            {services.map((item, index) => (
              <div key={index} className="ink-service-card">
                <div className="ink-icon-box">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ink-footer">
            <button
                  className="ink-explore-btn"
                  onClick={() => setOpenModal(true)}
                >
                  Explore Career Services
                </button>
        </div>
        <EnquiryFormModal
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
       />
      </div>
    </section>
  );
};

export default CareerServices;