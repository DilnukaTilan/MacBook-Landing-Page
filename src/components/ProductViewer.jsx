import { Suspense } from "react";
import useMacbookStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import StudioLights from "./three/StudioLights.jsx";
import ModelSwitcher from "./three/ModelSwitcher.jsx";

const COLOR_OPTIONS = [
  { name: "Space Gray", value: "#adb5bd", className: "bg-neutral-300" },
  { name: "Space Black", value: "#2e2c2e", className: "bg-neutral-900" },
];

const SIZE_OPTIONS = [
  { id: "14", label: '14"', scale: 0.06, price: "$1,599" },
  { id: "16", label: '16"', scale: 0.08, price: "$2,499" },
];

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacbookStore();
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const selectedSize =
    SIZE_OPTIONS.find((option) => option.scale === scale) ?? SIZE_OPTIONS[1];
  const selectedColor =
    COLOR_OPTIONS.find((option) => option.value === color) ?? COLOR_OPTIONS[1];

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>

      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <Suspense fallback={null}>
          <StudioLights />

          <ModelSwitcher selectedSize={selectedSize.id} isMobile={isMobile} />
        </Suspense>
      </Canvas>

      <div className="controls">
        <p className="info">
          MacBook Pro | Available in 14" & 16" in Space Gray & Space Black
          colors.
        </p>
        <p className="info text-lg">
          {selectedSize.label} MacBook Pro in {selectedColor.name} -{" "}
          {selectedSize.price}
        </p>
        <div className="flex-center mt-5 gap-5">
          <div className="color-control" aria-label="Choose a finish">
            {COLOR_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setColor(option.value)}
                aria-label={option.name}
                aria-pressed={color === option.value}
                className={clsx(
                  option.className,
                  color === option.value && "active",
                )}
              />
            ))}
          </div>
          <div className="size-control" aria-label="Choose a display size">
            {SIZE_OPTIONS.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setScale(option.scale)}
                aria-pressed={scale === option.scale}
                className={clsx(
                  scale === option.scale
                    ? "bg-white text-black"
                    : "bg-transparent text-white",
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductViewer;
