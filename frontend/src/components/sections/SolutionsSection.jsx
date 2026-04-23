import "../../styles/sections/solutionsSection.css";
import { FaArrowRight } from "react-icons/fa";

const solutions = [
  {
    title: "Products and Platforms",
    desc: "Deliverig quality solutions. Discover our products",
    img: "/images/sol1.jpeg",
  },
  {
    title: "Services",
    desc: "Empowering businesses through quality service",
    img: "/images/sol2.jpeg",
  },
  {
    title: "Industries",
    desc: "Driving innovation across multiple sectors",
    img: "/images/sol3.jpeg",
  },
];

const SolutionsSection = () => {
  return (
    <section className="solutions-section">
      <div className="solutions-header">
        <h2>Explore Our Solutions</h2>
      </div>

      <div className="solutions-wrapper">
        <div className="solutions-track">
          {solutions.map((item, index) => (
            <div className="solutions-card" key={index}>
              
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
    </section>
  );
};

export default SolutionsSection;