import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Highlights = () => {
  const highlightsRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  useGSAP(
    () => {
      gsap.to([".left-column", ".right-column"], {
        scrollTrigger: {
          trigger: "#highlights",
          start: isMobile ? "top 80%" : "top center",
        },
        y: 0,
        opacity: 1,
        stagger: 0.5,
        duration: 1,
        ease: "power1.inOut",
      });
    },
    { scope: highlightsRef, dependencies: [isMobile], revertOnUpdate: true },
  );

  return (
    <section id="highlights" ref={highlightsRef}>
      <h2>There's never been a better time to upgrade.</h2>
      <h3>Here's what you get with the new MacBook Pro.</h3>

      <div className="masonry">
        <div className="left-column">
          <div style={{ backgroundImage: "url('/highlight-bg.png')" }}>
            <img src="/laptop.png" alt="Laptop" />
            <p>Fly through demanding tasks up to 9.8x faster.</p>
          </div>
          <div>
            <img src="/sun.png" alt="Sun" className="highlight-icon" />
            <p>
              A stunning <br />
              Liquid Retina XDR <br />
              display.
            </p>
          </div>
        </div>

        <div className="right-column">
          <div className="apple-gradient">
            <img src="/ai.png" alt="AI" className="highlight-icon" />
            <p>
              Built for <br />
              <span>Apple Intelligence.</span>
            </p>
          </div>
          <div>
            <img src="/battery.png" alt="Battery" />
            <p>
              Up to
              <span className="green-gradient"> 14 more hours </span>
              battery life.
              <span className="text-dark-100"> (Up to 24 hours total.)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
