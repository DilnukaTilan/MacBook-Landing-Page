import { useRef } from "react";
import { PresentationControls } from "@react-three/drei";
import gsap from "gsap";
import MacBookModel16 from "../models/Macbook-16.jsx";
import MacBookModel14 from "../models/Macbook-14.jsx";
import { useGSAP } from "@gsap/react";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;
const MODEL_SCALES = {
  desktop: {
    small: 0.06,
    large: 0.08,
  },
  mobile: {
    small: 0.052,
    large: 0.07,
  },
};

const fadeMeshes = (group, opacity) => {
  if (!group) return;

  group.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
    }
  });
};

const moveGroup = (group, x) => {
  if (!group) return;

  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

const ModelSwitcher = ({ selectedSize, isMobile }) => {
  const smallMacBookRef = useRef();
  const largeMacBookRef = useRef();

  const showLargeMacbook = selectedSize === "16";
  const modelScale = isMobile ? MODEL_SCALES.mobile : MODEL_SCALES.desktop;

  useGSAP(() => {
    if (showLargeMacbook) {
      moveGroup(smallMacBookRef.current, -OFFSET_DISTANCE);
      moveGroup(largeMacBookRef.current, 0);

      fadeMeshes(smallMacBookRef.current, 0);
      fadeMeshes(largeMacBookRef.current, 1);
    } else {
      moveGroup(smallMacBookRef.current, 0);
      moveGroup(largeMacBookRef.current, OFFSET_DISTANCE);

      fadeMeshes(smallMacBookRef.current, 1);
      fadeMeshes(largeMacBookRef.current, 0);
    }
  }, [showLargeMacbook]);

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    azimuth: [-Infinity, Infinity],
    config: { mass: 1, tension: 0, friction: 26 },
  };

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacBookRef}>
          <MacBookModel16 scale={modelScale.large} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={smallMacBookRef}>
          <MacBookModel14 scale={modelScale.small} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;
