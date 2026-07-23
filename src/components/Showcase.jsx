import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Showcase = () => {
  const sectionRef = useRef(null);
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(
    () => {
      if (isTablet) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      timeline
        .fromTo(
          ".showcase-mask img",
          { scale: 80 },
          { scale: 1.1, ease: "none" },
        )
        .fromTo(
          ".showcase-content",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, ease: "power1.in" },
          "<60%",
        );
    },
    { dependencies: [isTablet], scope: sectionRef, revertOnUpdate: true },
  );

  return (
    <section id="showcase" ref={sectionRef}>
      <div className="media">
        <video
          src="/videos/game.mp4"
          loop
          muted
          autoPlay
          playsInline
          preload="metadata"
          aria-label="MacBook Pro gaming performance showcase"
        />
        <div className="showcase-mask" aria-hidden="true">
          <img src="/mask-logo.svg" alt="" />
        </div>
      </div>

      <div className="showcase-content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket Chip</h2>

            <div className="mt-7 space-y-5 pe-10">
              <p>
                Introducing{" "}
                <span className="text-white">
                  M4, the next generation of Apple silicon
                </span>
                . M4 powers demanding creative and gaming workflows with
                remarkable speed and efficiency.
              </p>
              <p>
                It drives Apple Intelligence on iPad Pro, so you can write,
                create, and accomplish more with ease. All in a design that's
                unbelievably thin, light, and powerful.
              </p>
              <p>
                A brand-new display engine delivers breathtaking precision,
                color accuracy, and brightness. And a next-gen GPU with
                hardware-accelerated ray tracing brings console-level graphics
                to your fingertips.
              </p>
              <p className="text-primary">
                Learn more about Apple Intelligence
              </p>
            </div>
          </div>

          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Up to</p>
              <h3>4x faster</h3>
              <p>pro rendering performance than M2</p>
            </div>
            <div className="space-y-2">
              <p>Up to</p>
              <h3>1.5x faster</h3>
              <p>CPU performance than M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
