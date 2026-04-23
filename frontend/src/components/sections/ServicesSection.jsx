import { useRef } from "react";
import "../../styles/sections/servicesSection.css";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Product Development",
    desc: "Build scalable, high-performance digital products tailored to your business.",
    img: "/images/service1.png",
  },
  {
    title: "HR Management Systems",
    desc: "Streamline HR operations with intelligent and automated solutions.",
    img: "/images/service2.png",
  },
  {
    title: "AI & Analytics",
    desc: "Leverage data and AI to drive smarter business decisions.",
    img: "/images/service3.png",
  },
  {
    title: "Cloud & Infrastructure",
    desc: "Deploy secure, scalable cloud systems for modern businesses.",
    img: "/images/service4.png",
  },
  {
    title: "Enterprise Solutions",
    desc: "Custom enterprise software to optimize workflows and growth.",
    img: "/images/service5.png",
  },
];

const ServicesSection = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Services we provide</h2>
      </div>

      <div className="services-wrapper">

        <button className="scroll-btn left" onClick={scrollLeft}>
          &#10094;
        </button>

        <div className="services-slider" ref={sliderRef}>
          <div className="services-track">
            {services.map((item, index) => (
              <div className="service-card" key={index}>
                
                <div className="card-image">
                  <img src={item.img} alt={item.title} />
                </div>

                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>

                  <div className="arrow">
                    <FaArrowRight />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>
          &#10095;
        </button>

      </div>
    </section>
  );
};

export default ServicesSection;