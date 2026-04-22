import "../../styles/sections/productsSection.css";
import { FaArrowRight } from "react-icons/fa";

const products = [
  {
    name: "Siera HR",
    desc: "An AI-powered HRMS platform designed to streamline recruitment, payroll, compliance, and workforce analytics.",
    tag: "HR Management Platform",
    img: "/images/siera.jpg",
  },
  {
    name: "Crawayn",
    desc: "A next-generation AI platform focused on training, skill development, and product innovation for modern teams.",
    tag: "Training & Development Platform",
    img: "/images/crawayn.jpg",
  },
];

const ProductsSection = () => {
  return (
    <section className="products-section">
      <div className="products-container">

        <div className="products-header">
          <h2>Our Products which are AI Platforms Driving Innovation</h2>
          <p>
            Powerful, intelligent systems built to transform how organizations manage people, learning, and growth.
          </p>
        </div>

        <div className="products-grid">
          {products.map((item, index) => (
            <div className="product-card" key={index}>

              <div className="product-image">
                <img src={item.img} alt={item.name} />
              </div>

              <div className="product-content">
                <span className="product-tag">{item.tag}</span>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>

                <div className="product-arrow">
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

export default ProductsSection;