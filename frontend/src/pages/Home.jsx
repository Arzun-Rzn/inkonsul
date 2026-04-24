import Hero from "../components/sections/Hero";
import ProductsSection from "../components/sections/ProductsSection";
import ServicesSection from "../components/sections/ServicesSection";
import SolutionsSection from "../components/sections/SolutionsSection";
import TagSection from "../components/sections/TagSection";
import TrainingSection from "../components/sections/TrainingSection";

const Home = () => {
  return (
    <>
      <Hero />
      <TagSection/>
      <SolutionsSection/>
      <ProductsSection/>
      <ServicesSection/>
      <TrainingSection />
    </>
  );
};
export default Home;