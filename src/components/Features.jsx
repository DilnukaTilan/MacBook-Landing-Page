import { useState, useRef, useEffect } from "react";
import { featureSlides } from "../constants";

const Features = () => {
  const scrollContainerRef = useRef(null);
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.offsetWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (
      newIndex !== activeIndex &&
      newIndex >= 0 &&
      newIndex < featureSlides.length
    ) {
      setActiveIndex(newIndex);
    }
  };

  const scrollToSlide = (index) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const targetScroll = container.offsetWidth * index;
    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToSlide(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < featureSlides.length - 1) {
      scrollToSlide(activeIndex + 1);
    }
  };

  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === activeIndex) {
          video.play().catch(() => {});
        }
      }
    });
  }, [activeIndex]);

  return (
    <section id="features">
      <div className="features-container">
        <div className="features-header">
          <div>
            <h2>Designed to perform.</h2>
          </div>

          <div className="nav-btn-group">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous Feature"
              className="nav-btn"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              disabled={activeIndex === featureSlides.length - 1}
              aria-label="Next Feature"
              className="nav-btn"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="features-track"
        >
          {featureSlides.map((slide, index) => (
            <div key={slide.id} className="feature-card">
              <div className="video-wrapper">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={slide.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>

              <div className="card-content">
                <div className="card-tag">{slide.subtitle}</div>
                <p>{slide.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination-dots">
          {featureSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`dot ${activeIndex === index ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
