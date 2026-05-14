import { useEffect } from "react";
import "../../../styles/components/enquiryFormModal.css";

const EnquiryFormModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>ENQUIRE NOW</h2>

        <form className="modal-form">
          <input type="text" placeholder="Name*" required />
          <input type="email" placeholder="Email*" required />
          <input type="tel" placeholder="Phone*" required />

          <select defaultValue="" required>
            <option value="" disabled>Select State*</option>
            <option>Telangana</option>
            <option>Andhra Pradesh</option>
            <option>Other</option>
          </select>

          <div className="modal-form-row">
            <select defaultValue="" required>
              <option value="" disabled>Highest Qualification*</option>
              <option>Bachelor's Degree</option>
              <option>Master's Degree</option>
              <option>PhD</option>
            </select>

            <select defaultValue="" required>
              <option value="" disabled>Working Experience*</option>
              <option>0 years</option>
              <option>1–3 years</option>
              <option>3–5 years</option>
              <option>5+ years</option>
            </select>
          </div>

          <div className="modal-checkbox-container">
            <input type="checkbox" id="consent" required />
            <label htmlFor="consent">
              By proceeding, you consent to calls/SMS/WhatsApp/email.
            </label>
          </div>

          <button type="submit" className="modal-submit-btn">
            REQUEST A CALLBACK
          </button>

          <p className="modal-form-footer">
            Our team will contact you shortly.
          </p>
        </form>
      </div>
    </div>
  );
};

export default EnquiryFormModal;