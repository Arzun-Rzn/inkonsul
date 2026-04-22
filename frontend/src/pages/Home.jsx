import Hero from "../components/sections/Hero";
import ProductsSection from "../components/sections/ProductsSection";
import ServicesSection from "../components/sections/ServicesSection";
import TrainingSection from "../components/sections/TrainingSection";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsSection/>
      <ServicesSection/>
      <TrainingSection />
    </>
  );
};
export default Home;