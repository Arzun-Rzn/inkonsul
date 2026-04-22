import "../../styles/sections/trainingSection.css";
import hrImg from "../../assets/images/hr.png";
import softwareImg from "../../assets/images/software.png";
import droneImg from "../../assets/images/drone.png";
import socialImg from "../../assets/images/social.png";

const trainings = [
  {
    title: "Advance HR Program",
    desc: "Comprehensive training covering talent acquisition, payroll, compliance, and modern HR practices to build industry-ready professionals.",
    img: hrImg,
  },
  {
    title: "Software Training",
    desc: "Hands-on training in programming, web development, and databases designed to build real-world development skills.",
    img: softwareImg,
  },
  {
    title: "Drone Training",
    desc: "Practical drone training programs from beginner to professional level, including operation, safety, and commercial applications.",
    img: droneImg,
  },
  {
    title: "Social Launchpad",
    desc: "Learn content creation, platform growth strategies, and monetization techniques to build and scale your digital presence.",
    img: socialImg,
  },
];

const TrainingSection = () => {
  return (
    <section className="training">
      <div className="training-container">

        <h2 className="training-title">AT OUR TRAINING ACADEMY</h2>

        <div className="training-grid">
          {trainings.map((item, index) => (
            <div className="training-card" key={index}>
  
              <div className="training-image">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="training-overlay">
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

export default TrainingSection;