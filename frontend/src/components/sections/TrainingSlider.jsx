
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styles/sections/trainingSlider.css";

const trainingSlides = [
  {
    id: 1,
    title: "Advance HR Program",
    subtitle:
      "Professional HR training programs designed for modern business environments and industry-ready talent development.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    route: "/training/advance-hr-program",
  },
  {
    id: 2,
    title: "Software Training",
    subtitle:
      "Comprehensive software development learning paths covering programming, web development, databases, and analytics.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    route: "/training/software-training",
  },
  {
    id: 3,
    title: "Drone Training",
    subtitle:
      "Industry-focused drone certification and practical training programs for beginners and professionals.",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1600&auto=format&fit=crop",
    route: "/training/drone-training",
  },
  {
    id: 4,
    title: "Social Launchpad",
    subtitle:
      "Build your digital presence with strategic content creation, platform growth, and channel development programs.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1600&auto=format&fit=crop",
    route: "/training/social-launchpad",
  },
];

function TrainingSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = trainingSlides[activeIndex];

  return (
    <section
      className="training-slider"
      
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.35)), url(${activeSlide.image})`,
      }}
      
    >
      <div className="training-slider-overlay">
        {/* LEFT CONTENT */}
        <div className="training-left-content-wrapper">
          <div className="training-left-content">
            <p className="training-label">Training Academy</p>

            <h1 className="training-title">{activeSlide.title}</h1>

            <p className="training-subtitle">{activeSlide.subtitle}</p>

            <button
              className="explore-button"
              onClick={() => (window.location.href = activeSlide.route)}
            >
              Explore Now
            </button>
          </div>
        </div>
        {/* RIGHT SLIDER */}
        <div className="training-right-content">
          <div className="training-slider-cards-wrapper">
            <Swiper
              modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              loop={true}
              autoplay={{
                delay: 7000,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 25,
                stretch: 0,
                depth: 120,
                modifier: 2,
                slideShadows: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex);
              }}
              className="training-swiper"
            >
              {trainingSlides.map((slide) => (
                <SwiperSlide
                  key={slide.id}
                  className="training-swiper-slide"
                >
                  <div className="training-card">
                    <img src={slide.image} alt={slide.title} />
                    <div className="training-card-overlay">
                      <h3>{slide.title}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrainingSlider;