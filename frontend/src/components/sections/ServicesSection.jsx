import "../../styles/sections/servicesSection.css";

const services = [
  {
    title: "HR Management Systems",
    desc: "End-to-end HRMS solutions to manage workforce efficiently.",
  },
  {
    title: "Product Development",
    desc: "Scalable and modern web & software product development.",
  },
  {
    title: "AI & Analytics",
    desc: "Data-driven insights and intelligent automation solutions.",
  },
  {
    title: "Training Programs",
    desc: "Industry-focused training for individuals and organizations.",
  },
];

const ServicesSection = () => {
  return (
    <section className="services">
      <div className="services-container">

        <h2 className="services-title">Our Services</h2>

        <div className="services-grid">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;