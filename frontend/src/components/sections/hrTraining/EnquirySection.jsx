import React from 'react';
import "../../../styles/sections/EnquirySection.css";

const EnquirySection = () => {
  return (
    <section className="enquiry-wrapper">
      {/* Top Form Section */}
      <div className="enquiry-card">
        <h3>Enquire Now</h3>
        <form className="enquiry-form">
          <input type="text" placeholder="Name*" required />
          <input type="email" placeholder="Email*" required />
          <input type="tel" placeholder="Phone*" required />
          
          <select defaultValue="" required>
            <option value="" disabled>Select State*</option>
            <option value="telangana">Telangana</option>
            <option value="andhra-pradesh">Andhra Pradesh</option>
            <option value="other">Other</option>
          </select>

          <div className="form-row">
            <select defaultValue="" required>
              <option value="" disabled>Highest Qualification*</option>
              <option value="bachelors">Bachelor's Degree</option>
              <option value="masters">Master's Degree</option>
              <option value="phd">PhD or Doctorate</option>
              <option value="diploma">Diploma</option>
            </select>

            <select defaultValue="" required>
              <option value="" disabled>Working Experience*</option>
              <option value="0">0 years</option>
              <option value="1-3">1 - 3 years</option>
              <option value="3-5">3 - 5 years</option>
              <option value="5+">5+ years</option>
            </select>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" id="consent" required />
            <label htmlFor="consent">
              By proceeding, you are giving us consent to call/SMS/WhatsApp/email with reference to your enquiry.
            </label>
          </div>

          <button type="submit" className="submit-btn">REQUEST A CALLBACK</button>
          <p className="form-footer">Our team will contact you shortly with programme details.</p>
        </form>
      </div>

      {/* Bottom Content Section */}
      <div className="info-content">
        <h2>Start Your HR Learning Journey</h2>
        <p className="info-desc">
          Connect with our programme advisors to discover how our executive education can accelerate your career in human resources. We're here to guide you to the right curriculum.
        </p>

        <div className="info-item">
          <div className="info-icon">💻</div>
          <div>
            <h4>Live Online Weekend Sessions</h4>
            <p>Designed for busy executives, participate in interactive masterclasses without interrupting your work week.</p>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">🎓</div>
          <div>
            <h4>Future-Ready HR Curriculum</h4>
            <p>Master advanced analytics, strategic workforce planning, and organizational design for the modern era.</p>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">📈</div>
          <div>
            <h4>Career Support Included</h4>
            <p>Gain access to 1-on-1 career coaching, resume workshops, and our exclusive global alumni network.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;