import "../../../styles/sections/hrInfoStrip.css";

const HRInfoStrip = () => {
  return (
    <section className="hr-info-strip">
      <div className="container hr-info-container">
        
        <div className="info-box">
          <h4>SPECIALIZATION</h4>
          <p>Human Resources</p>
        </div>

        <div className="info-box">
          <h4>DURATION</h4>
          <p>8 Weeks</p>
        </div>

        <div className="info-box">
          <h4>MODE</h4>
          <p>Online & Offline</p>
        </div>

        <div className="info-box">
          <h4>ELIGIBILITY</h4>
          <p>Any Graduate & MBA</p>
        </div>

      </div>
    </section>
  );
};

export default HRInfoStrip;