import React from "react";

export const GridBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-grid-black/[0.02] dark:bg-grid-white/[0.02]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
};

export default GridBackground;
