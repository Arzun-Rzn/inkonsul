import "../../styles/sections/hero.css";

const Hero = () => {
  return (
    <>
    <section className="hero">
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1>
          Building Intelligent HR Platforms for
          <br />
          Modern Businesses
        </h1>

        <p>
          From HRMS to intelligent automation and custom digital solutions
          Inkonsul helps organizations and individuals grow faster with
          technology
        </p>

        <button className="cta-btn">Get in Touch</button>
      </div>
    </section>
    </>
  );
};

export default Hero;