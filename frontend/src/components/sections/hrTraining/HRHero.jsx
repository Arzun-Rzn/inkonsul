import "./../../../styles/sections/hrHero.css";
import { useState } from "react";
import EnquiryFormModal from "../../layout/common/EnquiryFormModal";

const HRHero = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="hr-hero">
      <div className="container hr-hero-container">
        
        <div className="hr-hero-left">
          <h1>Advanced Programme in HR Management</h1>

          <p>
            Equip and empower HR professionals with future-ready
            skills in HR recruitment, operations, analytics,
            AI, payroll, compliance, and workforce transformation.
          </p>

          <button
            className="enroll-btn"
            onClick={() => setOpenModal(true)}
          >
            Enroll Now
          </button>
        </div>

        <div className="hr-hero-right">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="HR Training"
          />
        </div>

        <EnquiryFormModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        />

      </div>
    </section>
  );
};

export default HRHero;