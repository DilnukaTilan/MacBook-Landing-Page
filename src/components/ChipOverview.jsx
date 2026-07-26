import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ChipOverview = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".chip-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".chip-title",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".chip-description",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".chip-description",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".chip-image-wrapper",
        { opacity: 0, scale: 0.95, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".chip-image-wrapper",
            start: "top 80%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section id="chip-overview" ref={containerRef}>
      <h2 className="chip-title">Supercharged by the M4 Family of Chips</h2>

      <p className="chip-description">
        Built using{" "}
        <span className="text-white">
          second-generation 3-nanometer technology
        </span>
        , the M4 family is the most advanced lineup of chips for a personal
        computer. The M4 family features phenomenal single-threaded CPU
        performance with the world’s fastest CPU core,<sup>2</sup> along with
        outstanding multithreaded CPU performance for the most demanding
        workloads. Combined with machine learning accelerators in the CPU, an
        advanced GPU, and a faster and more efficient Neural Engine, Apple
        silicon is built from the ground up to deliver incredible performance
        for AI. Together with faster unified memory, each chip also includes
        increased memory bandwidth, so large language models (LLMs) and other
        large projects run smoothly and on device. Additionally, the
        industry-leading performance per watt of the M4 family means that{" "}
        <span className="text-white">
          users get up to 24 hours of battery life
        </span>
        , raising the bar of what users can do on a single charge.
      </p>

      <div className="chip-image-wrapper">
        <img
          src="/M4-chip-series.jpg"
          alt="M4 Chip Series - M4, M4 Pro, and M4 Max"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default ChipOverview;
