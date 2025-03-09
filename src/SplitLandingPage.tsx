import { useState } from "react";

export default function SplitLandingPage() {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

  return (
    <div className="h-screen flex overflow-hidden transition-all duration-500">
      {/* Left Side */}
      <div
        className="relative flex items-center justify-center transition-all duration-500 bg-blue-500 text-white cursor-pointer"
        style={{
          width:
            hoveredSide === "left"
              ? "70%"
              : hoveredSide === "right"
              ? "30%"
              : "50%",
        }}
        onMouseEnter={() => setHoveredSide("left")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <h1 className="text-4xl font-bold">Left Side</h1>
      </div>

      {/* Right Side */}
      <div
        className="relative flex items-center justify-center transition-all duration-500 bg-green-500 text-white cursor-pointer"
        style={{
          width:
            hoveredSide === "right"
              ? "70%"
              : hoveredSide === "left"
              ? "30%"
              : "50%",
        }}
        onMouseEnter={() => setHoveredSide("right")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <h1 className="text-4xl font-bold">Right Side</h1>
      </div>
    </div>
  );
}
