import "../../styles/sections/trainingSection.css";

const trainings = [
  {
    title: "Advance HR Program",
    desc: "Comprehensive training covering talent acquisition, payroll, compliance, and modern HR practices to build industry-ready professionals.",
  },
  {
    title: "Software Training",
    desc: "Hands-on training in programming, web development, and databases designed to build real-world development skills.",
  },
  {
    title: "Drone Training",
    desc: "Practical drone training programs from beginner to professional level, including operation, safety, and commercial applications.",
  },
  {
    title: "Social Launchpad",
    desc: "Learn content creation, platform growth strategies, and monetization techniques to build and scale your digital presence.",
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

export default TrainingSection;